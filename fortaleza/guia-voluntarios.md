# Guia dos voluntários: Seu Figma vira produto (Fortaleza)

Quarta, 18/11/2026, 18h00 às 19h40, Digital College Aldeota. Obrigado por estar junto.

O público é de designers, não de devs. Muita gente nunca abriu o Terminal. Tom de quem ajuda colega, sem jargão.

O Thiago fica no palco do começo ao fim. Vocês são quem vai até a pessoa travada. A meta é ninguém ficar parado: cada pessoa sai com o protótipo da Parte A e com uma pasta, a própria ou a de exemplo.


## Como o workshop funciona

Todo mundo trabalha na mesma tela, a **Tela demo** ("Criar sua conta"), no arquivo do exercício.

- **Parte A, todo mundo (18h08 às 18h33).** Exportar a Tela demo como PNG, pedir a revisão de dev, decidir quais pontos aceitar e gerar o protótipo navegável no Claude.
- **A ponte (18h33 às 18h38).** O Thiago mostra no Figma três coisas que a imagem não mostra.
- **Conferir a conexão (18h38 às 18h48).** Só quem instalou em casa. **Ninguém instala nada na sala.** Quem não instalou forma dupla.
- **Parte B (18h48 às 19h10).** O Claude lê a Tela demo no arquivo, audita, gera o Card com os tokens e a pessoa confere três valores no Figma.
- **Salvar (19h10 às 19h22).** Três arquivos na pasta `fora-do-frame`. **Corte às 19h20:** quem não terminou copia a pasta de exemplo `handoff/`.
- **Revogar (19h22 às 19h26).** Todo mundo que conectou revoga o token.
- **Limites e passagem para o Mateus (19h26 às 19h34),** margem até 19h40.


## Antes de quarta

1. Siga `fortaleza/guia-participante.md` inteiro na sua máquina, da seção 1 à revogação. Quem já passou pelo erro destrava o outro muito mais rápido.
2. Rode o instalador em casa, como a sala vai fazer. Se tiver Windows, use `npx.cmd`. Teste também o plano B: na pasta do ZIP, `node scripts/instalar.mjs`.
3. Baixe o ZIP do repositório e deixe a pasta `handoff/` num pendrive ou fácil de achar. É o que você entrega a quem chegar sem ela.
4. Revogue o seu token depois do ensaio. No dia você não usa o seu.


## Divisão na sala

Quantos voluntários seremos ainda não está fechado [VERIFICAR com a Gi]. A divisão sugerida:

- **Lado conexão:** de 18h38 a 18h48, quem instalou em casa e não conectou. Depois, Parte B: conexão que caiu, B1 vazio, conferência do B4.
- **Lado Parte A e duplas:** login, exportar o PNG, protótipo que veio só como código, limite da conta gratuita. Às 18h38, formar as duplas.
- **Relógio,** se houver três ou mais voluntários: acompanha as marcas abaixo e faz um sinal discreto ao Thiago quando a maioria não bateu.

Com dois voluntários, cada um pega um lado e cobre uma metade da sala, de frente para trás. O Thiago guarda o relógio pelo deck.


## Marcas de relógio e o que é "deu certo"

| Relógio | Passo | Deu certo quando | Foco de vocês |
|---|---|---|---|
| 18h08 a 18h12 | A1, exportar | PNG do formulário inteiro salvo | Selecionar o frame pelo nome, Export no fim do painel da direita, PNG 2x |
| 18h12 a 18h19 | A2, revisão | Lista numerada, com "visto" ou "suposto" | Anexar a imagem, mandar na conversa nova |
| 18h19 a 18h22 | A3, decidir | Números aceitos anotados | Lembrar que é para anotar antes de gerar. Não há prompt neste passo |
| 18h22 a 18h31 | A4, protótipo | Protótipo aparece na conversa | Veio só código: mandar "Mostre o protótipo funcionando aqui na conversa." Limite gratuito: dupla |
| 18h31 a 18h33 | A5, testar | Erro e "Conta criada" testados, uma diferença anotada | Lembrar de enviar vazio primeiro |
| 18h38 a 18h48 | Conferir a conexão | **O Claude disse o nome do arquivo** | Uma tentativa por pessoa. Não resolveu: dupla. Formar as duplas de quem não instalou |
| 18h48 a 18h53 | B1, ler | `#C8352B` sem variável, `#A29B93`, campo nome com borda | Voltou vazio: conferir arquivo e plugin antes de repetir (abaixo) |
| 18h53 a 18h58 | B2, auditar | Achados com nome de token | Quem está em dupla lê o prompt em voz alta |
| 18h58 a 19h05 | B3, gerar o Card | Dois blocos e 3 linhas no fim | Lembrar: o Card não é o protótipo, é o ponto de partida do Mateus |
| 19h05 a 19h10 | B4, conferir | Três valores batem no painel de variáveis do Figma | Mostrar onde fica Local variables (nada selecionado, painel da direita) |
| 19h10 a 19h20 | B5, salvar | Três arquivos com o nome certo, abertos e conferidos | Extensões visíveis, `Card.html.txt` no Windows, TextEdit em texto simples, jsonlint |
| 19h20 | **Corte** | Pasta de exemplo copiada e identificada | Quem não terminou: `handoff/` inteira, com o nome `handoff`. Faltou um arquivo: copiar só ele e anotar em `veio-do-exemplo.txt` |
| 19h22 a 19h26 | B6, revogar | O token sumiu da lista do Figma | Passar pelas fileiras e perguntar se revogou. Lembrar do token de casa |


## Regras

- **Ninguém instala na sala.** Quem chegou sem instalar faz a B em dupla desde 18h38.
- **Uma tentativa, depois dupla.** Não investigue problema profundo de uma máquina.
- **Fila no mesmo ponto:** avise o Thiago. Ele resolve no telão para todos.
- **Dupla de verdade:** quem não instalou abre a Tela demo no próprio Figma (navegador serve), lê os prompts e faz a conferência do B4 no próprio painel de variáveis.


## O que voluntário não faz

- Não toca no token de ninguém: não lê em voz alta, não fotografa, não digita, não projeta, não pede para mandar.
- Não usa a própria conta nem o próprio token na máquina de outra pessoa.
- Não promete que o protótipo ou o código saem prontos para produção.
- Não diz que o vermelho do botão "está errado": o valor é igual ao token, o que falta é o vínculo.


## Contingências

Não há máquina reserva nem máquina do evento [VERIFICAR com a Gi]. Toda saída é dupla, `handoff/` ou telão.

### O Claude não diz o nome do arquivo (18h38)

1. Figma **Desktop**, não o navegador, com a cópia do arquivo do exercício aberta.
2. Plugin "Figma Desktop Bridge" rodando, janela aberta.
3. O Claude foi fechado por completo depois da instalação? Mac: Cmd+Q. Windows: sair também pelo ícone perto do relógio. Abrir de novo, conversa nova, "Verifique o status da conexão com o Figma".
4. Token vencido (a pessoa não trocou na quarta): rodar o instalador de novo só se a rede da sala permitir. Senão, dupla.

Não subiu depois de uma volta: dupla.

### B1 volta vazio

Não é para repetir no escuro.

1. Mandar `Qual arquivo do Figma você está lendo?`. Tem que ser a cópia do arquivo do exercício.
2. Conferir se o plugin Figma Desktop Bridge está rodando. Ele cai se o Figma dormir ou o arquivo trocar.
3. Arquivo certo e plugin rodando: repetir o B1.

### Outra ligação de Figma no Claude, VPN, antivírus

Desligar a outra ligação e a VPN. A ponte usa as portas locais 9223 a 9232. Antivírus corporativo que bloqueia: dupla.

### Limite da conta gratuita do Claude

Dupla com quem ainda tem uso. Na Parte B, `handoff/`.

### Rede da sala cai

Avise o Thiago. A Parte B vira demonstração no telão, e todo mundo leva a `handoff/` do ZIP (ou do seu pendrive) para o workshop do Mateus.

### Linux

Parte A normal. Parte B em dupla.


## No fim

- Todo mundo que conectou revogou o token no Figma, inclusive o de casa.
- Quem usou máquina que não é sua: sair das contas do Figma e do Claude.
- Todo mundo com a pasta `fora-do-frame` ou `handoff` para as 20h.
