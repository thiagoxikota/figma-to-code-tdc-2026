# Guia dos voluntários: Seu Figma vira produto (Fortaleza)

Quarta, 18/11/2026, 18h00 às 19h40, Digital College Aldeota. Obrigado por estar junto.

O público é de designers, não de devs. Muita gente nunca abriu o Terminal. Tom de quem ajuda colega, sem jargão.

O Thiago fica no palco do começo ao fim. Vocês são quem vai até a pessoa travada. A meta não é ninguém travar: é ninguém ficar parado.


## Como o workshop funciona

- **Parte A, todo mundo, sem instalar nada (18h25 às 18h50).** Exportar uma tela como PNG, colar no Claude gratuito, pedir a revisão de dev e o protótipo navegável, que aparece no próprio Claude.
- **Parte B, Figma conectado (18h55 às 19h23).** Um comando liga o Figma ao Claude. O Claude lê o arquivo real, gera o Card com os tokens e exporta os tokens em JSON para a pasta `fora-do-frame`, de onde o Mateus parte às 20h.

Quem não instalar faz a A inteira e a B em dupla. Ninguém precisa instalar para ter resultado.


## Antes de quarta

1. Siga `fortaleza/guia-participante.md` inteiro na sua máquina: a Parte A e a Parte B até o B7. Quem já passou pelo erro destrava o outro muito mais rápido.
2. Rode o comando de instalação pelo menos uma vez e importe o plugin, no Mac e, se tiver acesso, no Windows. É onde a sala mais trava.
3. Baixe o ZIP do repositório e saiba onde está a pasta `handoff/`. É a rede de segurança do fim.
4. Revogue o seu token depois do ensaio. No dia você não usa o seu.


## Divisão na sala

Quantos voluntários seremos ainda não está fechado [VERIFICAR com a Gi]. A divisão sugerida:

- **Lado instalação:** o comando no Terminal ou no PowerShell, o token, fechar e reabrir o Claude, importar e rodar o plugin Bridge, teste de conexão.
- **Lado Parte A:** login no Claude e no Figma, exportar o PNG, anexar a imagem, limite da conta gratuita, quem não vai instalar.
- **Relógio,** se houver três ou mais voluntários: um de vocês acompanha as marcas abaixo e faz um sinal discreto ao Thiago quando a maioria não bateu.

Com dois voluntários, cada um pega um lado e o Thiago guarda o relógio pelo deck. Cada voluntário cobre uma metade da sala, de frente para trás.


## Marcas de relógio

### Setup (18h10 às 18h25)

| Relógio | Marca esperada | Foco de vocês |
|---|---|---|
| 18h13 | Comando colado e rodando | Quem nunca abriu o Terminal. Linux e sem permissão de instalar: Parte A e dupla na B |
| 18h17 | Maioria com token colado e Claude reaberto | Token que sumiu antes de copiar: gera outro. Claude que não foi fechado por completo |
| 18h21 | Maioria com o Bridge rodando | Pasta oculta no Mac (Cmd+Shift+G), pasta que não existe |
| 18h23 | **Corte** | Quem ainda está travado vai para a Parte A e faz a B em dupla |
| 18h25 | A Parte A começa | Ninguém segura a sala. Quem ainda instala termina com vocês, em paralelo |

O teste de conexão é o Claude dizer o nome do arquivo, não a conexão aparecer numa lista.

### Partes A e B

| Relógio | Passo | Foco de vocês |
|---|---|---|
| 18h25 a 18h30 | A1, exportar | Selecionar o frame pelo nome, Export no fim do painel da direita, PNG 2x |
| 18h30 a 18h50 | A2 e A3, prompts | Anexar a imagem, protótipo que veio só como código (pedir para mostrar na conversa), limite da conta gratuita |
| 18h55 a 19h14 | B1 a B5 | Conexão que caiu (plugin fechou, Figma dormiu), tokens vazios no B2 (pedir de novo), quem não conectou sentado em dupla |
| 19h14 a 19h21 | B6, exportar | No JSON, toda medida com `px` (número solto vira `rem` na conversão do Mateus). Salvar como texto puro, nome de arquivo certo, `Card.html.txt` no Windows. Quem não vai terminar: mostrar a pasta `handoff/` |
| 19h21 a 19h23 | B7, revogar | Passar bancada por bancada e perguntar se revogou |


## Regras

- **Dupla é o padrão na Parte B.** Linux, sem permissão de instalar, login travado, Node que não instala, limite da conta gratuita: senta com alguém e segue.
- **Uma tentativa, depois Parte A.** Não investigue problema profundo de uma máquina. Passou de 18h23, a pessoa vai para a Parte A e faz a B em dupla.
- **Fila no mesmo ponto:** avise o Thiago. Ele resolve no telão para todos.
- **Pronto é:** o Claude confirma a conexão e diz o nome do arquivo, e a leitura da Tela demo volta com "Criar sua conta", os campos e os tokens.


## O que voluntário não faz

- Não toca no token de ninguém: não lê em voz alta, não fotografa, não digita, não projeta, não pede para mandar.
- Não usa a própria conta nem o próprio token na máquina de outra pessoa.
- Não troca `@1.35.0` por `@latest`.
- Não promete que o protótipo ou o código saem prontos para produção.
- Não pede para ver tela de cliente de ninguém. Se a pessoa quiser usar a própria tela, a escolha é dela.


## Contingências

Não há máquina reserva nem máquina do evento [VERIFICAR com a Gi]. Toda saída é Parte A, dupla, `handoff/` ou telão.

### O comando dá erro

1. Ler a mensagem do próprio comando: ele diz o que falta (Node, Figma Desktop, Claude Desktop) e dá o link.
2. Instalou o que faltava: fechar e abrir o Terminal ou o PowerShell e rodar o comando de novo.
3. Persistiu: o caminho manual do guia (Passo 3). Uma volta. Não deu: Parte A e dupla.

### Claude não mostra a conexão ou o status não responde

1. Abrir Settings > Developer > Edit Config e conferir o JSON: chave `mcpServers` > `figma-console`, `"command": "npx"`, `"args": ["-y", "figma-console-mcp@1.35.0"]`, token entre aspas, `"ENABLE_MCP_APPS": "true"`. Vírgula sobrando ou aspa faltando derruba tudo.
2. Fechar o Claude por completo. Mac: Cmd+Q. Windows: sair também pelo ícone perto do relógio.
3. Abrir de novo, conversa nova, "Verifique o status da conexão com o Figma".

Não subiu depois de uma volta: dupla.

### O Bridge não conecta

1. Figma **Desktop**, não o navegador, com a cópia do arquivo aberta.
2. Plugin "Figma Desktop Bridge" rodando, janela aberta.
3. A pasta do plugin não existe: o Claude ainda não abriu com a conexão salva. Reabrir o Claude, esperar, importar.
4. Reiniciar em ordem: o plugin, depois o Figma.

Não subiu depois disso: dupla.

### Node

`node -v` abaixo de 18 ou "command not found": instalar a LTS e rodar o comando de novo. Sem permissão de instalar: Parte A e dupla na B, sem tentar contornar.

### Token recusado

Confere `figd_` no começo e se não entrou espaço ou quebra de linha ao colar. Gera outro uma vez, roda o comando de novo, reabre o Claude. Persistiu: dupla.

### Login bloqueado

Uma tentativa de reenviar o código. Não resolveu: dupla.

### Rede corporativa, VPN, antivírus

A ponte usa as portas locais 9223 a 9232. Desligar a VPN. Antivírus corporativo que bloqueia: dupla.

### Limite da conta gratuita do Claude

Dupla com quem ainda tem uso. Um pedido bom vale mais que três apressados. Na Parte B, `handoff/`.

### Rede da sala cai

Avise o Thiago. A Parte B vira demonstração no telão, e todo mundo leva a pasta `handoff/` para o workshop do Mateus.

### Linux

Parte A normal. Parte B em dupla desde o primeiro minuto, sem tentar instalar.


## No fim

- Todo mundo que conectou revoga o token no Figma.
- Quem quiser tira a entrada `figma-console` do config do Claude.
- Quem usou máquina que não é sua: sair das contas do Figma e do Claude.
- Todo mundo com a pasta `fora-do-frame` (ou o `handoff/`) para as 20h.
