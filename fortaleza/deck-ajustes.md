# Ajustes do deck para Fortaleza

O deck do TDC (Google Slides, link em `slides/README.md`) **não foi tocado**: a data de modificação dele continua 23/07/2026, 13h11 UTC, conferida depois das edições.

Foi feita uma cópia, e as mudanças sem decisão pendente já estão aplicadas nela:

**Cópia Fortaleza:** https://docs.google.com/presentation/d/1BCULdnIibjQC0t571Nh77tcL1wnz-PRLkp0gWYTLyhU/edit
Nome: "Fora do Frame Fortaleza 18/11 - Figma MCP (cópia do deck TDC)", na mesma pasta do Drive do original. 34 slides.

Os slides 14, 15, 26, 27 e 33 foram renderizados e conferidos depois da edição: texto inteiro, sem corte, mesma fonte e hierarquia do deck.


## Nova versão para designers: o que mudar (ainda não aplicado)

O workshop mudou de público e de formato (ver `roteiro.md`): título novo, Parte A sem instalação, ponte imagem x arquivo e Parte B com o Figma conectado. Esta lista é só o que mudar na cópia Fortaleza. **Nada disso foi aplicado no Google Slides.** Os números são os da cópia atual (34 slides).

### Slides alterados

| Slide (cópia) | Hoje | Mudar para |
|---|---|---|
| 1 e 2 (capa) | Título do TDC | "Seu Figma vira produto" e, abaixo, "Design com IA, do arquivo ao protótipo que funciona". Sem "MCP" na capa |
| 4 (promessa) | Promessa do TDC (pipeline rodando, arquivos na mão) | "Você sai com a sua tela revisada como um dev revisaria, um protótipo que funciona e, se conectar o Figma, os tokens reais prontos para o código. Tudo na conta gratuita." |
| 6 e 7 (como funciona) | Quatro peças e "Código: React + TypeScript" | Vira o slide novo "Duas partes" (abaixo). Se o 6 ficar, trocar "React + TypeScript" por "HTML e CSS" |
| 8 a 11 (demo de status, leitura e geração) | Demo de 10 min na abertura | Pular (ocultar). O setup é mostrado ao vivo com o comando, e a comparação vai para a ponte |
| 12 e 13 (Take A e Take B, frase da prova) | Abertura | Movidos para a ponte, às 18h50, depois da Parte A. Título do 12: "Imagem é aproximação. O arquivo é a fonte." |
| 14 (QR do guia) | Abre o setup | Fica igual. Entra no bloco "Como vai ser", às 18h05 |
| 15 a 18 (Abrir, Token, Conectar, Ligar e testar) | Quatro slides do setup manual | Um slide "Instale com um comando" (o comando do guia, Passo 2, e as cinco coisas que ele faz) e o slide 18, "Ligar e testar", mantido. Ocultar 16 e 17 (o manual fica só no guia). Rodapé: "Travou? Chame um voluntário e siga a Parte A." |
| 19 (espera do setup) | Espera da reta final | Ocultar, ou trocar o texto por "Conectou? Já comece a Parte A." |
| 20 a 27 (passos) | Barra "1 Ler · 2 Tokens · 3 Auditar · 4 Gerar · 5 Inspecionar · 6 Corrigir · 7 Exportar · 8 Revogar" | "Parte B: 1 Ler · 2 Tokens · 3 Auditar · 4 Gerar · 5 Conferir · 6 Exportar · 7 Revogar" e "Passo N de 7". Juntar Inspecionar e Corrigir (24 e 25) em "5. Conferir a fonte" |
| 23 (Gerar) | Card em React + TypeScript | "4. Gere o Card em HTML e CSS, com os tokens do Figma" |
| 26 (Leve pro código) | Prompts 7a e 7b | "6. Exporte para a pasta": só o JSON dos tokens (o Card já sai em HTML e CSS no passo 4) e o copiar e colar dos três arquivos |
| 27 (Revogar) | "8. Revogue seu token", "Passo 8 de 8" | "7. Revogue seu token", "Passo 7 de 7" |
| 28 a 30 (validação e limites) | Três slides, 8 min | Um slide, 4 min: "O que divergiu?" e os limites do guia (seção 8), incluindo "protótipo da imagem é aproximação" |
| 33 (passagem) | "tokens.json, Card.html e Card.css" | Manter e acrescentar: "Fez só a Parte A? A pasta handoff/ tem os mesmos três arquivos." |
| Notas do orador | Horários da grade antiga (18h22 a 19h40) | Horários da grade nova do `roteiro.md` |

### Slides novos

| Onde | Título | Conteúdo |
|---|---|---|
| Depois do 5 | Duas partes | Parte A: sua tela como imagem, sem instalar, revisão de dev e protótipo. Parte B: o Figma conectado com um comando, os valores reais e a pasta para o Mateus. "Não instalou? A B é em dupla." |
| Antes do 20 | Parte A, 1: exporte a tela | Selecionar o frame, Export, PNG 2x. "Pode ser a Tela demo ou uma tela sua." |
| Antes do 20 | Parte A, 2: a revisão de dev | "Cole a imagem no Claude e peça a revisão. O prompt está no guia." Os quatro eixos: estados, espaçamento, texto, acessibilidade |
| Antes do 20 | Parte A, 3: o protótipo | "Na mesma conversa, peça o protótipo. Ele aparece no próprio Claude. Clique, digite, envie vazio." |

Os prompts não vão inteiros no slide: estão no guia, para copiar.


## Já aplicado na cópia (versão anterior, para devs)

As mudanças abaixo foram feitas para a versão anterior e continuam na cópia. A barra de 8 passos e o texto do slide 26 são substituídos pela lista acima.

| Slide (cópia) | Antes | Depois |
|---|---|---|
| Todos | Rodapé "The AI Collective Florianópolis · Friends of Figma Florianópolis · Designers no Boteco" | "Fora do Frame · uma experiência UXFor · Fortaleza" |
| 14 | Título "Acessem o guia em suas màquinas." | Acento corrigido: "máquinas" |
| 14 | QR para `thiagoxikota.com/tdc` | QR para o guia do participante no GitHub |
| 14 | "Tudo do workshop mora nesse link..." e URL `thiagoxikota.com/tdc` | "Pasta fortaleza, arquivo guia-participante. Siga pelo guia na sua máquina, não pelo telão." e URL `github.com/thiagoxikota/figma-to-code-tdc-2026`, em 26 pt para caber |
| 15 a 18 | "Travou? Pare de repetir. Siga em dupla ou use uma máquina reserva." | "Travou? Pare de repetir. Chame um voluntário ou siga em dupla." |
| 20 a 25 e 27 | Barra de passos com 7 e "Passo N de 7" | "1 Ler · 2 Tokens · 3 Auditar · 4 Gerar · 5 Inspecionar · 6 Corrigir · 7 Exportar · 8 Revogar" e "Passo N de 8" |
| 26 (novo) | | "7. Leve pro código", duplicado do slide de Corrigir. Texto abaixo |
| 27 | "7. Revogue seu token", "Passo 7 de 7" | "8. Revogue seu token", "Passo 8 de 8" |
| 33 (novo) | | Passagem para o Mateus, duplicado do slide "Ferramentas mudam". Texto abaixo |
| Notas, 14 a 20 | Horários da manhã (10:37 a 10:57), "25 minutos", "máquina reserva", explicação da página `/tdc` | 18h22, 18h27, 18h33, 18h43, corte às 18h47, "30 minutos", sem reserva. Nota do 14 reescrita para o guia do GitHub |
| Notas, 30 a 34 | 11:30, 11:36, 11:42, 11:45 | 19h28, 19h33, 19h38, 19h40 |

Texto do slide 26:

```
7. Leve pro código

Antes de revogar: o 7a ainda lê o Figma. Os prompts 7a e 7b estão no guia.
Cada bloco vai para a pasta fora-do-frame: tokens.json, Card.html, Card.css.

7a  tokens em JSON (formato DTCG), lidos do Figma via MCP
7b  o Card corrigido, em HTML e CSS puros
7c  copie e cole: o Claude gratuito não grava arquivo

Não terminou ou bateu no limite? Pegue a pasta handoff/ do repositório. Às 20h o Mateus parte desses arquivos.
```

Texto do slide 33:

```
Às 20h, o Mateus
parte da sua pasta.

tokens.json, Card.html e Card.css:
o ponto de partida do próximo workshop.
```

Os dois têm nota do orador nova.

**Linhas "Até HH:MM".** Não existem mais no deck: foram tiradas em 23/07 (commit `c382e39`, "zero horário no telão"). Os horários vivem só nas notas, e lá já estão em horário de Fortaleza.


## Falta decidir (só você)

Além de aprovar e aplicar a lista "Nova versão para designers":

### Slide 3, "Quem está com vocês hoje"

Hoje: três colunas, Thiago Xikota ("Líder do The AI Collective Florianópolis"), Bruno Bach ("Líder do Friends of Figma Florianópolis.") e Lourena ("Anfitriã Designers no Boteco Florianópolis."), com fotos. A nota do slide 2 e a do 3 também citam os dois.

Bruno e Lourena não estarão em Fortaleza. Duas saídas:

- **Mais simples:** apagar as colunas de Bruno e Lourena e deixar só a sua, com o título "Quem está com vocês hoje" trocado por "Quem fala com vocês hoje". Nota: "Eu sou o Thiago Xikota, Senior Product Designer, pesquisador na UFSC e líder do The AI Collective Florianópolis. Hoje tem voluntários do Fora do Frame na sala: levantem a mão se travar."
- **Com a equipe da sala:** trocar Bruno e Lourena pelos voluntários ou pela Gi. Depende dos nomes [VERIFICAR com a Gi].

### Slide 14, QR

Já trocado na cópia. O QR novo (`fortaleza/qr-guia.png`) aponta para `https://github.com/thiagoxikota/figma-to-code-tdc-2026/blob/main/fortaleza/guia-participante.md`; a miniatura do slide renderizada foi lida de volta com `zbarimg` e devolve essa URL. Falta só o teste com o celular, de longe, no projetor.

Alternativa melhor, se der tempo: uma URL curta `thiagoxikota.com/fortaleza` redirecionando para o guia. Exige deploy no portfólio, que eu não fiz.

A página `thiagoxikota.com/tdc` continua no ar e ensina o mesmo setup (Claude Desktop, mesmo MCP), mas oferece a rota de máquina reserva, não tem a Parte A nem o passo de exportação. Por isso o guia da sala é o do GitHub.

### Slide 5, "Fique até o final para uma surpresa!", e slide 34, formulário e mentoria

Hoje o 34 diz "Concorra a uma mentoria de 1 hora com Thiago Xikota", QR e `forms.gle/Ba7rRF3TUVSdJrT19`, e o canto direito do rodapé diz "Xikota.ai, em construção". A surpresa do TDC (todo mundo que responde ganha a mentoria) está na nota do slide 5 e do 34.

Opções:

- **Repetir a mentoria.** Criar um formulário novo para Fortaleza (o do TDC mistura as respostas) e trocar URL e QR do slide 34. Manter o slide 5.
- **Sem mentoria.** Apagar o slide 5 e o 34. O fechamento vira o slide 33, de passagem para o Mateus, que já encerra bem às 19h36.

Proposta de texto, se repetir:

```
Concorra a uma mentoria de 1 hora
com Thiago Xikota
Acesse o QR Code e preencha o formulário
[URL DO FORMULÁRIO NOVO]
```

### Rodapé direito do slide 34, "Xikota.ai, em construção"

Se o slide ficar, decidir se esse rótulo continua. Proposta neutra: "Fechamento".

### Depois de fechar o deck

Exportar a cópia em PDF para `fortaleza/deck-fortaleza.pdf` (fallback offline do palco, como o `slides/deck.pdf` no TDC) e testar o QR com o celular, de longe, no projetor.
