from g import *
import json, urllib.parse
PT = 12700
def C(h):
    h = h.lstrip("#"); return {"red": int(h[0:2], 16)/255, "green": int(h[2:4], 16)/255, "blue": int(h[4:6], 16)/255}
WHITE, SUMI, INK2, RED = C("FFFFFF"), C("161722"), C("4C4A45"), C("DC000C")
VOID, HOT, INK2D, SURF = C("0B0C11"), C("FF2A1C"), C("C9C6C0"), C("F3F3F4")
SURFD = C("1B1C24")
CODEBG = C("161722")
MONO = "JetBrains Mono"
R = []

def ep(page, x, y, w, h):
    return {"pageObjectId": page, "size": {"width": {"magnitude": w*PT, "unit": "EMU"}, "height": {"magnitude": h*PT, "unit": "EMU"}},
            "transform": {"scaleX": 1, "scaleY": 1, "translateX": x*PT, "translateY": y*PT, "unit": "EMU"}}

def W(inner):
    return "https://images.weserv.nl/?output=png&w=256&h=256&fit=contain&url=" + urllib.parse.quote(inner, safe="")
def ICO(p, color=None):
    inner = f"api.iconify.design/{p}.svg" + (f"?color=%23{color}" if color else "")
    return W(inner)

def _shape(oid, page, x, y, w, h, kind, fill):
    R.append({"createShape": {"objectId": oid, "shapeType": kind, "elementProperties": ep(page, x, y, w, h)}})
    R.append({"updateShapeProperties": {"objectId": oid, "shapeProperties": {
        "shapeBackgroundFill": {"solidFill": {"color": {"rgbColor": fill}}},
        "outline": {"propertyState": "NOT_RENDERED"}}, "fields": "shapeBackgroundFill,outline"}})

def rrect(oid, page, x, y, w, h, r=20, fill=SURF):
    """rounded surface without stroke: 2 rects + 4 corner circles, grouped"""
    ids = [f"{oid}_h", f"{oid}_v", f"{oid}_c1", f"{oid}_c2", f"{oid}_c3", f"{oid}_c4"]
    _shape(ids[0], page, x, y+r, w, h-2*r, "RECTANGLE", fill)
    _shape(ids[1], page, x+r, y, w-2*r, h, "RECTANGLE", fill)
    for i, (cx, cy) in enumerate([(x, y), (x+w-2*r, y), (x, y+h-2*r), (x+w-2*r, y+h-2*r)]):
        _shape(ids[2+i], page, cx, cy, 2*r, 2*r, "ELLIPSE", fill)
    R.append({"groupObjects": {"groupObjectId": oid, "childrenObjectIds": ids}})

def tb(oid, page, x, y, w, h, paras, align="START", ls=110, sb=0, anchor="TOP", inset=True):
    """paras: list of paragraphs; paragraph = list of runs (text,size,color,bold[,font])"""
    R.append({"createShape": {"objectId": oid, "shapeType": "TEXT_BOX", "elementProperties": ep(page, x, y, w, h)}})
    full = "\n".join("".join(r[0] for r in p) for p in paras)
    R.append({"insertText": {"objectId": oid, "text": full, "insertionIndex": 0}})
    R.append({"updateShapeProperties": {"objectId": oid, "shapeProperties": {"contentAlignment": anchor}, "fields": "contentAlignment"}})
    R.append({"updateParagraphStyle": {"objectId": oid, "textRange": {"type": "ALL"}, "style": {
        "alignment": align, "lineSpacing": ls, "spaceBelow": {"magnitude": sb, "unit": "PT"}, "spaceAbove": {"magnitude": 0, "unit": "PT"},
        "indentStart": {"magnitude": 0, "unit": "PT"}, "indentFirstLine": {"magnitude": 0, "unit": "PT"}},
        "fields": "alignment,lineSpacing,spaceBelow,spaceAbove,indentStart,indentFirstLine"}})
    i = 0
    for p in paras:
        for run in p:
            t, size, color, bold = run[:4]; font = run[4] if len(run) > 4 else "Sora"
            if t:
                R.append({"updateTextStyle": {"objectId": oid, "textRange": {"type": "FIXED_RANGE", "startIndex": i, "endIndex": i+len(t)},
                    "style": {"fontFamily": font, "fontSize": {"magnitude": size, "unit": "PT"}, "foregroundColor": {"opaqueColor": {"rgbColor": color}}, "bold": bold},
                    "fields": "fontFamily,fontSize,foregroundColor,bold"}})
            i += len(t)
        i += 1

def img(oid, page, url, x, y, w, h):
    R.append({"createImage": {"objectId": oid, "url": url, "elementProperties": ep(page, x, y, w, h)}})

def bg(page, color):
    R.append({"updatePageProperties": {"objectId": page, "pageProperties": {"pageBackgroundFill": {"solidFill": {"color": {"rgbColor": color}}}}, "fields": "pageBackgroundFill"}})

def title(page, text, sub=None, y=78, size=34, color=SUMI, subcolor=INK2):
    tb(f"{page}_t", page, 50, y, 860, 52, [[(text, size, color, True)]], ls=100)
    if sub: tb(f"{page}_st", page, 50, y+52, 860, 32, [[(sub, 18, subcolor, False)]], ls=110)

def placeholder(oid, page, x, y, w, h, label="Print do ensaio", fill=SURF, ink=INK2, sub=None):
    rrect(oid, page, x, y, w, h, r=20, fill=fill)
    paras = [[(label, 18, ink, True)]]
    if sub: paras.append([(sub, 14, ink, False)])
    tb(oid+"_l", page, x, y, w, h, paras, align="CENTER", anchor="MIDDLE", sb=4)

def delete(*ids):
    for i in ids: R.append({"deleteObject": {"objectId": i}})
