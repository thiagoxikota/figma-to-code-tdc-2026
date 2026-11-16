# Guia dos voluntários: Seu primeiro site, do Figma ao ar (Fortaleza)

Quarta, 18/11/2026, 18h00 às 19h40, Digital College Aldeota. Mesa de instalação a partir das 17h30. Obrigado por estar junto.

O público é de designers, não de devs. Tom de quem ajuda colega, sem jargão.

O Thiago fica no palco do começo ao fim. Vocês são quem vai até a pessoa travada. A meta é ninguém ficar parado.

**A promessa da sala:** "Você sai com o primeiro site no ar, feito do seu Figma, com regras suas." Quem bater no limite do Claude gratuito usa o site reserva do kit (`meu-site-kit/reserva/index.html`), troca os textos e publica igual; se preferir, termina em casa com os prompts do guia. Não prometam mais do que isso.


## Como o workshop funciona

O método: o agente lê o arquivo do Figma pela conexão, segue as regras do `DESIGN.md`, gera um `index.html` único e a pessoa publica no Netlify Drop. GitHub é explicado e mostrado no telão, não é obrigatório.

**Todo mundo conecta o Figma ao Claude Desktop na própria máquina, sem dupla.** A conexão faz parte do preparo obrigatório em casa. Quem usa Codex pode usar no lugar (seção "Usa Codex?" do guia), mas a sala segue no Claude Desktop e a mesa não configura Codex. Quem não conectou chega às 17h30, na mesa. **Depois das 18h ninguém instala nada na sala:** quem não conectou acompanha a leitura pelo telão.

Tudo acontece numa conversa só, no Claude Desktop: o alô, o prompt 1 (leitura com o `DESIGN.md` anexo), o prompt 2 (o `index.html`) e um ajuste opcional. Não prometam número de mensagens: o limite da conta gratuita varia com o dia.

Cada pessoa precisa ter, na Área de Trabalho, a pasta `meu-site-kit` (com o `DESIGN.md` e a pasta `meu-site`, vazia) e a pasta `handoff`, para o Mateus às 20h.


## Mesa de instalação, 17h30 às 18h00

Para quem não terminou a parte 2 do preparo em casa. O guia do participante tem o passo a passo; sigam ele com a pessoa.

**O que conferir, nesta ordem:**

1. **Os três programas.** Figma Desktop (o app, não o navegador), Claude Desktop logado na conta da pessoa, e `node -v` no Terminal ou no PowerShell mostrando v18 ou maior.
2. **O instalador.** O comando do guia, pela tag `fortaleza-v4` (no Windows, `npx.cmd`). A chave é criada **pela própria pessoa**, na conta dela: 7 dias, só leitura em File content. Vocês não digitam nem veem a chave.
   - Disse que já existe uma conexão com o mesmo nome, ou que a configuração não é válida: leiam juntos o que seria substituído. A pessoa decide se digita `sim`. Na dúvida, não.
   - Disse que a instalação NÃO terminou: seguir os passos que ele mostra e rodar de novo. Ele reaproveita a chave.
   - O comando não baixa: na pasta do ZIP, `node scripts/instalar.mjs`. Ainda precisa de internet.
3. **O Claude Desktop fechado por completo e aberto de novo.** Mac: Cmd+Q. Windows: sair também pelo ícone perto do relógio.
4. **O plugin.** Figma Desktop com a cópia do arquivo aberta, Plugins > Development > Import plugin from manifest, o caminho que o instalador copiou (Mac: Cmd+Shift+G e colar; Windows: colar no campo "Nome do arquivo" e Abrir). Depois rodar o **Figma Desktop Bridge** e deixar a janela aberta.
5. **O teste (o alô).** Frame "Meu portfólio" selecionado. No Claude Desktop, conversa nova, com o prompt do alô do guia: o arquivo aberto e o tamanho da fonte do nome. Depois a pessoa confere no Figma: clica no nome e olha o painel da direita. **Pronto quando o Claude diz o nome do arquivo e um tamanho de fonte, e o painel mostra o mesmo número.** O `[ok]` do instalador não conta.

Não respondeu: plugin rodando? Arquivo aberto no Figma Desktop? VPN desligada (a conexão usa as portas locais 9223 a 9232)?

**Confiram também, rápido:**

- A cópia do arquivo tem a página "Portfólio" (a primeira), com o frame "Meu portfólio". Não tem: a cópia é antiga, duplicar de novo da Community.
- A pasta `meu-site-kit` e a `handoff` estão na Área de Trabalho. Não estão: pendrive.
- A pessoa tem conta no Netlify. Não tem: criar agora em https://app.netlify.com/signup , é rápido.

**Quando desistir:**

- **Uma volta completa pelos 5 itens por pessoa.** Não subiu, a pessoa acompanha a leitura pelo telão. Não investiguem problema profundo de uma máquina.
- Notebook da empresa que não deixa instalar, Linux, ou antivírus corporativo bloqueando: telão, sem tentar.
- Rede da sala não baixa o instalador: telão.
- **Às 18h00 a mesa fecha,** com quem estiver no meio. Na sala, nada de instalação.


## O relógio da sala

| Relógio | Slide | Pronto quando | Foco de vocês |
|---|---|---|---|
| 18h00 a 18h15 | 1 a 3. Mapa | A sala ouviu o print x arquivo e as peças | Nada a fazer nas máquinas. Quem chegou atrasado: guia aberto e `meu-site-kit` na Área de Trabalho |
| 18h15 a 18h20 | 4. Guia e QR | Guia aberto no notebook | Quem não achou o link: o QR do slide |
| 18h20 a 18h45 | 5 e 6. A ponte e o alô | O Claude Desktop disse o nome do arquivo e o tamanho da fonte do nome, e o painel do Figma mostra o mesmo número | Conferir plugin rodando, Figma Desktop (não navegador), Claude Desktop reaberto. Ajudar a pessoa a clicar no nome e achar o tamanho no painel da direita. Contar as mãos. Não instalar: quem não conectou segue pelo telão |
| 18h45 a 18h55 | 7 e 8. Harness e prepare o molde | Um frame "Meu portfólio" com o nome da pessoa | Editado direto, sem duplicar. Só texto muda; as cores ficam |
| 18h55 a 19h10 | 9 e 10. Prompt 1 e prompt 2 | Lista com até 3 pontos, valor atual e valor certo; depois `index.html` dentro de `meu-site`, abrindo no navegador | `DESIGN.md` anexado antes do prompt 1. Leitura vazia: plugin rodando? Frame com o nome certo e só um? Não digam os dois erros antes do telão. Prompt 2: achar o botão de baixar. Não achou: plano B do guia (TextEdit em texto simples ou Bloco de Notas, "Todos os arquivos"). Bateu no limite: plano C, o `index.html` de `meu-site-kit/reserva`. Nome exato `index.html` |
| 19h10 a 19h20 | 11. Conferir e corrigir | Site conferido ao lado do frame, um ajuste feito | Ajudar a comparar texto, bio, botão e tela estreita. O ajuste termina com "Não mude mais nada" |
| 19h20 a 19h30 | 12 e 13. Pasta, GitHub e Netlify; no ar | O link abre na janela anônima e no celular | Logado na conta. Arrastar a pasta `meu-site`, não o arquivo. "Page not found": conferir o nome `index.html`. Não abriu na anônima: o site expirou sem login, entrar na conta e arrastar de novo |
| 19h30 a 19h40 | 14 a 16. Demo, galeria, revogar e passagem | 3 links no telão; nenhuma chave do workshop na lista do Figma; todo mundo sabe que leva a `handoff` às 20h | Quem ainda não publicou: ajudar no Drop em silêncio. Achar quem tem um site bonito e topa mostrar. Ajudar a achar Settings > Security > Personal access tokens. Revogar nunca é cortado |

Atrasou: a galeria encolhe primeiro, depois a demo do GitHub. Conectar, gerar, conferir, publicar e revogar não são cortados.


## Limite da conta

A conta gratuita do Claude tem limite, e ele varia com o dia; não há número prometido. Bateu no limite: plano C, o site reserva do kit (`meu-site-kit/reserva/index.html`). A pessoa troca os textos e publica igual. Termina em casa com os prompts do guia, se quiser. Sem drama, sem tentar outra conta.


## Antes de quarta

1. Faça o preparo inteiro do guia do participante (partes 1, 2 e 3) e os passos da sala na sua conta gratuita, até publicar no Netlify Drop e testar o link numa janela anônima e no celular. Quem já passou pelo erro destrava o outro mais rápido.
2. **Quem tem Windows:** faça a conexão e o passo do `index.html` no Windows e conte ao Thiago se o Claude Desktop disse o nome do arquivo, se a importação do plugin funcionou colando o caminho no campo "Nome do arquivo" e como o `index.html` foi salvo. O Windows ainda não foi ensaiado.
3. **O pendrive tem dono.** Um de vocês confirma no grupo que leva. Quem confirmar:
   - baixa o ZIP da tag `fortaleza-v4` e copia **três coisas** para o pendrive: a pasta `handoff`, a pasta `fortaleza/meu-site-kit` e o guia em arquivo (`fortaleza/guia-participante.md`);
   - leva pendrive USB comum **e** um jeito de ligar em USB-C;
   - testa com o wifi desligado: `handoff/Card.html` abre com cor direto do pendrive, e o `DESIGN.md` e o guia abrem;
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

- Não usa a própria conta (Figma, Claude ou Netlify) na máquina de outra pessoa.
- Não cria, digita nem vê a chave do Figma de ninguém.
- Não diz os dois erros do molde antes do telão.
- Não diz que o vermelho do botão "está errado": o valor é igual ao do token, o que falta é a ligação.
- Não promete que o site sai pronto para produção.
- Não escreve o código pela pessoa nem edita o `DESIGN.md` dela.
- Não pede para ninguém apagar ou alterar arquivo da própria `handoff`.


## Contingências

Não há máquina reserva nem máquina do evento [VERIFICAR com a Gi].

- **Conexão não subiu ou caiu:** telão. Uma volta na mesa, nenhuma na sala.
- **Chave vencida ou revogada:** na mesa, a pessoa cria outra e roda o instalador de novo. Na sala, telão.
- **Limite da conta:** plano C, o site reserva em `meu-site-kit/reserva/index.html`: a pessoa troca os textos e publica igual. Telão e casa como complemento.
- **Sem a página "Portfólio":** duplicar o arquivo de novo da Community.
- **Sem botão de baixar:** plano B do guia.
- **Link não abre na janela anônima:** o site do Drop expira sem login. Entrar na conta do Netlify e arrastar a pasta de novo.
- **Netlify Drop falha:** conferir a pasta e o nome `index.html`, uma tentativa, depois casa.
- **Rede da sala cai:** avisem o Thiago. Ele segue no telão. A `handoff` abre sem internet; o Netlify fica para casa.
- **Sem `meu-site-kit` ou `handoff`:** pendrive.


## No fim

- Todo mundo revogou a chave do Figma.
- Quem usou máquina que não é sua: sair das contas do Figma, do Claude e do Netlify.
- Todo mundo com a pasta `handoff` para as 20h.
- Contem ao Thiago quantas pessoas conectaram na mesa, quantas publicaram e quantas pastas saíram pelo pendrive.
