# Guia dos voluntários: Seu Figma vira produto (Fortaleza)

Quarta, 18/11/2026, 18h00 às 19h40, Digital College Aldeota. Obrigado por estar junto.

O público é de designers, não de devs. Muita gente nunca abriu o Terminal. Tom de quem ajuda colega, sem jargão.

O Thiago fica no palco do começo ao fim. Vocês são quem vai até a pessoa travada. A meta é ninguém ficar parado e **todo mundo sair com a pasta `handoff` conferida no notebook**. O protótipo próprio depende do Claude gratuito de cada pessoa: a maioria sai com ele, mas não dá para prometer a todos. Quem ficar sem escreve a decisão, acompanha o colega e aplica em casa.

Duas palavras para não confundir a sala: **chave do Figma** é o acesso que a pessoa criou em casa (o Figma chama de personal access token); **tokens de design** são os valores com nome do design system, como `color/brand-primary`.


## Como o workshop funciona

Todo mundo trabalha na mesma tela, a **Tela demo** ("Criar sua conta"), no arquivo do exercício. Cada pessoa leva duas coisas: o próprio formulário, corrigido, que fica com ela; e a pasta `handoff`, com o Card e os tokens de design, que o Mateus usa às 20h.

- **Parte A, todo mundo (18h05 às 18h35).** Exportar a Tela demo como PNG, pedir a revisão, decidir quais pontos aceitar, gerar o protótipo no Claude e testar.
- **A ponte (18h35 às 18h43).** O Thiago mostra no Figma o que a imagem não mostra e faz uma leitura do arquivo ao vivo.
- **Conexão e grupos (18h43 às 18h50).** Só quem instalou em casa confere a conexão. **Ninguém instala nada na sala.** Vocês montam os grupos.
- **B1 (18h50 às 19h00).** A máquina conectada lê a Tela demo pelo arquivo. Todo mundo confere dois valores no próprio Figma e escolhe uma correção.
- **B2 (19h00 às 19h12).** Cada pessoa aplica a correção no próprio protótipo, no próprio notebook, e testa.
- **B3 (19h12 às 19h23).** O Thiago gera o Card no telão. A sala confere a própria `handoff`.
- **19h23 às 19h28.** Quem está sem a pasta recebe pelo pendrive.
- **B4 (19h28 às 19h34).** Quem criou chave revoga todas.
- **Fecho (19h34 às 19h40).** Uma pergunta, os limites e a passagem para o Mateus.

Gerar o próprio Card e o próprio arquivo de tokens virou **extensão** (guia do participante, seção 8): só para quem terminou antes e está conectado. Não puxe ninguém para ela.


## Antes de quarta

1. Siga `fortaleza/guia-participante.md` inteiro na sua máquina, da seção 1 à revogação. Quem já passou pelo erro destrava o outro muito mais rápido.
2. Rode o instalador em casa, como a sala vai fazer. Se tiver Windows, use `npx.cmd`. Teste também o plano B: na pasta do ZIP, `node scripts/instalar.mjs`.
3. **Quem tem Windows:** o seu teste é o único em Windows que a gente tem. Até **segunda, 16/11**, conte ao Thiago duas coisas: se o Claude Desktop mostrou a ligação com o Figma depois de reabrir, e se a importação do plugin funcionou colando o caminho no campo "Nome do arquivo" da janela do Figma.
4. **O pendrive tem dono.** Um de vocês confirma no grupo, até **segunda, 16/11**, que leva. Quem confirmar:
   - baixa o ZIP do workshop, descompacta e copia a pasta `handoff` para o pendrive;
   - leva pendrive USB comum **e** um jeito de ligar em USB-C (pendrive duplo ou adaptador);
   - testa em casa, com o wifi desligado: abrir `handoff/Card.html` direto do pendrive tem que mostrar dois cards com cor;
   - responde no grupo "pendrive testado".
   Se ninguém confirmar até segunda, avisem o Thiago: ele leva o dele, e a promessa do palco não fica no ar.
5. Revogue a sua chave depois do ensaio. No dia você não usa a sua.


## Divisão na sala

Quantos voluntários seremos ainda não está fechado [VERIFICAR com a Gi]. A divisão sugerida:

- **Lado conexão:** de 18h43 a 18h50, quem instalou em casa e não conectou. Depois: conexão que caiu, B1 vazio.
- **Lado Parte A e grupos:** login, exportar o PNG, protótipo que veio só como código, limite da conta gratuita. Às 18h43, montar os grupos. Às 19h23, o pendrive.
- **Relógio,** se houver três ou mais voluntários: acompanha as marcas abaixo e faz um sinal discreto ao Thiago quando a maioria não bateu.

Com dois voluntários, cada um pega um lado e cobre uma metade da sala, de frente para trás. O Thiago guarda o relógio pelo deck.

**Como montar os grupos.** De dois a quatro pessoas por máquina conectada. Todo mundo leva o próprio notebook. Papel de cada um: quem está conectado manda o prompt do B1 e lê a resposta em voz alta; os outros conferem os valores no próprio Figma. No B2, cada pessoa volta para a própria tela.


## Marcas de relógio e o que é "deu certo"

| Relógio | Passo | Deu certo quando | Foco de vocês |
|---|---|---|---|
| 18h05 a 18h10 | A1, exportar | PNG do formulário inteiro salvo | Selecionar o frame pelo nome, Export no fim do painel da direita, PNG 2x. Saiu só um pedaço: selecionou uma camada de dentro |
| 18h10 a 18h17 | A2, revisão | Lista numerada, com "visto" ou "suposto" | Anexar a imagem, mandar na conversa nova |
| 18h17 a 18h21 | A3, decidir | Números aceitos anotados | Lembrar que é para anotar antes de gerar. Não há prompt neste passo. Sem tempo: decidir pelo menos um ponto |
| 18h21 a 18h35 | A4 e A5, protótipo e teste | Formulário aparece na conversa e aceita digitação; erro e "Conta criada" testados; uma diferença anotada | Veio só código: mandar **uma vez** "Mostre o protótipo funcionando aqui na conversa." Depois conferir Settings > Capabilities. Estava ligada: parar e acompanhar o vizinho, sem investigar |
| 18h43 a 18h50 | Conexão e grupos | **O Claude disse o nome do arquivo** | Uma tentativa por pessoa. Não resolveu: grupo. Montar os grupos |
| 18h50 a 19h00 | B1, ler e escolher | As quatro respostas apareceram; cada pessoa conferiu um valor no próprio Figma e escreveu a escolha | Mostrar onde ficam as variáveis: **Variables, na barra de navegação da esquerda**. Em versão anterior do Figma: nada selecionado, painel da direita, Local variables; ou busca de ações (Cmd+K, Ctrl+K), "variables" |
| 19h00 a 19h12 | B2, corrigir | O ponto escolhido mudou, o resto não, erro e sucesso ainda funcionam | Cada pessoa na conversa do próprio protótipo, no próprio notebook. Não precisa da ligação. A escolha é da pessoa: não sugerir qual |
| 19h12 a 19h23 | B3, conferir a pasta | `Card.html` abre com cor; `#C8352B`, `20px` e `24px` no `tokens.json`; os mesmos três nas variáveis do Figma | Abrir o `tokens.json` como texto (botão direito, Abrir com). Só ler, não salvar |
| 19h23 a 19h28 | Todo mundo com a pasta | A `handoff` está no notebook e o Card abre com cor | Pendrive para quem levantou a mão |
| 19h28 a 19h34 | B4, revogar | Nenhuma chave do workshop na lista do Figma | Passar pelas fileiras e perguntar se revogou. Se houver mais de uma chave do workshop, revogar todas |


## Regras

- **Ninguém instala na sala.** Quem chegou sem instalar faz a B em grupo desde 18h43.
- **Uma tentativa, depois grupo.** Não investigue problema profundo de uma máquina.
- **Os horários de 18h35, 19h00, 19h12 e 19h28 não esperam.** Quem atrasou segue com a sala e termina depois pelo guia.
- **Fila no mesmo ponto:** avise o Thiago. Ele resolve no telão para todos.
- **Grupo de verdade:** quem não instalou confere os valores no próprio Figma (navegador serve) e corrige o próprio protótipo. Ninguém fica só olhando.


## O que voluntário não faz

- Não toca na chave de ninguém: não lê em voz alta, não fotografa, não digita, não projeta, não pede para mandar.
- Não usa a própria conta nem a própria chave na máquina de outra pessoa.
- Não promete que o protótipo ou o código saem prontos para produção.
- Não diz que o vermelho do botão "está errado": o valor é igual ao do token, o que falta é o vínculo.
- Não diz que o protótipo ficou "ligado ao Figma": a correção é um valor copiado.
- Não escolhe pela pessoa no A3 nem no B1.


## Contingências

Não há máquina reserva nem máquina do evento [VERIFICAR com a Gi]. Toda saída é grupo, `handoff` ou telão.

### O Claude não diz o nome do arquivo (18h43)

1. Figma **Desktop**, não o navegador, com a cópia do arquivo do exercício aberta.
2. Plugin "Figma Desktop Bridge" rodando, janela aberta.
3. O Claude foi fechado por completo depois da instalação? Mac: Cmd+Q. Windows: sair também pelo ícone perto do relógio. Abrir de novo, conversa nova, "Verifique o status da conexão com o Figma".
4. Chave vencida ou já revogada (a validade é de 7 dias, então quem criou antes de 11/11 perdeu a chave): não se cria outra na sala. Grupo.

Não subiu depois de uma volta: grupo.

### B1 volta vazio

Não é para repetir no escuro.

1. Mandar `Qual arquivo do Figma você está lendo?`. Tem que ser a cópia do arquivo do exercício.
2. Conferir se o plugin Figma Desktop Bridge está rodando. Ele cai se o Figma dormir ou o arquivo trocar.
3. Arquivo certo e plugin rodando: repetir o B1.

### VPN, antivírus

Desligar a VPN. A ligação usa as portas locais 9223 a 9232. Antivírus corporativo que bloqueia: grupo.

### Limite da conta gratuita do Claude

A pessoa escreve a decisão, acompanha o teste do vizinho e aplica em casa. A `handoff` não depende do Claude.

### Quase ninguém conectado

Avisar o Thiago: o B1 acontece só no telão e a sala confere os valores no próprio Figma. O B2 continua individual.

### Rede da sala cai

Avise o Thiago. A correção vira demonstração no telão. A conferência da `handoff` segue normal: não usa internet.

### Linux, ou notebook da empresa que não deixa instalar

Parte A normal. Parte B em grupo.


## No fim

- Todo mundo que criou chave revogou todas no Figma.
- Quem usou máquina que não é sua: sair das contas do Figma e do Claude.
- Todo mundo com a pasta `handoff` para as 20h.
- Conte ao Thiago quantas pastas foram entregues pelo pendrive.
