# Guia dos voluntários: Seu Figma vira produto (Fortaleza)

Quarta, 18/11/2026, 18h00 às 19h40, Digital College Aldeota. Obrigado por estar junto.

O público é de designers, não de devs. Muita gente nunca abriu o Terminal. Tom de quem ajuda colega, sem jargão.

O Thiago fica no palco do começo ao fim. Vocês são quem vai até a pessoa travada. A meta é ninguém ficar parado: cada pessoa sai com o protótipo da Parte A e com uma pasta, a própria ou a de exemplo.

Duas palavras para não confundir a sala: **chave do Figma** é o acesso que a pessoa criou em casa (o Figma chama de personal access token); **tokens de design** são os valores com nome do design system, como `color/brand-primary`.


## Como o workshop funciona

Todo mundo trabalha na mesma tela, a **Tela demo** ("Criar sua conta"), no arquivo do exercício. São duas saídas: o protótipo do formulário, que fica com a pessoa, e a pasta com o Card e os tokens, que o Mateus continua às 20h.

- **Parte A, todo mundo (18h05 às 18h35).** Exportar a Tela demo como PNG, pedir a revisão de dev, decidir quais pontos aceitar, gerar o protótipo no Claude e testar.
- **A ponte (18h35 às 18h41).** O Thiago mostra no Figma três coisas que a imagem não mostra.
- **Conferir a conexão (18h41 às 18h48).** Só quem instalou em casa. **Ninguém instala nada na sala.** Quem não instalou forma dupla.
- **Parte B (18h48 às 19h10).** O Claude lê a Tela demo no arquivo, a pessoa decide uma correção e leva para o protótipo, gera o Card e confere três linhas do CSS no Figma.
- **Salvar (19h10 às 19h28).** Três arquivos na pasta `fora-do-frame`. **Corte às 19h25:** quem não terminou usa a pasta de exemplo `handoff/`.
- **Revogar (19h28 às 19h33).** Todo mundo que conectou revoga a chave do Figma.
- **Fecho (19h33 às 19h40).** Uma pergunta, os limites e a passagem para o Mateus.


## Antes de quarta

1. Siga `fortaleza/guia-participante.md` inteiro na sua máquina, da seção 1 à revogação. Quem já passou pelo erro destrava o outro muito mais rápido.
2. Rode o instalador em casa, como a sala vai fazer. Se tiver Windows, use `npx.cmd`. Teste também o plano B: na pasta do ZIP, `node scripts/instalar.mjs`.
3. **Quem tem Windows:** o seu teste é o único em Windows que a gente tem. Até **segunda, 16/11**, conte ao Thiago três coisas: se o Claude Desktop mostrou a ligação com o Figma depois de reabrir, se a importação do plugin funcionou colando o caminho no campo "Nome do arquivo" da janela do Figma, e se o Bloco de Notas salvou sem virar `.txt`.
4. **Traga a pasta de exemplo num pendrive.** Baixe o ZIP do repositório, descompacte e copie a pasta inteira para um pendrive (com USB-C ou adaptador, se tiver). É o que você entrega a quem chegar sem o ZIP, sem depender da rede da sala. Teste em casa: abrir `handoff/Card.html` direto do pendrive, com o wifi desligado, tem que mostrar dois cards com cor.
5. Revogue a sua chave depois do ensaio. No dia você não usa a sua.


## Divisão na sala

Quantos voluntários seremos ainda não está fechado [VERIFICAR com a Gi]. A divisão sugerida:

- **Lado conexão:** de 18h41 a 18h48, quem instalou em casa e não conectou. Depois, Parte B: conexão que caiu, B1 vazio, conferência do B4.
- **Lado Parte A e duplas:** login, exportar o PNG, protótipo que veio só como código, limite da conta gratuita. Às 18h41, formar as duplas. Das 19h10 em diante, o pendrive: quem está sem a pasta de exemplo recebe antes do corte.
- **Relógio,** se houver três ou mais voluntários: acompanha as marcas abaixo e faz um sinal discreto ao Thiago quando a maioria não bateu.

Com dois voluntários, cada um pega um lado e cobre uma metade da sala, de frente para trás. O Thiago guarda o relógio pelo deck.


## Marcas de relógio e o que é "deu certo"

| Relógio | Passo | Deu certo quando | Foco de vocês |
|---|---|---|---|
| 18h05 a 18h10 | A1, exportar | PNG do formulário inteiro salvo | Selecionar o frame pelo nome, Export no fim do painel da direita, PNG 2x. Saiu só um pedaço: selecionou uma camada de dentro |
| 18h10 a 18h17 | A2, revisão | Lista numerada, com "visto" ou "suposto" | Anexar a imagem, mandar na conversa nova |
| 18h17 a 18h21 | A3, decidir | Números aceitos anotados | Lembrar que é para anotar antes de gerar. Não há prompt neste passo. Sem tempo: decidir pelo menos um ponto |
| 18h21 a 18h30 | A4, protótipo | Formulário aparece na conversa e aceita digitação | Veio só código: mandar **uma vez** "Mostre o protótipo funcionando aqui na conversa." Não resolveu: Settings > Capabilities, opção Cloud code execution and file creation (ou Create and edit files). Limite gratuito: dupla |
| 18h30 a 18h35 | A5, testar | Erro e "Conta criada" testados, uma diferença anotada | Lembrar de enviar vazio primeiro. Quem ainda gera às 18h35 acompanha a ponte e testa depois |
| 18h41 a 18h48 | Conferir a conexão | **O Claude disse o nome do arquivo** | Uma tentativa por pessoa. Não resolveu: dupla. Formar as duplas de quem não instalou |
| 18h48 a 18h53 | B1, ler | `#C8352B` sem variável, `#A29B93`, campo nome com borda | Voltou vazio: conferir arquivo e plugin antes de repetir (abaixo) |
| 18h53 a 18h58 | B2, decidir uma correção | Correção escrita com o motivo; no protótipo, a resposta traz o token e o valor lido | A decisão é da pessoa, não sugerir qual. Não achou a conversa da Parte A no Claude Desktop, ou está em dupla: fica só a decisão escrita, e segue |
| 18h58 a 19h06 | B3, gerar o Card | Dois blocos: `Card.html` e `Card.css` | Lembrar: o Card não é o protótipo, é o ponto de partida do Mateus. Quem não pediu o Card até 19h02 vai de pasta de exemplo no corte |
| 19h06 a 19h10 | B4, conferir | As três linhas estão no `Card.css` e os três valores batem nas variáveis do Figma | Mostrar onde ficam as variáveis: nada selecionado, painel da direita, Variables ou Local variables; ou busca de ações (Cmd+K, Ctrl+K), "variables" |
| 19h10 a 19h25 | B5, salvar | Três arquivos com o nome certo, abertos; JSON validado; `#C8352B`, `20px` e `24px` dentro do JSON | Extensões visíveis, `Card.html.txt` no Windows, TextEdit em texto simples, jsonlint. Entregar o pendrive a quem está sem `handoff/` |
| 19h25 | **Corte** | Pasta de exemplo copiada e identificada | Quem não terminou: `handoff/` inteira, com o nome `handoff`. Faltou um arquivo: copiar só ele e anotar em `veio-do-exemplo.txt`. Em dupla: quem acompanhou usa a própria `handoff` |
| 19h28 a 19h33 | B6, revogar | A chave sumiu da lista do Figma | Passar pelas fileiras e perguntar se revogou. É uma chave só; se houver mais de uma do workshop na lista, revogar todas |


## Regras

- **Ninguém instala na sala.** Quem chegou sem instalar faz a B em dupla desde 18h41.
- **Uma tentativa, depois dupla.** Não investigue problema profundo de uma máquina.
- **Os horários de 18h35, 19h10 e 19h28 não esperam.** Quem atrasou segue com a sala e termina depois pelo guia.
- **Fila no mesmo ponto:** avise o Thiago. Ele resolve no telão para todos.
- **Dupla de verdade:** quem não instalou abre a Tela demo no próprio Figma (navegador serve), lê os prompts, escreve a própria decisão no B2 e faz a conferência do B4 no próprio Figma.


## O que voluntário não faz

- Não toca na chave de ninguém: não lê em voz alta, não fotografa, não digita, não projeta, não pede para mandar.
- Não usa a própria conta nem a própria chave na máquina de outra pessoa.
- Não promete que o protótipo ou o código saem prontos para produção.
- Não diz que o vermelho do botão "está errado": o valor é igual ao do token, o que falta é o vínculo.
- Não escolhe pela pessoa no A3 nem no B2.


## Contingências

Não há máquina reserva nem máquina do evento [VERIFICAR com a Gi]. Toda saída é dupla, `handoff/` ou telão.

### O Claude não diz o nome do arquivo (18h41)

1. Figma **Desktop**, não o navegador, com a cópia do arquivo do exercício aberta.
2. Plugin "Figma Desktop Bridge" rodando, janela aberta.
3. O Claude foi fechado por completo depois da instalação? Mac: Cmd+Q. Windows: sair também pelo ícone perto do relógio. Abrir de novo, conversa nova, "Verifique o status da conexão com o Figma".
4. Chave vencida ou já revogada (a validade é de 7 dias, então quem criou antes de 11/11 perdeu a chave): não se cria outra na sala. Dupla.

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

### Faltam pessoas com a ligação para as duplas

Formar trios. Se nem assim: avisar o Thiago, que faz a Parte B no telão; a sala confere os valores no próprio Figma e sai com `handoff/`.

### Rede da sala cai

Avise o Thiago. A Parte B vira demonstração no telão, e todo mundo leva a `handoff/` que já está na máquina (ou a do seu pendrive) para o workshop do Mateus. Sem rede não se valida o JSON no jsonlint: a pessoa confere os três valores e cria um `nao-validado.txt` na pasta.

### Linux, ou notebook da empresa que não deixa instalar

Parte A normal. Parte B em dupla.


## No fim

- Todo mundo que conectou revogou a chave no Figma.
- Quem usou máquina que não é sua: sair das contas do Figma e do Claude.
- Todo mundo com a pasta `fora-do-frame` ou `handoff` para as 20h.
- Conte ao Thiago quantas pastas você entregou pelo pendrive.
