# Cartão de bancada (A5, 1 por máquina)

Impressão: A5, frente única, alto contraste, fonte grande. Tirar ~40 cópias mais reservas. Deixar um em cada máquina da sala antes de o público entrar.

Para gerar o PDF A5 a partir deste conteúdo, o toolchain do repo brand (pandoc + template A5) resolve; ou diagramar direto no Figma e exportar. O conteúdo abaixo é a fonte de verdade do texto.

---

## Frente do cartão

**Do Figma ao código sem handoff**
TDC Florianópolis 2026

**3 passos pra começar agora:**

1. Entre no **Figma Desktop** e no **Claude Desktop** com as suas contas (as duas já estão instaladas nesta máquina).

2. Aponte o celular pro **QR** e siga o assistente. Ele te leva passo a passo.

3. Gere o seu **token do Figma** e conecte. O script de configuração já está na área de trabalho, é só rodar.

`[QR grande aqui]`

**thiagoxikota.com/tdc**

Travou? Fala com o apoio, junta com a dupla do lado, ou pede uma máquina reserva.

---

## Notas de produção

- O QR do cartão de bancada e o QR do slide 13 apontam pro MESMO destino (assistente do kit, `onboarding/index.html`), com `utm_medium=palco`. Esse UTM é DIFERENTE do UTM pré-evento (`utm_medium=pre-evento`) que a Thamie manda antes, senão a métrica de scan da sala fica poluída.
- URL curta placeholder: `thiagoxikota.com/tdc`. Confirmar o destino final e o encurtador antes de fechar a arte.
- Testar o QR com o próprio celular antes de imprimir: apontar, abrir o assistente, ver a rota por dispositivo carregar.
- Alto contraste de verdade: texto quase preto sobre branco, nada de cinza claro. QR grande e nítido, URL legível embaixo em fonte grande. A sala vai ler isso de relance, sentada, antes do café.
- Este cartão fica na máquina do evento (Windows já preparado: Figma, Claude Desktop, Node, plugin Bridge importado, config sem token, projeto baixado e buildado, atalho e tutorial na área de trabalho). Por isso o passo 1 é entrar nas contas, não instalar nada.
