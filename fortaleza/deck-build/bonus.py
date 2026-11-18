from lib3 import *
import lib3
d = get("slides(objectId,pageElements(objectId,image(contentUrl)))")
ids = [s["objectId"] for s in d["slides"]]
old=[i for i in ids if i.startswith("v11b")]
if old:
    batch([{"deleteObject":{"objectId":i}} for i in old]); ids=[i for i in ids if i not in old]
assert ids[-1] == "v10s16", ids
logo_url = [e["image"]["contentUrl"] for e in d["slides"][0]["pageElements"] if e["objectId"].endswith("_logo")][0]
def logo(p): img(f"{p}_logo", p, logo_url, 56, 36, 71, 21)
RAW = "https://raw.githubusercontent.com/thiagoxikota/figma-to-code-tdc-2026/main/fortaleza/img/"
B = lambda n: RAW + "bonus/" + n + ".jpg"
HERO = RAW + "hero-exemplo-thiago.png"
FIGMA = ICO("logos/figma"); CLAUDE = ICO("logos/claude-icon"); OPENAI = ICO("logos/openai-icon")
NETLIFY = ICO("logos/netlify-icon"); GITHUB = ICO("logos/github-icon"); REACT = ICO("logos/react")
SWIFT = ICO("logos/swift"); PLAYW = ICO("logos/playwright"); FILE = ICO("hugeicons/file-02")
PHONE = ICO("hugeicons/smart-phone-01"); BOOK = ICO("hugeicons/book-open-01")
P = [f"v11b{n:02d}" for n in range(9)]
base = len(ids)
for i, p in enumerate(P):
    R.append({"createSlide": {"objectId": p, "insertionIndex": base + i, "slideLayoutReference": {"layoutId": "p18"}}})
    bg(p, VOID if i == 0 else WHITE)
    if i: logo(p)

# 0 abertura
p = P[0]
tb(f"{p}_t", p, 50, 165, 860, 180, [[("Bônus", 64, WHITE, True)], [("para quem quer ir além", 56, HOT, True)]], ls=100)
tb(f"{p}_s", p, 50, 360, 860, 40, [[("Só se a sala inteira chegou aqui.", 22, INK2D, False)]])

# 1 quebra-gelo
p = P[1]; title(p, "Quebra-gelo", "Dois minutos, com quem está do lado.")
qs = [[("Mostre a sua hero. Por que essa cor?", 18, SUMI, False)],
      [("Peça a crítica de um diretor de arte exigente. ", 18, SUMI, False), ("Concorda com o agente?", 18, RED, True)],
      [("Qual tarefa chata você daria a um agente amanhã?", 18, SUMI, False)]]
for i, q in enumerate(qs):
    y = 190 + i*85
    tb(f"{p}_n{i}", p, 50, y, 40, 60, [[(str(i+1), 26, SUMI, True)]])
    tb(f"{p}_q{i}", p, 95, y+2, 380, 70, [q], ls=120)
rrect(f"{p}_pn", p, 510, 150, 400, 310, r=24)
img(f"{p}_i", p, HERO, 530, 172, 360, 215)
tb(f"{p}_c", p, 530, 400, 360, 40, [[("A hero do Thiago, pronta para a crítica", 14, INK2, False)]], anchor="MIDDLE")

# 2 fluxos opcionais
p = P[2]; title(p, "Fluxos opcionais", "Escolha um. Os prompts estão no guia, seção Bônus.")
cards = [(FILE, "Handoff", "o agente lê o frame e escreve o que o dev precisa saber"),
         (PHONE, "Versão celular", "um frame de 390 ao lado, com as mesmas variáveis"),
         (OPENAI, "Codex na mesma ponte", "o instalador já ligou: mande o mesmo alô no Codex"),
         (NETLIFY, "Site no ar", "Netlify Drop: arraste a pasta meu-site e ganhe um link")]
for i, (ic, a, b) in enumerate(cards):
    x = 50 + i*218; y = 180
    rrect(f"{p}_k{i}", p, x, y, 206, 250, r=20)
    img(f"{p}_ic{i}", p, ic, x+22, y+24, 40, 40)
    tb(f"{p}_a{i}", p, x+22, y+86, 166, 56, [[(a, 18, SUMI, True)]], ls=105)
    tb(f"{p}_b{i}", p, x+22, y+140, 166, 90, [[(b, 13, INK2, False)]], ls=125)
tb(f"{p}_f", p, 50, 452, 860, 30, [[("Um fluxo por vez, sempre conferindo no Figma.", 16, RED, True)]])

# 3 case portfolio
p = P[3]
tb(f"{p}_t", p, 50, 78, 860, 52, [[("Meu portfólio, feito com ", 34, SUMI, True), ("Claude Code", 34, RED, True)]], ls=100)
tb(f"{p}_x", p, 50, 160, 330, 220, [[("thiagoxikota.com", 20, SUMI, True)],
    [("Conteúdo organizado, projeto guardado no GitHub e site publicado pelo Netlify, com prompts curtos.", 15, INK2, False)],
    [("O passo a passo virou post:", 13, INK2, False)], [("thiagoxikota.com/blog", 13, SUMI, False, MONO)]], ls=125, sb=10)
for i, ic in enumerate([CLAUDE, GITHUB, NETLIFY]):
    img(f"{p}_lg{i}", p, ic, 50 + i*46, 410, 30, 30)
rrect(f"{p}_pn", p, 410, 140, 500, 330, r=24)
img(f"{p}_d", p, B("portfolio"), 428, 160, 380, 237.5)
tb(f"{p}_dc", p, 428, 412, 320, 40, [[("No computador e no celular, o mesmo site.", 13, INK2, False)]], anchor="MIDDLE")
rrect(f"{p}_ph", p, 768, 166, 130, 284, r=16, fill=SUMI)
img(f"{p}_m", p, B("portfolio-celular"), 774, 172, 118, 255.4)

# 4 case touch grass
p = P[4]
tb(f"{p}_t", p, 50, 78, 860, 52, [[("Touch Grass: um design system em ", 34, SUMI, True), ("dois dias", 34, RED, True)]], ls=100)
tb(f"{p}_x", p, 50, 160, 330, 230, [[("Open source, com Claude Code. E não foi vibe coding.", 18, SUMI, True)],
    [("Tokens, React, Figma e SwiftUI. Zero canto arredondado, zero texto cinza, zero animação.", 15, INK2, False)],
    [("github.com/thiagoxikota/touch-grass", 12, SUMI, False, MONO)]], ls=125, sb=12)
for i, ic in enumerate([GITHUB, FIGMA, REACT, SWIFT]):
    img(f"{p}_lg{i}", p, ic, 50 + i*46, 410, 30, 30)
rrect(f"{p}_pn", p, 410, 140, 500, 330, r=24)
img(f"{p}_d", p, B("touch-grass"), 430, 160, 460, 287.5)

# 5 mais dicas
p = P[5]; title(p, "Mais dicas", "O que funciona comigo, todo dia.")
tips = [[("Peça para ler antes de escrever: descreva o frame antes de mudar.", 18, SUMI, False)],
        [("Um ajuste por vez, terminando com: ", 18, SUMI, False), ("não mude mais nada.", 18, RED, True)],
        [("Regra escrita vence prompt longo. Erro repetido vira linha no DESIGN.md.", 18, SUMI, False)],
        [("Confira nas camadas, não no print.", 18, SUMI, False)],
        [("Plugin caiu? Feche a janela dele e abra de novo antes de reinstalar.", 18, SUMI, False)]]
for i, t in enumerate(tips):
    y = 180 + i*58
    tb(f"{p}_n{i}", p, 50, y, 40, 44, [[(str(i+1), 22, SUMI, True)]])
    tb(f"{p}_q{i}", p, 95, y+3, 815, 44, [t])

# 6 roube minha stack
p = P[6]
tb(f"{p}_t", p, 50, 78, 860, 52, [[("Roube ", 34, SUMI, True), ("minha stack", 34, RED, True)]], ls=100)
tb(f"{p}_st", p, 50, 130, 860, 32, [[("Agentes, conexões e skills que eu uso. Links no guia.", 18, INK2, False)]])
tb(f"{p}_l0", p, 50, 172, 400, 22, [[("Agentes e conexões", 13, INK2, True)]])
ag = [(CLAUDE, "Claude Code", "o agente que lê a pasta do projeto"), (OPENAI, "Codex", "segunda opinião, na mesma ponte"),
      (FIGMA, "Figma Console MCP", "a ponte de hoje"), (BOOK, "Context7", "documentação atual, dentro do agente"),
      (PLAYW, "Playwright MCP", "o agente testa no navegador")]
for i, (ic, a, b) in enumerate(ag):
    x = 50 + i*174; y = 198
    rrect(f"{p}_k{i}", p, x, y, 162, 150, r=18)
    img(f"{p}_ic{i}", p, ic, x+16, y+18, 34, 34)
    tb(f"{p}_a{i}", p, x+16, y+60, 136, 40, [[(a, 14, SUMI, True)]], ls=100)
    tb(f"{p}_b{i}", p, x+16, y+100, 136, 46, [[(b, 12, INK2, False)]], ls=115)
tb(f"{p}_l1", p, 50, 364, 400, 22, [[("Skills do Claude Code", 13, INK2, True)]])
sk = [("frontend-design", "tira a cara de template"), ("superpowers", "planeja antes de codar"), ("skill-creator", "escreve sua primeira skill com você")]
for i, (a, b) in enumerate(sk):
    x = 50 + i*290; y = 390
    rrect(f"{p}_s{i}", p, x, y, 278, 84, r=18)
    tb(f"{p}_sa{i}", p, x+18, y+14, 250, 60, [[(a, 15, SUMI, True, MONO)], [(b, 13, INK2, False)]], ls=120, sb=4)

# 7 sites de referencia
p = P[7]
tb(f"{p}_t", p, 50, 78, 860, 52, [[("Sites para ", 34, SUMI, True), ("roubar", 34, RED, True)]], ls=100)
sites = [("refero", "Refero", "referência de tela"), ("mobbin", "Mobbin", "telas de apps reais"), ("land-book", "Land-book", "landing pages"),
         ("godly", "Godly", "sites com movimento"), ("shadcn", "shadcn/ui", "componentes de base"), ("reactbits", "React Bits", "componentes animados")]
for i, (f, a, b) in enumerate(sites):
    x = 50 + (i % 3)*302; y = 140 + (i // 3)*186
    img(f"{p}_i{i}", p, B(f), x, y, 256, 160)
    tb(f"{p}_c{i}", p, x, y+164, 256, 22, [[(a + "  ", 13, SUMI, True), (b, 13, INK2, False)]])

# 8 icones, fontes e docs
p = P[8]; title(p, "Ícones, fontes e docs", "Os que ficam abertos aqui.")
more = [("hugeicons", "Hugeicons", "os ícones que uso em tudo"), ("fontshare", "Fontshare", "fontes boas e grátis"),
        ("context7", "Context7", "documentação atual para o agente"), ("superpowers", "superpowers", "o agente planeja antes de codar")]
for i, (f, a, b) in enumerate(more):
    x = 50 + i*219; y = 190
    img(f"{p}_i{i}", p, B(f), x, y, 203, 127)
    tb(f"{p}_c{i}", p, x, y+136, 203, 60, [[(a, 15, SUMI, True)], [(b, 12, INK2, False)]], ls=120, sb=2)
tb(f"{p}_f", p, 50, 440, 860, 30, [[("Todos os links estão no guia, seção Bônus.", 16, RED, True)]])

batch(R)
NOTES = [
 "Bônus. Só se a sala inteira terminou.\nSe não, pule direto para o fim.",
 "Quebra-gelo, dois minutos.\nMostrem a hero para quem está do lado.\nQuem tiver mensagem sobrando: peçam a crítica do diretor de arte. O prompt está no guia.\nPergunto para a sala: qual tarefa chata vocês dariam a um agente amanhã?",
 "Escolham um fluxo.\nHandoff: o agente lê o frame e escreve para o dev.\nVersão celular: um frame novo de 390, sem mexer no original.\nCodex: quem tem já está ligado pelo instalador.\nSite no ar: Netlify Drop.\nUm por vez, conferindo no Figma.",
 "Meu portfólio.\nFeito com Claude Code, guardado no GitHub, publicado pelo Netlify.\nNo computador e no celular, o mesmo site.\nO passo a passo está no blog.",
 "Touch Grass.\nUm design system open source, em dois dias, com Claude Code.\nNão foi vibe coding: regra escrita, skills e revisão.\nTokens, React, Figma e SwiftUI.",
 "Dicas que uso todo dia.\nLer antes de escrever.\nUm ajuste por vez: não mude mais nada.\nErro repetido vira regra no DESIGN.md.\nConferir nas camadas.\nPlugin caiu: reabrir antes de reinstalar.",
 "Roubem minha stack.\nClaude Code e Codex.\nFigma Console MCP, Context7 e Playwright.\nSkills: frontend-design, superpowers e skill-creator.\nTudo com link no guia.",
 "Sites de referência.\nRefero e Mobbin para tela real.\nLand-book e Godly para site.\nshadcn e React Bits para componente.",
 "Hugeicons, Fontshare, Context7 e superpowers.\nTodos os links no guia, seção Bônus.\nDepois volto para o slide do LinkedIn.",
]
d2 = get("slides(objectId,slideProperties(notesPage(notesProperties(speakerNotesObjectId))))")
NR=[]
for s_ in d2["slides"]:
    if s_["objectId"] in P:
        nid = s_["slideProperties"]["notesPage"]["notesProperties"]["speakerNotesObjectId"]
        NR.append({"insertText":{"objectId":nid,"text":NOTES[P.index(s_["objectId"])],"insertionIndex":0}})
batch(NR)
print("ok", len(R), len(NR))
