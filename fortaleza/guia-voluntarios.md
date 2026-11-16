# Guia dos voluntários: Seu Figma vira produto (Fortaleza)

Quarta, 18/11/2026, 18h00 às 19h40, Digital College Aldeota. Mesa de instalação a partir das 17h30. Obrigado por estar junto.

O público é de designers, não de devs. Tom de quem ajuda colega, sem jargão.

O Thiago fica no palco do começo ao fim. Vocês são quem vai até a pessoa travada. A meta é ninguém ficar parado.

**A promessa da sala:** "Você sai com o Figma conectado ao Claude, com o seu formulário funcionando, corrigido com um valor que o seu Claude leu do seu arquivo, e sabendo o que a imagem não mostra." Quem bater no limite do Claude gratuito acompanha pelo telão e termina em casa com o prompt do guia. Não prometam mais do que isso.


## Como o workshop funciona

**Todo mundo conecta o Figma ao Claude na própria máquina, sem dupla.** A conexão faz parte do preparo obrigatório em casa (seção "Preparo" do guia do participante). Quem não conseguiu chega às 17h30, na mesa de instalação. **Depois das 18h ninguém mexe em máquina na sala:** quem não conectou acompanha a leitura do arquivo pelo telão e faz todo o resto igual.

Cada pessoa usa duas conversas: a **do arquivo**, no Claude Desktop (o teste da conexão e a leitura do passo 5), e a **da imagem**, do passo 2 ao 6 (Claude Desktop ou navegador). São cerca de 7 mensagens por pessoa: teste, revisão, protótipo, até 2 ajustes, leitura e correção.


## Mesa de instalação, 17h30 às 18h00

Para quem não terminou a parte 2 do preparo em casa. O guia do participante tem o passo a passo; sigam ele com a pessoa.

**O que conferir, nesta ordem:**

1. **Os três programas.** Figma Desktop (o app, não o navegador), Claude Desktop logado na conta da pessoa, e `node -v` no Terminal ou no PowerShell mostrando v18 ou maior.
2. **O instalador.** O comando do guia (no Windows, `npx.cmd`). A chave é criada **pela própria pessoa**, na conta dela: 7 dias, só leitura em File content. Vocês não digitam nem veem a chave.
   - Disse que já existe uma conexão com o mesmo nome, ou que a configuração não é válida: leiam juntos o que seria substituído. A pessoa decide se digita `sim`. Na dúvida, não.
   - Disse que a instalação NÃO terminou: seguir os passos que ele mostra e rodar de novo. Ele reaproveita a chave.
   - O comando não baixa: na pasta do ZIP, `node scripts/instalar.mjs`. Ainda precisa de internet.
3. **O Claude Desktop fechado por completo e aberto de novo.** Mac: Cmd+Q. Windows: sair também pelo ícone perto do relógio.
4. **O plugin.** Figma Desktop com a cópia do arquivo aberta, Plugins > Development > Import plugin from manifest, o caminho que o instalador copiou (Mac: Cmd+Shift+G e colar; Windows: colar no campo "Nome do arquivo" e Abrir). Depois rodar o **Figma Desktop Bridge** e deixar a janela aberta.
5. **O teste.** No Claude Desktop, conversa nova: "Qual arquivo está aberto no Figma agora? Responda só o nome." **Pronto quando o Claude diz o nome do arquivo.** O `[ok]` do instalador não conta.

Não respondeu: plugin rodando? Arquivo aberto no Figma Desktop? VPN desligada (a conexão usa as portas locais 9223 a 9232)?

**Quando desistir:**

- **Uma volta completa pelos 5 itens por pessoa.** Não subiu, a pessoa acompanha a leitura pelo telão. Não investiguem problema profundo de uma máquina.
- Notebook da empresa que não deixa instalar, Linux, ou antivírus corporativo bloqueando: telão, sem tentar.
- Rede da sala não baixa o instalador: telão.
- **Às 18h00 a mesa fecha,** com quem estiver no meio. Na sala, nada de instalação.


## O relógio da sala

| Relógio | Passo | Pronto quando | Foco de vocês |
|---|---|---|---|
| 18h00 a 18h05 | Abertura | Guia aberto no notebook | Quem não achou o link: o QR do slide |
| 18h05 a 18h10 | Teste da conexão | O Claude Desktop disse o nome do arquivo | Contar as mãos de quem não conectou. Não consertar: essas pessoas seguem pelo telão |
| 18h10 a 18h14 | 1. Exporte a tela | PNG do formulário inteiro | Clicar no nome do frame, Export no fim do painel da direita, PNG 2x. Não duplicou o arquivo: apontar a imagem pronta no guia ou no pendrive |
| 18h14 a 18h21 | 2. O Claude revisa, você decide | Números anotados e um motivo para cada recusa | Conversa nova, separada da do teste. A escolha é da pessoa: não decidam por ela |
| 18h21 a 18h35 | 3. A tela vira formulário | Formulário na conversa, digitação, erro vazio, "Conta criada" | Veio só código: pedir **uma vez** para mostrar funcionando; depois conferir Settings > Capabilities |
| 18h35 a 18h47 | 4. Brinque com o formulário | Até 2 ajustes e o formulário ainda funciona | Lembrar do menu de ideias do guia e do "Não mude mais nada" |
| 18h47 a 19h05 | 5. Chuta o valor | A pessoa chutou, mandou a leitura na conversa do arquivo e repetiu a leitura escolhida pela sala | Não digam os valores antes do telão. Leitura voltou vazia: conferir se o plugin está rodando e se a conversa é a do Claude Desktop. Caiu de vez: telão |
| 19h05 a 19h20 | 6. Corrija | O ponto escolhido mudou, o resto não, erro e "Conta criada" ainda funcionam | A correção vai na conversa do protótipo. Texto de apoio: o valor é a variável `color/text-muted`, em Variables no Figma. Sem conexão: valor do telão. Mudou demais: "Desfaça o resto. Só a mudança que eu pedi." |
| 19h20 a 19h30 | 7. Galeria | 3 ou 4 pessoas mostraram | Achar quem tem um formulário bonito e topa mostrar |
| 19h30 a 19h35 | Revogue a chave | Nenhuma chave do workshop na lista do Figma | Ajudar a achar Settings > Security > Personal access tokens. Nunca cortado |
| 19h35 a 19h40 | Limites e passagem | Todo mundo sabe que leva a `handoff` às 20h | Quem não tem a pasta: pendrive |

Atrasou: o passo 4 encolhe primeiro, depois a galeria. Teste da conexão, jogo, correção e revogação não são cortados.


## Limite da conta

A conta gratuita do Claude tem limite, e ele varia com o dia. Bateu no limite: a pessoa acompanha o resto pelo telão e termina em casa com os prompts do guia. Sem drama, sem tentar outra conta.


## Antes de quarta

1. Faça o preparo inteiro do guia do participante, incluindo a conexão, e os passos na sua conta gratuita. Quem já passou pelo erro destrava o outro mais rápido.
2. **Quem tem Windows:** faça a conexão no Windows e conte ao Thiago se o Claude Desktop disse o nome do arquivo e se a importação do plugin funcionou colando o caminho no campo "Nome do arquivo". O Windows ainda não foi ensaiado.
3. **O pendrive tem dono.** Um de vocês confirma no grupo que leva. Quem confirmar:
   - baixa o ZIP da tag `fortaleza-v3` e copia **três coisas** para o pendrive: a pasta `handoff`, a imagem da Tela demo (`fortaleza/telao/tela-demo.png`) e o guia em arquivo (`fortaleza/guia-participante.md`);
   - leva pendrive USB comum **e** um jeito de ligar em USB-C;
   - testa com o wifi desligado: `handoff/Card.html` abre com cor direto do pendrive, e a imagem e o guia abrem;
   - responde no grupo "pendrive testado".
   Se ninguém confirmar, avisem o Thiago: ele leva o dele.


## Divisão na sala

Quantos voluntários seremos ainda não está fechado [VERIFICAR com a Gi]. Às 17h30, todos na mesa de instalação. Na sala, com dois, cada um cobre uma metade, de frente para trás. Com três ou mais, um guarda o relógio e faz um sinal discreto ao Thiago quando a maioria não bateu o passo.

O pendrive circula durante a sala, sem parar o workshop, ou no coffee.


## Regras

- **Na sala, ninguém instala.** Quem chegou sem conexão segue pelo telão.
- **Uma tentativa, depois telão.** Não investiguem problema profundo de uma máquina.
- **Fila no mesmo ponto:** avisem o Thiago. Ele resolve no telão para todos.


## O que voluntário não faz

- Não usa a própria conta na máquina de outra pessoa.
- Não cria, digita nem vê a chave do Figma de ninguém.
- Não diz os valores do jogo antes do telão.
- Não diz que o vermelho do botão "está errado": o valor é igual ao do token, o que falta é a ligação.
- Não diz que o protótipo ficou "ligado ao Figma": a correção é um valor copiado.
- Não promete que o protótipo sai pronto para produção.
- Não escolhe pela pessoa no passo 2 nem no passo 6.
- Não pede para ninguém apagar ou alterar arquivo da própria `handoff`.


## Contingências

Não há máquina reserva nem máquina do evento [VERIFICAR com a Gi].

- **Conexão não subiu ou caiu:** telão. Uma volta na mesa, nenhuma na sala.
- **Chave vencida ou revogada:** na mesa, a pessoa cria outra e roda o instalador de novo. Na sala, telão.
- **Limite da conta:** telão e casa.
- **Não duplicou o arquivo:** imagem pronta, no guia ou no pendrive. A leitura do arquivo fica no telão.
- **Rede da sala cai:** avisem o Thiago. Ele segue no telão. A `handoff` abre sem internet.
- **Sem a pasta `handoff`:** pendrive.


## No fim

- Todo mundo revogou a chave do Figma.
- Quem usou máquina que não é sua: sair das contas do Figma e do Claude.
- Todo mundo com a pasta `handoff` para as 20h.
- Contem ao Thiago quantas pastas saíram pelo pendrive e quantas pessoas conectaram na mesa.
