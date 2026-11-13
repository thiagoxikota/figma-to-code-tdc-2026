# Guia dos voluntários: Figma MCP em Fortaleza

Quarta, 18/11/2026, 18h00 às 19h40, Digital College Aldeota. Obrigado por estar junto.

O Thiago fica no palco do começo ao fim. Vocês são quem vai até a pessoa travada. A meta não é ninguém travar: é ninguém ficar parado.


## Antes de quarta

1. Siga `fortaleza/guia-participante.md` inteiro na sua máquina, até o passo 8. Quem já passou pelo erro destrava o outro muito mais rápido.
2. Faça pelo menos uma vez a importação do plugin no Mac e, se tiver acesso, no Windows. É onde a sala mais trava.
3. Baixe o ZIP do repositório e saiba onde está a pasta `handoff/`. É a rede de segurança do fim.
4. Revogue o seu token depois do ensaio. No dia você não usa o seu.


## Divisão na sala

Quantos voluntários seremos ainda não está fechado [VERIFICAR com a Gi]. A divisão sugerida:

- **Lado Figma:** login no Figma, arquivo duplicado, token, importação e vida do plugin Bridge.
- **Lado Claude:** login no Claude, Node, o `claude_desktop_config.json`, fechar e reabrir o app, teste de conexão.
- **Relógio,** se houver três ou mais voluntários: um de vocês acompanha as marcas abaixo e faz um sinal discreto ao Thiago quando a maioria não bateu.

Com dois voluntários, cada um pega um lado e o Thiago guarda o relógio pelo deck.

Cada voluntário cobre uma metade da sala, de frente para trás.


## Marcas de relógio

### Setup (18h17 às 18h47)

| Relógio | Marca esperada | Foco de vocês |
|---|---|---|
| 18h22 | Todo mundo logado, arquivo duplicado | Login travado, Linux, quem chegou sem nada instalado: já forma dupla |
| 18h27 | Maioria com token | Token que sumiu antes de copiar: gera outro |
| 18h33 | Maioria com config salvo e Claude reaberto | JSON quebrado, Claude que não foi fechado por completo |
| 18h38 | Maioria com o Bridge rodando | Pasta oculta no Mac (Cmd+Shift+G), pasta que não existe |
| 18h41 | **Corte de dupla** | Quem ainda está travado senta com alguém que já conectou, em 2 minutos |
| 18h43 | Maioria testou a conexão | O teste é o Claude dizer o nome do arquivo, não o MCP na lista |
| 18h47 | A prática começa | Ninguém segura a sala |

### Exercício (18h47 às 19h20)

| Relógio | Passo | Foco de vocês |
|---|---|---|
| 18h47 a 19h07 | 1 a 6 | Conexão que caiu (plugin fechou, Figma dormiu), token vazio no passo 2 (pedir de novo) |
| 19h07 a 19h17 | 7, Exportar | No JSON, toda medida com `px` (número solto vira `rem` na conversão do Mateus). Salvar como texto puro, nome de arquivo certo, `Card.html.txt` no Windows. Quem não vai terminar: mostrar a pasta `handoff/` |
| 19h17 a 19h20 | 8, Revogar | Passar bancada por bancada e perguntar se revogou |


## Regras

- **Dupla é o padrão.** Linux, sem permissão de instalar, login travado, Node que não instala, limite da conta gratuita: senta com alguém e segue.
- **Uma coisa por vez.** O Thiago chama o passo, a sala faz, só então vem o próximo.
- **Uma tentativa, depois dupla.** Não investigue problema profundo de uma máquina. Passou de 18h41, é dupla.
- **Fila no mesmo ponto:** avise o Thiago. Ele resolve no telão para todos.
- **Pronto é:** o Claude confirma a conexão e diz o nome do arquivo, e a leitura da Tela demo volta com "Criar sua conta", os campos e os tokens.


## O que voluntário não faz

- Não toca no token de ninguém: não lê em voz alta, não fotografa, não digita, não projeta, não pede para mandar.
- Não usa a própria conta nem o próprio token na máquina de outra pessoa.
- Não troca `@1.35.0` por `@latest`.
- Não promete que o código sai pronto para produção.


## Contingências

Não há máquina reserva nem máquina do evento [VERIFICAR com a Gi]. Toda saída é dupla, `handoff/` ou telão.

### Claude não mostra o MCP ou o status não responde

1. Abrir Settings > Developer > Edit Config e conferir o JSON: chave `mcpServers` > `figma-console`, `"command": "npx"`, `"args": ["-y", "figma-console-mcp@1.35.0"]`, token entre aspas, `"ENABLE_MCP_APPS": "true"`. Vírgula sobrando ou aspa faltando derruba tudo.
2. Fechar o Claude por completo. Mac: Cmd+Q. Windows: sair também pelo ícone perto do relógio.
3. Abrir de novo, conversa nova, "Verifique o status da conexão com o Figma".

Não subiu depois de uma volta: dupla.

### O Bridge não conecta

1. Figma **Desktop**, não o navegador, com a cópia do arquivo aberta.
2. Plugin "Figma Desktop Bridge" rodando, janela aberta.
3. A pasta do plugin não existe: o Claude ainda não abriu com o config salvo. Reabrir o Claude, esperar, importar.
4. Reiniciar em ordem: o plugin, depois o Figma.

Não subiu depois disso: dupla.

### Node

`node -v` abaixo de 18 ou "command not found": instalar a LTS e reabrir o Claude. Sem permissão de instalar: dupla na hora, sem tentar contornar.

### Token recusado

Confere `figd_` no começo e se não entrou espaço ou quebra de linha ao colar. Gera outro uma vez, cola, reabre o Claude. Persistiu: dupla.

### Login bloqueado

Uma tentativa de reenviar o código. Não resolveu: dupla.

### Rede corporativa, VPN, antivírus

A ponte usa as portas locais 9223 a 9232. Desligar a VPN. Antivírus corporativo que bloqueia: dupla.

### Limite da conta gratuita do Claude

Dupla com quem ainda tem uso. Uma geração boa vale mais que três apressadas. No passo 7, `handoff/`.

### Rede da sala cai

Avise o Thiago. Ele roda o exercício sem MCP no telão (`prompts/standalone.md`), e todo mundo leva a pasta `handoff/` para o workshop do Mateus.

### Linux

Dupla desde o primeiro minuto, sem tentar instalar.


## No fim

- Todo mundo revoga o token no Figma.
- Quem quiser tira a entrada `figma-console` do config do Claude.
- Quem usou máquina que não é sua: sair das contas do Figma e do Claude.
- Todo mundo com a pasta `fora-do-frame` (ou o `handoff/`) para as 20h.
