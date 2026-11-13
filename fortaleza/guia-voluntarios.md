# Guia dos voluntários: Seu Figma vira produto (Fortaleza)

Quarta, 18/11/2026, 18h00 às 19h40, Digital College Aldeota. Obrigado por estar junto.

O público é de designers, não de devs. Muita gente nunca abriu o Terminal. Tom de quem ajuda colega, sem jargão.

O Thiago fica no palco do começo ao fim. Vocês são quem vai até a pessoa travada. A meta é ninguém ficar parado e todo mundo sair com o que foi **garantido**: a decisão de design escrita e a pasta `handoff` aberta e conferida no notebook. O formulário corrigido **depende do Claude gratuito** de cada pessoa: a maioria sai com ele, e o palco não promete a todos. Quem ficar sem tem a decisão escrita, acompanha o colega e aplica em casa. Não prometam mais do que isso.

Duas palavras para não confundir a sala: **chave do Figma** é o acesso que a pessoa criou em casa (o Figma chama de personal access token); **tokens de design** são os valores com nome do design system, como `color/brand-primary`.


## Como o workshop funciona

Todo mundo trabalha na mesma tela, a **Tela demo** ("Criar sua conta"), no arquivo do exercício. Garantido: a decisão escrita e a pasta `handoff`, com o Card e os tokens de design, que o Mateus usa às 20h. Depende do Claude gratuito: o formulário corrigido.

- **Parte A, todo mundo (18h05 às 18h40).** Exportar a Tela demo como PNG, pedir a revisão, decidir o que aceitar, gerar o protótipo no Claude e testar.
- **A ponte (18h40 às 18h51).** O Thiago mostra no Figma o botão e faz uma leitura do arquivo ao vivo.
- **Conexão, contagem e grupos (18h51 às 18h59).** Só quem instalou em casa confere a conexão. **Ninguém instala nada na sala.** Vocês contam as máquinas conectadas e aplicam a regra abaixo.
- **B1 (18h59 às 19h08).** A máquina conectada (ou o telão) lê a Tela demo pelo arquivo. Todo mundo confere dois valores no próprio Figma, escolhe uma correção e escreve a decisão.
- **B2 (19h08 às 19h21).** Cada pessoa aplica a correção no próprio protótipo, no próprio notebook, e testa.
- **B3 (19h21 às 19h30).** A sala abre a própria `handoff`. Quem está sem a pasta recebe pelo pendrive. O Thiago não gera Card no telão.
- **B4 (19h30 às 19h36).** Quem criou chave revoga todas.
- **Fecho (19h36 às 19h40).** O antes e o depois do formulário e a passagem para o Mateus.

Cada slide de passo mostra o horário do corte ("até 18h11"). No corte, a sala segue.

Gerar o próprio Card e o próprio arquivo de tokens virou **extensão** (guia do participante, seção 8): só para quem terminou antes e está conectado. Não puxe ninguém para ela.


## A regra dos grupos: uma máquina conectada para cada quatro pessoas

Esta decisão é de vocês, às **18h55**, antes de qualquer cadeira se mover.

1. O Thiago pede: "Quem conectou levanta a mão." Conectou é o Claude Desktop ter dito o nome do arquivo.
2. Um de vocês conta as mãos. O outro conta as pessoas na sala.
3. Divida as pessoas por quatro e arredonde para cima. É o número de máquinas que a rota em grupo pede:

| Pessoas na sala | Máquinas conectadas necessárias |
|---|---|
| 17 a 20 | 5 |
| 21 a 24 | 6 |
| 25 a 28 | 7 |
| 29 a 32 | 8 |

4. Digam os dois números ao Thiago.
   - **Atingiu:** montem os grupos, até quatro por máquina.
   - **Faltou, mesmo que uma só:** ninguém muda de lugar. O B1 acontece no telão e cada pessoa confere no próprio Figma. O Thiago anuncia.

A decisão não se revê depois. Se uma máquina cair com os grupos formados, o grupo dela acompanha a leitura do grupo ao lado.


## Antes de quarta

1. Siga `fortaleza/guia-participante.md` inteiro na sua máquina, da seção 1 à revogação. Quem já passou pelo erro destrava o outro muito mais rápido.
2. Rode o instalador em casa, como a sala vai fazer. Se tiver Windows, use `npx.cmd`. Teste também o plano B: na pasta do ZIP, `node scripts/instalar.mjs`.
3. **Quem tem Windows:** o seu teste é o único em Windows que a gente tem. Até **segunda, 16/11**, conte ao Thiago duas coisas: se o Claude Desktop mostrou a conexão com o Figma depois de reabrir, e se a importação do plugin funcionou colando o caminho no campo "Nome do arquivo" da janela do Figma.
4. **O pendrive tem dono.** Um de vocês confirma no grupo, até **segunda, 16/11**, que leva. Quem confirmar:
   - baixa o ZIP do workshop, descompacta e copia a pasta `handoff` para o pendrive;
   - leva pendrive USB comum **e** um jeito de ligar em USB-C (pendrive duplo ou adaptador);
   - testa em casa, com o wifi desligado: abrir `handoff/Card.html` direto do pendrive tem que mostrar dois cards com cor;
   - responde no grupo "pendrive testado".
   Se ninguém confirmar até segunda, avisem o Thiago: ele leva o dele, e a promessa do palco não fica no ar.
5. Revogue a sua chave depois do ensaio. No dia você não usa a sua.


## Divisão na sala

Quantos voluntários seremos ainda não está fechado [VERIFICAR com a Gi]. A divisão sugerida:

- **Lado conexão:** de 18h51 a 18h59, quem instalou em casa e não conectou, e a contagem das máquinas. Depois: conexão que caiu, B1 vazio.
- **Lado Parte A e grupos:** login, exportar o PNG (ou apontar o PNG pronto), protótipo que veio só como código, limite da conta gratuita. Às 18h55, contar as pessoas e montar os grupos. Às 19h21, o pendrive.
- **Relógio,** se houver três ou mais voluntários: acompanha as marcas abaixo e faz um sinal discreto ao Thiago quando a maioria não bateu.

Com dois voluntários, cada um pega um lado e cobre uma metade da sala, de frente para trás. O Thiago guarda o relógio pelo deck.

**Como montar os grupos,** se a regra numérica fechou. Até quatro pessoas por máquina conectada. Todo mundo leva o próprio notebook. Papel de cada um: quem está conectado manda o prompt do B1 e lê a resposta em voz alta; os outros conferem os valores no próprio Figma. No B2, cada pessoa volta para a própria tela.


## Marcas de relógio e o que é "deu certo"

| Relógio | Passo | Deu certo quando | Foco de vocês |
|---|---|---|---|
| 18h05 a 18h11 | A1, exportar | PNG do formulário inteiro salvo | Selecionar o frame pelo nome, Export no fim do painel da direita, PNG 2x. Saiu só um pedaço: selecionou uma camada de dentro. **Não duplicou o arquivo:** não tente resolver; aponte o PNG pronto, `fortaleza/telao/tela-demo.png` no ZIP, ou o link direto do guia |
| 18h11 a 18h18 | A2, revisar | Até três sugestões numeradas, com "viu" ou "supôs" | Anexar a imagem, mandar na conversa nova |
| 18h18 a 18h22 | A3, decidir | Números anotados, com o motivo das recusas | Lembrar que é para anotar antes de gerar. Não há prompt neste passo. Sem tempo: decidir pelo menos uma |
| 18h22 a 18h40 | A4 e A5, protótipo e teste | Formulário aparece na conversa e aceita digitação; erro e "Conta criada" testados; uma diferença anotada | Veio só código: mandar **uma vez** "Mostre o protótipo funcionando aqui na conversa." Depois conferir Settings > Capabilities. Estava ligada: parar e acompanhar o vizinho, sem investigar |
| 18h51 a 18h59 | Conexão, contagem e grupos | **O Claude Desktop disse o nome do arquivo** | Uma tentativa por pessoa. Não resolveu: grupo. Às 18h55, contar e aplicar a regra numérica |
| 18h59 a 19h08 | B1, ler e escolher | As três respostas apareceram; cada pessoa conferiu um valor no próprio Figma e **escreveu a decisão** | Mostrar onde ficam as variáveis: **Variables, na barra de navegação da esquerda**. Em versão anterior do Figma: nada selecionado, painel da direita, Local variables; ou busca de ações (Cmd+K, Ctrl+K), "variables". Cobrar a decisão escrita: é o que a pessoa leva de qualquer jeito |
| 19h08 a 19h21 | B2, corrigir | O ponto escolhido mudou, o resto não, erro e sucesso ainda funcionam. No campo nome: os dois campos ficaram iguais | Cada pessoa na conversa do próprio protótipo, no próprio notebook. Não precisa da conexão. A escolha é da pessoa: não sugerir qual |
| 19h21 a 19h30 | B3, abrir a pasta | Estado 1: `Card.html` abre com cor e `#C8352B`, `20px` e `24px` estão no `tokens.json`. Estado 2, só com rede: os mesmos três nas variáveis do Figma | Pendrive para quem levantou a mão. Abrir o `tokens.json` como texto (botão direito, Abrir com). Só ler, não salvar. Sem rede, o estado 2 fica pendente: não dizer que a pasta foi conferida contra o Figma |
| 19h30 a 19h36 | B4, revogar | Nenhuma chave do workshop na lista do Figma | Passar pelas fileiras e perguntar se revogou. Se houver mais de uma chave do workshop, revogar todas |


## Regras

- **Ninguém instala na sala.** Quem chegou sem instalar faz a B em grupo, ou com o telão, desde 18h51.
- **Uma tentativa, depois grupo.** Não investigue problema profundo de uma máquina.
- **Os cortes de 18h40, 19h08, 19h21 e 19h30 não esperam.** Quem atrasou segue com a sala e termina depois pelo guia.
- **Fila no mesmo ponto:** avise o Thiago. Ele resolve no telão para todos.
- **Grupo de verdade:** quem não instalou confere os valores no próprio Figma (navegador serve) e corrige o próprio protótipo. Ninguém fica só olhando.


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

Não há máquina reserva nem máquina do evento [VERIFICAR com a Gi]. Toda saída é grupo, `handoff` ou telão.

### O Claude não diz o nome do arquivo (18h51)

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

Desligar a VPN. A conexão usa as portas locais 9223 a 9232. Antivírus corporativo que bloqueia: grupo.

### Limite da conta gratuita do Claude

A pessoa já tem o que foi garantido: a decisão escrita. Ela acompanha o teste do vizinho e aplica em casa. A `handoff` não depende do Claude.

### Máquinas conectadas abaixo da regra

É a regra numérica acima: o B1 acontece só no telão e a sala confere os valores no próprio Figma. O B2 continua individual.

### Rede da sala cai

Avise o Thiago. A correção vira demonstração no telão. No B3, abrir a pasta, ver o Card com cor e achar os três valores não usa internet. Comparar com o Figma usa, para quem está no Figma do navegador: essa parte fica pendente, e a pessoa faz em casa.

### Linux, ou notebook da empresa que não deixa instalar

Parte A normal. Parte B em grupo.


## No fim

- Todo mundo que criou chave revogou todas no Figma.
- Quem usou máquina que não é sua: sair das contas do Figma e do Claude.
- Todo mundo com a pasta `handoff` para as 20h.
- Conte ao Thiago quantas pastas foram entregues pelo pendrive.
