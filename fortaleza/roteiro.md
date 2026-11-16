# Roteiro: Seu Figma vira produto (Fortaleza, v7)

**Título:** Seu Figma vira produto: design com IA, do arquivo ao protótipo que funciona.

Fora do Frame, uma experiência UXFor, 3º dia (workshops presenciais). Quarta, 18/11/2026, Digital College Aldeota, Av. Santos Dumont, 1510, 1º andar, Fortaleza.

Janela do Thiago: 18h00 às 19h40 (100 min). Às 19h40 entra o coffee; às 20h, o workshop do Mateus Villain (tokens e componente para código, Style Dictionary).

**Público: designers.** Linguagem de designer no palco. Nada de "propriedade", "estado", "origem do valor", "rota" ou "comparação pendente". A parte técnica aparece só como "a conexão entre o Claude Desktop e o Figma"; a sigla MCP não vai para o telão. "Chave do Figma" só existe no bônus do guia.

Fonte das decisões: `.critica/spec-v7.md` (local, fora do Git), que substitui a v6. Prompts palavra por palavra: `guia-participante.md`. Fala no prompter: `roteiro-prompter.txt`.


## A tese

"A imagem mostra como a tela parece. O arquivo mostra do que ela é feita."

**Ninguém instala nada.** A conexão Claude Desktop e Figma é demonstração do Thiago, no telão. Quem quiser faz em casa, pelo bônus do guia.

**A promessa, dita na abertura:** "Vocês saem com o formulário de vocês funcionando, corrigido com um valor que veio do arquivo, e sabendo o que a imagem não mostra." Para quem bater no limite: "fez com o vizinho e aplica em casa com o prompt do guia".

O jogo "Chuta o valor" é o ápice. Os valores que o arquivo revela:

1. **Texto "Leva menos de um minuto":** `#A29B93`, contraste de 2,75 para 1 (o AA pede 4,5). Token certo: `color/text-muted`, `#6C665F`.
2. **Campo nome:** só contorno. O padrão é preenchido, `color/surface-alt`, `#F5F3F0`.
3. **Botão "Continuar":** `#C8352B`, igual a `color/brand-primary`, mas digitado direto, sem ligação. "Se a marca mudar, esse botão fica para trás. A imagem não tem como mostrar isso."

Nunca dizer que o vermelho está errado: o valor está certo, a ligação é que falta.

**A leitura inédita fica.** A sala escolhe uma camada e um valor que não estão em material nenhum; o Thiago pergunta ao Claude Desktop e compara com o painel do Figma. Os valores 1 a 3 estão no guia e no slide, então repetir esses valores não mostra que o Claude leu o arquivo. A leitura inédita mostra.

É um exercício controlado, e isso é dito: a tela tem problemas colocados de propósito.


## Grade v7

| Horário | Bloco | Min |
|---|---|---|
| 18h00 a 18h05 | Abertura: o que cada um leva, a tela com problemas de propósito, regra do vizinho, guia no notebook | 5 |
| 18h05 a 18h10 | 1. Exporte a tela (PNG 2x; imagem pronta no guia) | 5 |
| 18h10 a 18h18 | 2. O Claude revisa, você decide (até 3 sugestões; você marca quais aceita e por quê recusa) | 8 |
| 18h18 a 18h33 | 3. A tela vira formulário (o mínimo: digitar, erro com campo vazio, "Conta criada", mais só as aceitas) | 15 |
| 18h33 a 18h48 | 4. Brinque com o formulário: até 2 ajustes em linguagem de designer, menu de ideias no guia; mostre ao vizinho | 15 |
| 18h48 a 19h05 | 5. Chuta o valor: o Claude chuta pela imagem, a sala chuta, o arquivo responde no telão; o botão; a leitura inédita | 17 |
| 19h05 a 19h20 | 6. Corrija com o valor do arquivo (texto de apoio ou campo nome) e compare antes e depois | 15 |
| 19h20 a 19h32 | 7. Galeria: 3 ou 4 formulários e o porquê de cada correção | 12 |
| 19h32 a 19h37 | Limites, imagem ou arquivo, QR do bônus | 5 |
| 19h37 a 19h40 | Passagem para o Mateus (levar a pasta `handoff`) | 3 |

Soma: 100 min. A validar no ensaio cronometrado (`checklist-thiago.md`).

O horário aparece só no canto do slide, como "até 18h18". Sem marcadores de modo e sem "Deu certo quando" no slide.

### Prioridade quando atrasar

1. **O bloco 4 encolhe primeiro,** até 5 min: um ajuste só.
2. **Depois a galeria,** até 2 pessoas.
3. **O jogo (5) e a correção (6) não são cortados.**
4. Quem atrasou num passo para onde está e segue com a sala. A conversa continua no Claude e o guia tem tudo.


## Bloco a bloco

### 18h00 a 18h05. Abertura

1. Título e nome. O Thiago se apresenta em uma frase.
2. O que cada um leva, com a frase da promessa.
3. A tela tem problemas colocados de propósito.
4. A regra do vizinho, sem drama: "A conta gratuita do Claude tem limite. Hoje cada um usa umas 5 mensagens: a revisão, o protótipo, até 2 ajustes e a correção. Mandem cada prompt uma vez. Bateu no limite, junta com o vizinho e segue no notebook dele."
5. O guia no notebook: "Abram pelo link da mensagem do grupo. O QR leva ao mesmo lugar. Copiem os prompts do guia, não do telão."

### 18h05 a 18h10. 1. Exporte a tela

O Thiago faz junto, com zoom: clica no nome Tela demo, Export, mais, PNG, 2x. "Quem não duplicou o arquivo não espera: a imagem pronta está no guia, com link direto."

### 18h10 a 18h18. 2. O Claude revisa, você decide

Conversa nova, imagem anexada, prompt da revisão. Fala: "Ele dá no máximo 3 sugestões. A IA aponta, quem conhece a tela é você. Anotem quais aceitam e uma frase para cada recusa." Exemplo de recusa, se ninguém tiver: uma sugestão de campo de senha, recusada porque o contexto diz que esta etapa não pede senha.

### 18h18 a 18h33. 3. A tela vira formulário

Mesma conversa, prompt do protótipo com os números aceitos. O Thiago mostra o dele abrindo. Teste junto: vazio dá erro, preenchido dá "Conta criada". Veio só código: pede uma vez para mostrar funcionando; depois confere Settings > Capabilities; continuou, segue com o vizinho.

Se a geração do palco falhar: mostrar a saída do ensaio e dizer que é do ensaio.

### 18h33 a 18h48. 4. Brinque com o formulário

O momento gostoso. Fala: "Até 2 ajustes, do jeito que vocês pediriam a um colega. Tem um menu de ideias no guia: versão escura, mais respiro, erro mais gentil, botão desabilitado até preencher, animação no Conta criada, trocar o vermelho da marca. Depois mostrem ao vizinho." O Thiago faz um no telão. Atrasou: um ajuste só, 5 min.

### 18h48 a 19h05. 5. Chuta o valor

Na ordem, sem pular:

1. **O Claude chuta.** No telão, na conversa com a imagem, o prompt do chute. A resposta fica no telão.
2. **A sala chuta.** "Qual é a cor desse texto? Passa no contraste? O campo nome é preenchido ou só contorno?" Duas ou três vozes.
3. **O arquivo responde.** No Claude Desktop, pela conexão, o Thiago pergunta os mesmos pontos e mostra o painel do Figma ao lado. Revela: `#A29B93`, 2,75 para 1, o AA pede 4,5; o token certo é `color/text-muted`, `#6C665F`. O campo nome é só contorno; o padrão é preenchido, `color/surface-alt`, `#F5F3F0`.
4. **O botão.** Seleciona o "Continuar": `#C8352B`, igual a `color/brand-primary`, mas digitado direto. "O valor é igual. A ligação não existe. Se a marca mudar, esse botão fica para trás. A imagem não tem como mostrar isso."
5. **A leitura inédita.** A sala escolhe uma camada e um valor que não estão em material nenhum (sem resposta: o raio do canto de um campo, a largura do frame, o tamanho do título). O Thiago seleciona no Figma e deixa o valor no painel, sem ler em voz alta. Pergunta ao Claude Desktop só por esse valor, abre o pedido que ele fez ao Figma e o que voltou, e compara com o painel. Fala: "Esse valor não está escrito em lugar nenhum do material. Vocês viram o pedido sair e a resposta voltar."

Fecha com a tese: "A imagem mostra como a tela parece. O arquivo mostra do que ela é feita."

### 19h05 a 19h20. 6. Corrija com o valor do arquivo

Fala: "Cada um escolhe: texto de apoio ou campo nome. O prompt está no guia e não precisa de conexão: o valor vocês já têm." O Thiago faz a do texto de apoio no telão e mostra antes e depois. Teste: mudou só ali, e erro e "Conta criada" continuam.

Dizer: "É um valor copiado do arquivo agora. O protótipo não fica ligado ao Figma: se o token mudar amanhã, ele não muda sozinho."

### 19h20 a 19h32. 7. Galeria

Três ou quatro pessoas mostram o formulário: notebook virado para a sala, ou o Thiago projeta uma conversa compartilhada. Cada uma diz qual correção fez e por quê. Atrasou: duas pessoas.

### 19h32 a 19h37. Limites, imagem ou arquivo, QR do bônus

Em uma respiração: o protótipo não é produto pronto, serve para testar a ideia e conversar com o time; a correção é um valor copiado; o arquivo só diz o que existe nele, e valor digitado direto volta solto, como o botão de hoje.

Imagem ou arquivo: "Imagem para conversar sobre como a tela parece. Arquivo para cor, medida e ligação com o design system."

QR do bônus: "O que eu fiz no telão vocês fazem em casa. Está no fim do guia, com o passo a passo e como apagar a chave depois."

### 19h37 a 19h40. Passagem para o Mateus

"Às 20h, depois do coffee, levem a pasta `handoff` da Área de Trabalho. Ela tem um Card e os tokens de design: é dela que o Mateus parte. O formulário fica com vocês, no Claude." Pergunta que vira consultoria: "me procura no coffee". Fecha no horário. Detalhes em `para-o-mateus.md`.


## Contingências

- **Rede cai para muita gente:** o Thiago segue no telão com a saída do ensaio, dita como ensaio. A pasta `handoff` não depende de internet.
- **Limite da conta em massa:** regra do vizinho. Quem ficou sem aplica em casa com os prompts do guia.
- **Conexão do palco cai no jogo:** dizer que caiu. Revelar pelo painel do Figma e pelo slide com os recortes reais. A leitura inédita vira a captura do ensaio, dita como ensaio. Nunca vender pré-gerado como ao vivo.
- **Geração do palco falha:** saída do ensaio, dita como ensaio.
- **Alguém sem a pasta `handoff`:** o voluntário do pendrive copia durante a sala ou no coffee, sem parar o workshop.
- **Atraso acumulado:** a regra de prioridade acima.
- **Máquinas, rede, tomadas, projetor, número de voluntários:** [VERIFICAR com a Gi] (`perguntas-gi.md`).
