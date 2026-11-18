import importlib.util, sys
from pathlib import Path
sys.path.insert(0, str(Path.home()/".claude/skills/google-slides/scripts"))
path = Path.home() / ".claude/skills/google-slides/scripts/slides.py"
spec = importlib.util.spec_from_file_location("local_slides", path)
S = importlib.util.module_from_spec(spec); spec.loader.exec_module(S)
api = S.api_request
DECK="1BCULdnIibjQC0t571Nh77tcL1wnz-PRLkp0gWYTLyhU"
def batch(reqs):
    r = api("POST", f"https://slides.googleapis.com/v1/presentations/{DECK}:batchUpdate", data={"requests": reqs})
    if "error" in r: raise SystemExit(r["error"])
    return r
def get(fields=None):
    return api("GET", f"https://slides.googleapis.com/v1/presentations/{DECK}", params={"fields": fields} if fields else None)
import urllib.request, os
def thumbs(outdir, ids=None, size="LARGE"):
    os.makedirs(outdir, exist_ok=True)
    d = get("slides(objectId)")
    out=[]
    for i,s in enumerate(d["slides"]):
        if ids and s["objectId"] not in ids: continue
        r = api("GET", f"https://slides.googleapis.com/v1/presentations/{DECK}/pages/{s['objectId']}/thumbnail", params={"thumbnailProperties.thumbnailSize": size})
        p=f"{outdir}/{i+1:02d}-{s['objectId']}.png"
        urllib.request.urlretrieve(r["contentUrl"], p); out.append(p)
    return out
