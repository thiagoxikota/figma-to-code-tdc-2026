# Guia dos voluntários: Figma + IA, na prática (Fortaleza)

Quarta, 18/11/2026, 18h00 às 19h40, Digital College Aldeota. Mesa de instalação a partir das 17h30. Obrigado por estar junto.

O público é de designers, não de devs. Tom de quem ajuda colega, sem jargão.

O Thiago fica no palco do começo ao fim. Vocês são quem vai até a pessoa travada. A meta é ninguém ficar parado.

**A promessa da sala:** "Um agente de IA vai mexer no seu Figma, e depois transformar o que ele fez em site." Quem bater no limite do Claude gratuito edita a hero à mão no Figma e usa o site reserva do kit (`meu-site-kit/reserva/index.html`); se preferir, termina em casa com os prompts do guia. Não prometam mais do que isso.


## Como o workshop funciona

Cada pessoa parte do frame "Minha hero" (primeira página do arquivo da Community), uma hero section só. Ela traz de casa o `meus-dados.txt` preenchido (nome, título, bio, botão e link, cor principal, fundo). Na sala:

1. **O alô:** o agente diz o nome do arquivo e o texto do botão do frame ("Fale comigo"), e a pessoa confere olhando o frame.
2. **Prompt 1:** o agente escreve no Figma da pessoa. Troca os textos, muda o valor da variável `color/brand-primary` e, se o fundo for escuro, as variáveis de fundo e texto. A pessoa confere que as camadas continuam editáveis.
3. **Possibilidades:** só telão (comentário lido e aplicado, handoff, `DESIGN.md`, harness).
4. **Prompt 2:** com o `DESIGN.md` anexado, o agente gera um `index.html` da hero. A pessoa baixa para `meu-site` e abre no navegador.
5. **Conferir como designer:** site ao lado do frame, janela estreita, um ajuste.
6. **Próximos passos opcionais** (Netlify Drop para quem terminou, GitHub, PageSpeed, React Bits, Mobbin).

**Todo mundo conecta o Figma ao Claude Desktop na própria máquina, sem dupla.** A conexão faz parte do preparo obrigatório em casa. Quem usa Codex pode usar no lugar (seção "Usa Codex?" do guia), mas a sala segue no chat do Claude Desktop e a mesa não configura Codex. Quem não conectou chega às 17h30, na mesa. **Depois das 18h ninguém instala nada na sala:** quem não conectou acompanha pelo telão e edita a hero à mão.

Tudo acontece numa conversa só, no chat do Claude Desktop. Não prometam número de mensagens: o limite da conta gratuita varia com o dia.

Cada pessoa precisa ter, na Área de Trabalho, a pasta `meu-site-kit` (com `meus-dados.txt`, `DESIGN.md`, `reserva` e a pasta `meu-site`, vazia) e a pasta `handoff`, para o workshop seguinte, às 20h.


## Mesa de instalação, 17h30 às 18h00

Para quem não terminou a parte 2 do preparo em casa. O guia do participante tem o passo a passo; sigam ele com a pessoa.

**O que conferir, nesta ordem:**

1. **Os três programas.** Figma Desktop (o app, não o navegador), Claude Desktop logado na conta da pessoa, e `node -v` no Terminal ou no PowerShell mostrando v18 ou maior.
2. **O instalador.** O comando do guia, pela tag `v1` do `figma-ia-na-pratica` (no Windows, `npx.cmd`). A chave é criada **pela própria pessoa**, na conta dela: 7 dias, só leitura em File content, com um nome fácil de achar, como `workshop fortaleza`. Vocês não digitam nem veem a chave.
   - Disse que já existe uma conexão com o mesmo nome, ou que a configuração não é válida: leiam juntos o que seria substituído. A pessoa decide se digita `sim`. Na dúvida, não.
   - Disse que a instalação NÃO terminou: seguir os passos que ele mostra e rodar de novo. Ele reaproveita a chave.
   - O comando não baixa: na pasta do ZIP, `node scripts/instalar.mjs`. Ainda precisa de internet.
3. **O Claude Desktop fechado por completo e aberto de novo.** Mac: Cmd+Q. Windows: sair também pelo ícone perto do relógio.
4. **O plugin.** Figma Desktop com a cópia do arquivo aberta, Plugins > Development > Import plugin from manifest, o caminho que o instalador copiou (Mac: Cmd+Shift+G e colar; Windows: colar no campo "Nome do arquivo" e Abrir). Depois rodar o **Figma Desktop Bridge** e deixar a janela aberta. **Pronto quando a janelinha mostra "Connected".**
5. **O teste (o alô).** Frame "Minha hero" selecionado. No Claude Desktop, conversa nova, com o prompt do alô do guia: o nome do arquivo e o texto do botão. **Pronto quando o Claude diz o nome do arquivo e "Fale comigo", o texto do botão no molde.** O `[ok]` do instalador não conta.

Não respondeu: plugin rodando, com "Connected"? Arquivo aberto no Figma Desktop? VPN desligada (a conexão usa as portas locais 9223 a 9232)?

**Confiram também, rápido:**

- A cópia do arquivo tem a página "Minha hero" (a primeira), com o frame "Minha hero". Não tem: a cópia é antiga, duplicar de novo da Community.
- O `meus-dados.txt` está preenchido. Não está: a pessoa preenche ali, são seis linhas.
- A pasta `meu-site-kit` e a `handoff` estão na Área de Trabalho. Não estão: pendrive.
- Conta no Netlify é opcional. Não insistam.

**Quando desistir:**

- **Uma volta completa pelos 5 itens por pessoa.** Não subiu, a pessoa acompanha pelo telão. Não investiguem problema profundo de uma máquina.
- Notebook da empresa que não deixa instalar, Linux, ou antivírus corporativo bloqueando: telão, sem tentar.
- Rede da sala não baixa o instalador: telão.
- **Às 18h00 a mesa fecha,** com quem estiver no meio. Na sala, nada de instalação.


## O relógio da sala

| Relógio | Slide | Pronto quando | Foco de vocês |
|---|---|---|---|
| 18h00 a 18h10 | 1 a 3. Abertura | A sala viu a demo de 1 minuto e as peças | Nada a fazer nas máquinas. Quem chegou atrasado: guia aberto e `meu-site-kit` na Área de Trabalho |
| 18h10 a 18h35 | 4 a 7. Setup guiado e alô | Plugin em "Connected"; o Claude disse o nome do arquivo e "Fale comigo" | Quem não achou o link: o QR do slide. `meus-dados.txt` preenchido. Plugin rodando, Figma Desktop (não navegador), Claude Desktop reaberto. Contar as mãos. Não instalar |
| 18h35 a 18h55 | 8 a 10. Sua hero pelo agente | O frame "Minha hero" com os dados da pessoa, camadas ainda editáveis | Frame "Minha hero" selecionado antes do prompt 1, dados colados no fim. Pediu permissão para usar o Figma: permitir. Mexeu no frame errado ou criou camadas: Cmd+Z (Ctrl+Z) e corrigir à mão, sem outra mensagem. Ajudar a conferir: camada de texto continua texto, título ligado a `color/brand-primary`. O exemplo do Thiago também muda de cor: é esperado. Foto: arrastar à mão para "Foto (opcional)". Bateu no limite: editar à mão os textos e o valor da variável no painel |
| 18h55 a 19h05 | 11 e 12. Possibilidades | A sala viu a demo do comentário e a tabela do harness | Ninguém manda mensagem aqui. Quem atrasou no prompt 1 termina em silêncio |
| 19h05 a 19h20 | 13. Prompt 2 | `index.html` dentro de `meu-site`, abrindo no navegador | `DESIGN.md` anexado antes do prompt 2. Achar o botão de baixar. Não achou: plano B (TextEdit em texto simples, ou Bloco de Notas com "Todos os arquivos"). Bateu no limite: plano C, o `index.html` de `meu-site-kit/reserva`, trocando os textos marcados `TROQUE`. Nome exato `index.html`. Foto: exportar JPG como `foto.jpg` na mesma pasta |
| 19h20 a 19h30 | 14. Confira como designer | Site conferido ao lado do frame, um ajuste feito | Ajudar a comparar textos, fontes, cor, links e janela estreita. O ajuste termina com "Não mude mais nada" |
| 19h30 a 19h40 | 15 e 16. Próximos passos, galeria e fecho com o QR do LinkedIn | Até 3 heros no telão; o QR do LinkedIn visível no telão até o fim | Quem terminou e quer: ajudar no Netlify Drop em silêncio (pasta `meu-site`, não o arquivo; testar na janela anônima). Achar quem topa mostrar a hero. O fecho com o QR nunca é cortado |

Atrasou: a galeria encolhe primeiro, depois os próximos passos, depois a demo do comentário vira gravação. O alô, o prompt 1, o prompt 2, a conferência e o fecho não são cortados.


## Limite da conta

A conta gratuita do Claude tem limite, e ele varia com o dia; não há número prometido. A lista de ferramentas da conexão também consome parte do limite [VERIFICAR no ensaio: quanto]. Bateu no limite no prompt 1: a pessoa edita a hero à mão no Figma, com os dados do `meus-dados.txt` (textos nas camadas e o valor de `color/brand-primary` no painel de variáveis). Bateu no prompt 2: plano C, o site reserva do kit. Termina em casa com os prompts do guia, se quiser. Sem drama, sem tentar outra conta.


## Antes de quarta

1. Faça o preparo inteiro do guia do participante (partes 1 e 2, e a 3 se quiser) e os passos da sala na sua conta gratuita, até abrir o `index.html` no navegador. Quem já passou pelo erro destrava o outro mais rápido.
2. **Quem tem Windows:** faça a conexão, o prompt 1 e o passo do `index.html` no Windows e conte ao Thiago se o plugin mostrou "Connected", se o Claude disse o nome do arquivo, se o prompt 1 escreveu no Figma, se a importação do plugin funcionou colando o caminho no campo "Nome do arquivo" e como o `index.html` foi salvo. O instalador passa nos testes automáticos de Windows, mas ninguém ensaiou o fluxo inteiro numa máquina Windows de verdade.
3. **O pendrive tem dono.** Um de vocês confirma no grupo que leva. Quem confirmar:
   - baixa o ZIP de https://github.com/thiagoxikota/figma-ia-na-pratica/archive/refs/tags/v1.zip e copia **três coisas** para o pendrive: a pasta `handoff`, a pasta `meu-site-kit` e o guia em arquivo (`README.md`);
   - leva pendrive USB comum **e** um jeito de ligar em USB-C;
   - testa com o wifi desligado: `handoff/Card.html` abre com cor direto do pendrive, e o `meus-dados.txt`, o `DESIGN.md` e o guia abrem;
   - responde no grupo "pendrive testado".
   Se ninguém confirmar, avisem o Thiago: ele leva o dele.


## Divisão na sala

Quantos voluntários seremos ainda não está fechado [VERIFICAR com a Gi]. Às 17h30, todos na mesa de instalação. Na sala, com dois, cada um cobre uma metade, de frente para trás. Com três ou mais, um guarda o relógio e faz um sinal discreto ao Thiago quando a maioria não bateu o passo.

O pendrive circula durante a sala, sem parar o workshop, ou no coffee.


## Regras

- **Na sala, ninguém instala.** Quem chegou sem conexão segue pelo telão e edita à mão.
- **Uma tentativa, depois telão.** Não investiguem problema profundo de uma máquina.
- **Fila no mesmo ponto:** avisem o Thiago. Ele resolve no telão para todos.


## O que voluntário não faz

- Não usa a própria conta (Figma, Claude ou Netlify) na máquina de outra pessoa.
- Não cria, digita nem vê a chave do Figma de ninguém.
- Não escreve a bio nem escolhe a cor pela pessoa: os dados são dela.
- Não promete que o site sai pronto para produção.
- Não escreve o código pela pessoa nem edita o `DESIGN.md` dela.
- Não pede para ninguém apagar ou alterar arquivo da própria `handoff`.


## Contingências

Não há máquina reserva nem máquina do evento [VERIFICAR com a Gi].

- **Conexão não subiu ou caiu:** telão e edição à mão. Uma volta na mesa, nenhuma na sala.
- **Chave vencida ou revogada:** na mesa, a pessoa cria outra e roda o instalador de novo. Na sala, telão.
- **Limite da conta:** prompt 1, edição à mão no Figma; prompt 2, plano C. Telão e casa como complemento.
- **O prompt 1 quebrou o frame:** Cmd+Z (Ctrl+Z) e corrigir à mão.
- **Sem a página "Minha hero":** duplicar o arquivo de novo da Community.
- **Sem botão de baixar:** plano B do guia.
- **Netlify Drop falha ou o link não abre na janela anônima:** conferir a pasta e o nome `index.html`; sem login o site expira. Uma tentativa, depois casa. É opcional.
- **Rede da sala cai:** avisem o Thiago. Ele segue no telão. A `handoff` abre sem internet; o Netlify fica para casa.
- **Sem `meu-site-kit` ou `handoff`:** pendrive.


## No fim

- Quem usou máquina que não é sua: sair das contas do Figma, do Claude e do Netlify.
- Todo mundo com a pasta `handoff` para as 20h.
- Contem ao Thiago quantas pessoas conectaram na mesa, quantas tiveram a hero escrita pelo agente, quantas abriram o site e quantas pastas saíram pelo pendrive.
