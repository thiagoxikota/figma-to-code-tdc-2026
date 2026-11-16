# Roteiro: Seu Figma vira produto (Fortaleza, v8)

**Título:** Seu Figma vira produto: design com IA, do arquivo ao protótipo que funciona.

Fora do Frame, uma experiência UXFor, 3º dia (workshops presenciais). Quarta, 18/11/2026, Digital College Aldeota, Av. Santos Dumont, 1510, 1º andar, Fortaleza.

Janela do Thiago: 18h00 às 19h40 (100 min). Mesa de instalação com os voluntários às 17h30. Às 19h40 entra o coffee; às 20h, o workshop do Mateus Villain (tokens e componente para código, Style Dictionary).

**Público: designers.** Linguagem de designer no palco. Nada de "propriedade", "estado", "origem do valor", "rota" ou "comparação pendente". A parte técnica é "a conexão" ou "conectar o Figma ao Claude". A sigla MCP aparece uma vez, explicada: "MCP, o jeito de o Claude conversar com o Figma".

Fonte das decisões: `.critica/spec-v7.md` (local, fora do Git), seção final "v8", que substitui as decisões 1, 2 e 5 da v7 e a grade. Prompts palavra por palavra: `guia-participante.md`. Fala no prompter: `roteiro-prompter.txt`.


## A tese

"A imagem mostra como a tela parece. O arquivo mostra do que ela é feita."

**Todo mundo conecta o Figma ao Claude, cada um na própria máquina, sem dupla.** O preparo em casa é obrigatório (30 a 45 min) e inclui a conexão. Quem não conseguiu chega às 17h30, na mesa de instalação. Na sala, depois das 18h, ninguém mexe em máquina: quem não conectou acompanha a leitura pelo telão e faz o resto igual.

**A promessa, dita na abertura:** "Vocês saem com o Figma conectado ao Claude, com o formulário de vocês funcionando, corrigido com um valor que o Claude de vocês leu do arquivo de vocês, e sabendo o que a imagem não mostra." Para quem bater no limite: "acompanha pelo telão e termina em casa com o prompt do guia".

O jogo "Chuta o valor" é o ápice. Os valores que o arquivo revela:

1. **Texto "Leva menos de um minuto":** `#A29B93`, contraste de 2,75 para 1 (o AA pede 4,5). Token certo: `color/text-muted`, `#6C665F`.
2. **Campo nome:** só contorno. O padrão é preenchido, `color/surface-alt`, `#F5F3F0`.
3. **Botão "Continuar":** `#C8352B`, igual a `color/brand-primary`, mas digitado direto, sem ligação. "Se a marca mudar, esse botão fica para trás. A imagem não tem como mostrar isso."

Nunca dizer que o vermelho está errado: o valor está certo, a ligação é que falta.

**A leitura inédita fica.** A sala escolhe uma camada e um valor que não estão em material nenhum; o Thiago pergunta no telão, compara com o painel do Figma, e cada um repete na própria máquina. Os valores 1 a 3 estão no guia e no slide, então repetir esses valores não mostra que o Claude leu o arquivo. A leitura inédita mostra.

É um exercício controlado, e isso é dito: a tela tem problemas colocados de propósito.


## Grade v8

| Horário | Bloco | Min |
|---|---|---|
| 17h30 a 18h00 | Mesa de instalação, com os voluntários (fora da grade) | |
| 18h00 a 18h05 | Abertura: o que cada um leva, a tela com problemas de propósito, guia no notebook | 5 |
| 18h05 a 18h10 | Teste da conexão: "Qual arquivo está aberto no Figma?" O Claude diz o nome. Mãos levantadas para quem não conectou: segue pelo telão | 5 |
| 18h10 a 18h14 | 1. Exporte a tela | 4 |
| 18h14 a 18h21 | 2. O Claude revisa a imagem, você decide | 7 |
| 18h21 a 18h35 | 3. A tela vira formulário | 14 |
| 18h35 a 18h47 | 4. Brinque com o formulário (até 2 ajustes) | 12 |
| 18h47 a 19h05 | 5. Chuta o valor: o chute pela imagem, cada um pergunta ao arquivo pela conexão, o Thiago revela no telão junto, o botão sem ligação, a leitura inédita que cada um repete | 18 |
| 19h05 a 19h20 | 6. Corrija com o valor que o seu Claude leu do seu arquivo | 15 |
| 19h20 a 19h30 | 7. Galeria | 10 |
| 19h30 a 19h35 | Revogar a chave do Figma (todo mundo criou uma; nunca cortado) | 5 |
| 19h35 a 19h40 | Limites, imagem ou arquivo, passagem para o Mateus | 5 |

Soma: 100 min. A validar no ensaio cronometrado (`checklist-thiago.md`).

O horário aparece só no canto do slide, como "até 18h21". Sem marcadores de modo e sem "Deu certo quando" no slide.

### Prioridade quando atrasar

1. **O bloco 4 encolhe primeiro:** um ajuste só.
2. **Depois a galeria,** até 2 pessoas.
3. **Teste da conexão, jogo (5), correção (6) e revogação não são cortados.**
4. Quem atrasou num passo para onde está e segue com a sala. A conversa continua no Claude e o guia tem tudo.


## Bloco a bloco

### 17h30 a 18h00. Mesa de instalação

Os voluntários atendem quem não terminou a conexão em casa (`guia-voluntarios.md`). O Thiago monta o palco e não entra na mesa. Às 18h a mesa fecha.

### 18h00 a 18h05. Abertura

1. Título e nome. O Thiago se apresenta em uma frase.
2. O que cada um leva, com a frase da promessa.
3. A tela tem problemas colocados de propósito.
4. O limite, sem drama: "A conta gratuita do Claude tem limite. Hoje cada um usa umas 7 mensagens: o teste, a revisão, o protótipo, até 2 ajustes, a leitura e a correção. Mandem cada prompt uma vez."
5. O guia no notebook: "Abram pelo link da mensagem do grupo. O QR leva ao mesmo lugar. Copiem os prompts do guia, não do telão."

### 18h05 a 18h10. Teste da conexão

Figma Desktop com a cópia aberta, plugin Figma Desktop Bridge rodando, Claude Desktop. Prompt do teste: "Qual arquivo está aberto no Figma agora? Responda só o nome." O Thiago faz no telão. Fala: "O Claude disse o nome do arquivo de vocês? Então ele está lendo o Figma, não uma imagem." Depois: "Quem não conectou, levanta a mão." Os voluntários contam. "Vocês acompanham a leitura pelo telão e fazem todo o resto igual. Aqui na sala ninguém mexe em máquina."

Uma frase sobre o nome: "Isso se chama MCP, o jeito de o Claude conversar com o Figma. É a palavra para procurar depois."

### 18h10 a 18h14. 1. Exporte a tela

O Thiago faz junto, com zoom: clica no nome Tela demo, Export, mais, PNG, 2x. "Quem não duplicou o arquivo não espera: a imagem pronta está no guia, com link direto."

### 18h14 a 18h21. 2. O Claude revisa a imagem, você decide

Conversa nova (no Claude Desktop ou no navegador), imagem anexada, prompt da revisão. É a conversa da imagem; a do teste fica guardada para o passo 5. Fala: "Ele dá no máximo 3 sugestões. A IA aponta, quem conhece a tela é você. Anotem quais aceitam e uma frase para cada recusa." Exemplo de recusa, se ninguém tiver: uma sugestão de campo de senha, recusada porque o contexto diz que esta etapa não pede senha.

### 18h21 a 18h35. 3. A tela vira formulário

Mesma conversa, prompt do protótipo com os números aceitos. O Thiago mostra o dele abrindo. Teste junto: vazio dá erro, preenchido dá "Conta criada". Veio só código: pede uma vez para mostrar funcionando; depois confere Settings > Capabilities.

Se a geração do palco falhar: mostrar a saída do ensaio e dizer que é do ensaio.

### 18h35 a 18h47. 4. Brinque com o formulário

O momento gostoso. Fala: "Até 2 ajustes, do jeito que vocês pediriam a um colega. Tem um menu de ideias no guia: versão escura, mais respiro, erro mais gentil, botão desabilitado até preencher, animação no Conta criada, trocar o vermelho da marca. Depois mostrem ao vizinho." O Thiago faz um no telão. Atrasou: um ajuste só.

### 18h47 a 19h05. 5. Chuta o valor

Na ordem, sem pular:

1. **O chute pela imagem.** Cada um manda o prompt do chute na própria conversa da imagem; o Thiago manda o mesmo no telão, e a resposta fica no telão. Quem está perto do limite pula e acompanha o telão. Depois a sala chuta: "Qual é a cor desse texto? Passa no contraste? O campo nome é preenchido ou só contorno?" Duas ou três vozes.
2. **Cada um pergunta ao arquivo.** "Agora a conversa do arquivo, a do teste. Mandem o prompt da leitura." O Thiago manda o mesmo no Claude Desktop do palco, com o painel do Figma ao lado.
3. **O Thiago revela junto.** `#A29B93`, 2,75 para 1, o AA pede 4,5; o token certo é `color/text-muted`, `#6C665F`. O campo nome é só contorno; o padrão é preenchido, `color/surface-alt`, `#F5F3F0`. "Confiram com o que o Claude de vocês leu."
4. **O botão.** Seleciona o "Continuar": `#C8352B`, igual a `color/brand-primary`, mas digitado direto. "O valor é igual. A ligação não existe. Se a marca mudar, esse botão fica para trás. A imagem não tem como mostrar isso."
5. **A leitura inédita.** A sala escolhe uma camada e um valor que não estão em material nenhum (sem resposta: o raio do canto de um campo, a largura do frame, o tamanho do título). O Thiago seleciona no Figma e deixa o valor no painel, sem ler em voz alta. Pergunta ao Claude Desktop só por esse valor, abre o pedido que ele fez ao Figma e o que voltou, e compara com o painel. Cada um repete na própria máquina, com o prompt do guia, e confere no próprio painel. Fala: "Esse valor não está escrito em lugar nenhum do material. Vocês viram o pedido sair e a resposta voltar, aqui e na máquina de vocês."

Fecha com a tese: "A imagem mostra como a tela parece. O arquivo mostra do que ela é feita."

### 19h05 a 19h20. 6. Corrija com o valor que o seu Claude leu

Fala: "Cada um escolhe: texto de apoio ou campo nome. A correção vai na conversa da imagem, a do protótipo, com o valor que o Claude de vocês leu. Para o texto de apoio, o valor certo é a variável `color/text-muted`, que vocês acham em Variables, no Figma. Quem não conectou usa o valor do telão." O Thiago faz a do texto de apoio no telão e mostra antes e depois. Teste: mudou só ali, e erro e "Conta criada" continuam.

Dizer: "É um valor copiado do arquivo agora. O protótipo não fica ligado ao Figma: se o token mudar amanhã, ele não muda sozinho."

### 19h20 a 19h30. 7. Galeria

Três ou quatro pessoas mostram o formulário: notebook virado para a sala, ou o Thiago projeta uma conversa compartilhada. Cada uma diz qual correção fez e por quê. Atrasou: duas pessoas.

### 19h30 a 19h35. Revogue a chave

Todo mundo criou uma chave, então todo mundo revoga. Fala: "Figma, Settings, Security, Personal access tokens. Revoke em todas as que vocês criaram para hoje. Pronto quando a lista não mostra mais nenhuma." O Thiago mostra o caminho no telão sem abrir a lista com a chave do palco; a dele é revogada depois, fora do telão. Nunca cortado.

### 19h35 a 19h40. Limites e passagem para o Mateus

Em uma respiração: o protótipo não é produto pronto, serve para testar a ideia e conversar com o time; a correção é um valor copiado; o arquivo só diz o que existe nele, e valor digitado direto volta solto, como o botão de hoje.

Imagem ou arquivo: "Imagem para conversar sobre como a tela parece. Arquivo para cor, medida e ligação com o design system."

Passagem: "Às 20h, depois do coffee, levem a pasta `handoff` da Área de Trabalho. Ela tem um Card e os tokens de design: é dela que o Mateus parte. O formulário fica com vocês, no Claude." Pergunta que vira consultoria: "me procura no coffee". Fecha no horário. Detalhes em `para-o-mateus.md`.


## Contingências

- **Muita gente sem conexão no teste:** não muda a dinâmica. A leitura do passo 5 vai para o telão, e quem não conectou corrige com o valor do telão. Ninguém mexe em máquina na sala.
- **Rede cai para muita gente:** o Thiago segue no telão com a saída do ensaio, dita como ensaio. A pasta `handoff` não depende de internet.
- **Limite da conta em massa:** quem ficou sem acompanha pelo telão e aplica em casa com os prompts do guia.
- **Conexão do palco cai no jogo:** dizer que caiu. Pedir a leitura em voz alta a alguém conectado na sala, e revelar pelo painel do Figma e pelo slide com os recortes reais. A leitura inédita vira a captura do ensaio, dita como ensaio. Nunca vender pré-gerado como ao vivo.
- **Geração do palco falha:** saída do ensaio, dita como ensaio.
- **Alguém sem a pasta `handoff`:** o voluntário do pendrive copia durante a sala ou no coffee, sem parar o workshop.
- **Atraso acumulado:** a regra de prioridade acima.
- **Máquinas, rede, tomadas, projetor, número de voluntários, espaço para a mesa das 17h30:** [VERIFICAR com a Gi] (`perguntas-gi.md`).
