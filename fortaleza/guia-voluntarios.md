# Guia dos voluntários: Seu Figma vira produto (Fortaleza)

Quarta, 18/11/2026, 18h00 às 19h40, Digital College Aldeota. Obrigado por estar junto.

O público é de designers, não de devs. Muita gente nunca abriu o Terminal. Tom de quem ajuda colega, sem jargão.

O Thiago fica no palco do começo ao fim. Vocês são quem vai até a pessoa travada. A meta é ninguém ficar parado e todo mundo sair com o que foi **garantido**: a decisão de design escrita (com o valor e de onde ele veio: "conferido no meu Figma", "visto no Figma do telão" ou "comparação pendente") e a pasta `handoff` aberta e conferida no notebook. O formulário corrigido **depende do Claude gratuito** de cada pessoa: quem conseguir gerar sai com ele, e o palco não promete a todos. Quem ficar sem tem a decisão escrita, acompanha o colega e aplica em casa. Não prometam mais do que isso.

Duas palavras para não confundir a sala: **chave do Figma** é o acesso que a pessoa criou em casa (o Figma chama de personal access token); **tokens de design** são os valores com nome do design system, como `color/brand-primary`.


## Como o workshop funciona

Todo mundo trabalha na mesma tela, a **Tela demo** ("Criar sua conta"), no arquivo do exercício. Garantido: a decisão escrita e a pasta `handoff`, com o Card e os tokens de design, que o Mateus usa às 20h. Depende do Claude gratuito: o formulário corrigido.

- **Parte A, todo mundo (18h05 às 18h40).** Exportar a Tela demo como PNG, pedir a revisão, decidir o que aceitar, gerar o protótipo no Claude (até 18h34) e testar (18h34 às 18h40).
- **A ponte (18h40 às 18h51).** O Thiago mostra no Figma o botão e faz uma leitura do arquivo ao vivo.
- **Conexão (18h51 às 18h59).** Só quem instalou em casa confere a conexão. **Ninguém instala nada na sala e ninguém muda de lugar.** Vocês contam as máquinas conectadas, só para saber onde elas estão.
- **B1 (18h59 às 19h08).** O Thiago lê a Tela demo pelo arquivo, no telão. Quem está conectado repete na própria máquina e lê a resposta para os vizinhos. Todo mundo confere dois valores no próprio Figma, escolhe uma correção e escreve a decisão.
- **B2 (19h08 às 19h21).** Cada pessoa aplica a correção no próprio protótipo, no próprio notebook, e testa.
- **B3 (19h21 às 19h30).** A sala abre a própria `handoff`. Quem está sem a pasta recebe pelo pendrive. O Thiago não gera Card no telão.
- **B4 (19h30 às 19h36).** Quem criou chave revoga todas.
- **Fecho (19h36 às 19h40).** O antes e o depois do formulário e a passagem para o Mateus.

Cada slide de passo mostra o horário do corte ("até 18h11"). No corte, a sala segue.

Gerar o próprio Card e o próprio arquivo de tokens virou **extensão** (guia do participante, apêndice no fim): só para quem terminou antes e está conectado. Não puxe ninguém para ela.


## O B1 é no telão. A contagem é só informação

A leitura do B1 acontece no telão, para a sala inteira. É a rota padrão, e **nenhuma cadeira se move às 18h55.**

1. O Thiago pede: "Quem conectou levanta a mão." Conectou é o Claude Desktop ter dito o nome do arquivo.
2. Um de vocês conta as mãos e repara onde essas pessoas estão sentadas.
3. Quem conectou repete o prompt do B1 na própria máquina, em paralelo com o telão, e lê a resposta para quem está do lado. Lembrem essas pessoas disso.

O número não muda a dinâmica: com dez máquinas ou com nenhuma, o B1 é no telão. Ele serve para vocês saberem a quem pedir uma leitura em voz alta se a conexão do palco cair.

**Uma conexão caiu, ou não subiu?** A pessoa segue pelo telão. Uma tentativa de ajuda, e só.


## Antes de quarta

1. Siga `fortaleza/guia-participante.md` inteiro na sua máquina, da seção 1 à revogação. Quem já passou pelo erro destrava o outro muito mais rápido.
2. Rode o instalador em casa, como a sala vai fazer. Se tiver Windows, use `npx.cmd`. Teste também o plano B: na pasta do ZIP, `node scripts/instalar.mjs`.
3. **Quem tem Windows:** o seu teste é o único em Windows que a gente tem. Até **segunda, 16/11**, conte ao Thiago duas coisas: se o Claude Desktop mostrou a conexão com o Figma depois de reabrir, e se a importação do plugin funcionou colando o caminho no campo "Nome do arquivo" da janela do Figma.
4. **O pendrive tem dono.** Um de vocês confirma no grupo, até **segunda, 16/11**, que leva. Quem confirmar:
   - baixa o ZIP do workshop, descompacta e copia **três coisas** para o pendrive: a pasta `handoff`, a imagem da Tela demo (`fortaleza/telao/tela-demo.png`) e o guia em arquivo (`fortaleza/guia-participante.md`);
   - leva pendrive USB comum **e** um jeito de ligar em USB-C (pendrive duplo ou adaptador);
   - testa em casa, com o wifi desligado: abrir `handoff/Card.html` direto do pendrive tem que mostrar dois cards com cor, e a imagem e o guia têm que abrir;
   - responde no grupo "pendrive testado".
   Se ninguém confirmar até segunda, avisem o Thiago: ele leva o dele, e a promessa do palco não fica no ar. O computador do palco leva as mesmas três coisas.
5. Revogue a sua chave depois do ensaio. No dia você não usa a sua.


## Divisão na sala

Quantos voluntários seremos ainda não está fechado [VERIFICAR com a Gi]. A divisão sugerida:

- **Lado conexão:** de 18h51 a 18h59, quem instalou em casa e não conectou, e a contagem das máquinas. Depois: conexão que caiu (segue pelo telão), B1 vazio.
- **Lado Parte A:** login, exportar o PNG (ou apontar o PNG pronto, que também está no pendrive), protótipo que veio só como código, limite da conta gratuita. Às 19h21, o pendrive.
- **Relógio,** se houver três ou mais voluntários: acompanha as marcas abaixo e faz um sinal discreto ao Thiago quando a maioria não bateu.

Com dois voluntários, cada um pega um lado e cobre uma metade da sala, de frente para trás. O Thiago guarda o relógio pelo deck.

## Marcas de relógio e o que é "deu certo"

| Relógio | Passo | Deu certo quando | Foco de vocês |
|---|---|---|---|
| 18h05 a 18h11 | A1, exportar | PNG do formulário inteiro salvo | Selecionar o frame pelo nome, Export no fim do painel da direita, PNG 2x. Saiu só um pedaço: selecionou uma camada de dentro. **Não duplicou o arquivo:** não tente resolver; aponte o PNG pronto, `fortaleza/telao/tela-demo.png` no ZIP, ou o link direto do guia |
| 18h11 a 18h18 | A2, revisar | Até três sugestões numeradas, com "viu" ou "supôs" | Anexar a imagem, mandar na conversa nova |
| 18h18 a 18h22 | A3, decidir | Números anotados, com o motivo das recusas | Lembrar que é para anotar antes de gerar. Não há prompt neste passo. Sem tempo: decidir pelo menos uma |
| 18h22 a 18h34 | A4, protótipo | Formulário aparece na conversa e aceita digitação | Veio só código: mandar **uma vez** "Mostre o protótipo funcionando aqui na conversa." Depois conferir Settings > Capabilities. Estava ligada: parar e acompanhar o vizinho, sem investigar |
| 18h34 a 18h40 | A5, testar e olhar dois pontos | Erro e "Conta criada" testados; uma linha anotada sobre o texto de apoio e outra sobre o campo nome | A pessoa anota o que vê, sem valor: ficou igual à imagem, mudou, ou não dá para dizer. Não digam os valores: eles vêm no B1 |
| 18h51 a 18h59 | Conexão | **O Claude Desktop disse o nome do arquivo** | Uma tentativa por pessoa. Não resolveu: segue pelo telão. Às 18h55, contar as mãos. Ninguém muda de lugar |
| 18h59 a 19h08 | B1, ler e escolher | As três respostas chegaram, no telão; cada pessoa **escreveu a decisão**, com o valor e de onde ele veio | Mostrar onde ficam as variáveis: **Variables, na barra de navegação da esquerda**. Em versão anterior do Figma: nada selecionado, painel da direita, Local variables; ou busca de ações (Cmd+K, Ctrl+K), "variables". Cobrar a decisão escrita: é o que a pessoa leva de qualquer jeito. Quem não conferiu no próprio Figma escreve "visto no Figma do telão" ou "comparação pendente", sem problema |
| 19h08 a 19h21 | B2, corrigir | O ponto escolhido mudou, o resto não, erro e sucesso ainda funcionam. No campo nome: os dois campos ficaram iguais. Se o protótipo já tinha o valor do arquivo: "confirmei que já estava com o valor do arquivo" | Cada pessoa na conversa do próprio protótipo, no próprio notebook. Não precisa da conexão. A escolha é da pessoa: não sugerir qual |
| 19h21 a 19h30 | B3, abrir a pasta | Estado 1: `Card.html` abre com cor e `#C8352B`, `20px` e `24px` estão no `tokens.json`. Estado 2, só com rede: os mesmos três nas variáveis do Figma | Pendrive para quem levantou a mão. O Card é uma amostra estática: o botão não faz nada. Abrir o `tokens.json` como texto (botão direito, Abrir com). Só ler, não salvar. Sem rede, o estado 2 fica pendente: não dizer que a pasta foi conferida contra o Figma |
| 19h30 a 19h36 | B4, revogar | Nenhuma chave do workshop na lista do Figma | Passar pelas fileiras e perguntar se revogou. Se houver mais de uma chave do workshop, revogar todas |


## Regras

- **Ninguém instala na sala.** Quem chegou sem instalar faz a B pelo telão.
- **Uma tentativa, depois telão.** Não investigue problema profundo de uma máquina.
- **Os cortes de 18h40, 19h08, 19h21 e 19h30 não esperam.** Quem atrasou segue com a sala e termina depois pelo guia.
- **Fila no mesmo ponto:** avise o Thiago. Ele resolve no telão para todos.
- **Ninguém muda de lugar e ninguém fica só olhando:** quem não instalou acompanha a leitura no telão, confere os valores no próprio Figma (navegador serve) e corrige o próprio protótipo.


## O que voluntário não faz

- Não toca na chave de ninguém: não lê em voz alta, não fotografa, não digita, não projeta, não pede para mandar.
- Não usa a própria conta nem a própria chave na máquina de outra pessoa.
- Não promete que todo mundo sai com o formulário: isso depende do Claude gratuito de cada pessoa.
- Não promete que o protótipo ou o código saem prontos para produção.
- Não diz que o vermelho do botão "está errado": o valor é igual ao do token, o que falta é o vínculo.
- Não diz que o protótipo ficou "ligado ao Figma": a correção é um valor copiado.
- Não escolhe pela pessoa no A3 nem no B1.
- Não pede para ninguém apagar ou alterar arquivo da própria `handoff`.


## Contingências

Não há máquina reserva nem máquina do evento [VERIFICAR com a Gi]. Toda saída é telão, `handoff` ou pendrive.

### O Claude não diz o nome do arquivo (18h51)

1. Figma **Desktop**, não o navegador, com a cópia do arquivo do exercício aberta.
2. Plugin "Figma Desktop Bridge" rodando, janela aberta.
3. O Claude foi fechado por completo depois da instalação? Mac: Cmd+Q. Windows: sair também pelo ícone perto do relógio. Abrir de novo, conversa nova, "Verifique o status da conexão com o Figma".
4. Chave vencida ou já revogada (a validade é de 7 dias, então quem criou antes de 11/11 perdeu a chave): não se cria outra na sala. Telão.

Não subiu depois de uma volta: a pessoa segue pelo telão.

### B1 volta vazio

Não é para repetir no escuro.

1. Mandar `Qual arquivo do Figma você está lendo?`. Tem que ser a cópia do arquivo do exercício.
2. Conferir se o plugin Figma Desktop Bridge está rodando. Ele cai se o Figma dormir ou o arquivo trocar.
3. Arquivo certo e plugin rodando: repetir o B1. Caiu de vez: segue pelo telão.

### VPN, antivírus

Desligar a VPN. A conexão usa as portas locais 9223 a 9232. Antivírus corporativo que bloqueia: telão.

### Limite da conta gratuita do Claude

A pessoa já tem o que foi garantido: a decisão escrita. Ela acompanha o teste do vizinho e aplica em casa. A `handoff` não depende do Claude.

### Poucas máquinas conectadas, ou nenhuma

Não muda nada: o B1 já é no telão e a sala confere os valores no próprio Figma. O B2 continua individual.

### A pessoa não duplicou o arquivo do Figma

Aponte a imagem pronta da Tela demo, no ZIP ou no pendrive. Na Parte B ela acompanha o telão e escreve na decisão "visto no Figma do telão" ou "comparação pendente".

### Rede da sala cai

Avise o Thiago. A correção vira demonstração no telão. No B3, abrir a pasta, ver o Card com cor e achar os três valores não usa internet. Comparar com o Figma usa, para quem está no Figma do navegador: essa parte fica pendente, e a pessoa faz em casa.

### Linux, ou notebook da empresa que não deixa instalar

Parte A normal. Parte B pelo telão.


## No fim

- Todo mundo que criou chave revogou todas no Figma.
- Quem usou máquina que não é sua: sair das contas do Figma e do Claude.
- Todo mundo com a pasta `handoff` para as 20h.
- Conte ao Thiago quantas pastas foram entregues pelo pendrive.
