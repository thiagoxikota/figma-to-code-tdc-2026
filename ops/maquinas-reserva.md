# Runbook: maquinas reserva (Reserva 1, 2, 3)

Tres notebooks pre-montados para quem travar no setup. Nao sao para todo mundo: entram quando a regra de corte manda migrar (a partir do minuto 20 do setup, ou depois de duas falhas seguidas na mesma pessoa). Quem decide acionar reserva e o Bruno (guarda o relogio e a contingencia). Quem opera a reserva no momento da troca sao os apoios: Apoio 1 no Figma, token, plugin e frame; Apoio 2 no Claude Desktop, config MCP, Node, projeto e preview.

A meta e trocar a pessoa de maquina em 2 minutos. Isso so fecha porque tudo que e lento (baixar pacote, buildar projeto, importar plugin, abrir arquivo) ja foi feito na vespera. Na hora, o unico passo vivo e injetar o token da propria pessoa e reabrir o Claude.

Fluxo unico, igual ao do resto do workshop:
Claude Desktop -> Figma Console MCP (npx) -> plugin Desktop Bridge -> Figma Desktop.

---

## 1. Estado exigido antes do evento (checklist por maquina)

Rode este checklist em CADA reserva (1, 2 e 3), na vespera, e confira de novo na manha do dia 23.

### 1.1 Energia e hardware

- [ ] Ligada e na tomada. Nunca depender de bateria durante o evento.
- [ ] Carregador proprio da maquina plugado e testado (nao um carregador emprestado que pode sumir).
- [ ] Tela em brilho alto, suspensao automatica DESLIGADA (nada de dormir no meio de uma migracao).
- [ ] Mouse ou trackpad funcionando. Se for mouse externo, pilha/carga conferida.

### 1.2 Rede

- [ ] Conectada na mesma rede que o resto da sala vai usar, testada de verdade (abrir uma pagina, nao so ver o icone de wifi).
- [ ] Rede reserva (roteador 4G/hotspot do celular) ja pareada e a um clique, caso a rede da sala caia.
- [ ] Um `npx` de teste ja rodou nesta maquina hoje (cache quente). Ver secao 2.

### 1.3 Software e versoes

- [ ] Node 18 ou superior instalado. Conferir com `node -v`.
- [ ] npm e npx respondendo (`npm -v`, `npx -v`).
- [ ] Figma Desktop instalado e atualizado.
- [ ] Claude Desktop instalado e atualizado.
- [ ] Pacote do MCP ja no cache do npx, versao fixada `figma-console-mcp@1.35.0` (o mesmo pino do workshop). Nada de `@latest`.

### 1.4 Projeto do workshop

- [ ] Repositorio do workshop baixado numa pasta conhecida (a mesma em todas as reservas, para os apoios acharem rapido).
- [ ] `npm install` ja rodado, `node_modules` presente.
- [ ] `npm run build` ja rodado, `dist/` presente.
- [ ] Preview validado uma vez com `npm run workshop:start` (subiu, abriu no navegador, mostrou o card). Depois de conferir, pode deixar parado; a pessoa sobe de novo na hora do exercicio.
- [ ] Atalho na area de trabalho que abre um terminal JA dentro da pasta do projeto (para nao perder tempo com `cd`).
- [ ] Componentes no estado known-good (rodar `npm run workshop:reset` uma vez para garantir).

### 1.5 Figma

- [ ] Figma Desktop aberto e logado numa conta que serve so para esta maquina no dia (nao uma conta pessoal de organizador; ver secao 4).
- [ ] Uma copia do arquivo publico duplicavel aberta (figma.com/community/file/1659374868260259462), na pagina "01 Comece aqui" (o frame "Tela demo" fica dentro do passo 4). Uma copia compartilhada serve para qualquer participante, porque o exercicio LE o frame e edita o codigo, nao o Figma.
- [ ] Plugin Bridge ("Figma Desktop Bridge") JA importado em Plugins > Development (ver secao 2 para como isso foi gerado) e RODANDO, deixado ativo.
- [ ] Frame "Tela demo" visivel, sem seleçao travada em outro lugar.

### 1.6 Claude Desktop e config MCP (SEM token)

- [ ] Claude Desktop aberto e logado numa conta de dia (nao pessoal de organizador).
- [ ] Config do Claude com a entrada `figma-console` ja escrita (command `npx`, args `-y figma-console-mcp@1.35.0`, env `ENABLE_MCP_APPS` = `true`) e o campo `FIGMA_ACCESS_TOKEN` com o placeholder literal `figd_SEU_TOKEN_AQUI`, exatamente como a maquina de evento (ver `preparar-maquinas.md`). O placeholder deixa o JSON completo e valido e NAO e segredo de ninguem; o token real da pessoa entra so na migracao, por cima.
  - Windows: `%APPDATA%\Claude\claude_desktop_config.json`
  - macOS: `~/Library/Application Support/Claude/claude_desktop_config.json`

### 1.7 O que NAO pode estar na reserva

- [ ] SEM token pessoal de ninguem gravado no config (nem de organizador, nem sobra de um teste).
- [ ] SEM login pessoal de organizador no Figma ou no Claude.
- [ ] SEM segredo cravado em arquivo, variavel de ambiente persistente, ou historico de terminal.
- [ ] SEM conversa antiga aberta no Claude Desktop (comeca limpo).

---

## 2. Como a reserva chegou nesse estado (preparo, feito na vespera)

Responsavel principal: Apoio 2 (projeto, Node, Claude, config). Apoio 1 confere o lado Figma/plugin.

A reserva e provisionada EXATAMENTE como uma maquina de evento. Nao ha metodo proprio aqui: siga `preparar-maquinas.md` de ponta a ponta (projeto clonado/copiado e buildado, npx aquecido e pasta do plugin materializada, plugin Bridge importado, config do Claude armado com o placeholder `figd_SEU_TOKEN_AQUI`, atalho do wrapper e do projeto, tutorial e arquivo Figma abertos, rede testada). A unica diferenca da reserva e o uso: ela fica ociosa, rotulada Reserva 1/2/3, e so entra na migracao.

Resumo do estado final (todos vindos de `preparar-maquinas.md`):
1. Node 18+, Figma Desktop e Claude Desktop instalados; contas de staging usadas so no preparo e deslogadas no fim.
2. `npx` aquecido na versao fixada e `~/.figma-console-mcp/plugin/manifest.json` criado (Windows: `%USERPROFILE%\.figma-console-mcp\plugin\manifest.json`).
3. Plugin Bridge importado e rodando no Figma Desktop.
4. Projeto buildado, preview validado, componentes no estado known-good (`npm run workshop:reset`).
5. Config do Claude com a entrada `figma-console` e o placeholder `figd_SEU_TOKEN_AQUI` (o mesmo da maquina de evento). O token real da pessoa entra so na migracao, por cima do placeholder.
6. Atalhos na area de trabalho; nenhum terminal com segredo na memoria; historico limpo.

---

## 3. Verificacao final (rodar antes do evento)

Na pasta do projeto, rodar:

```
npm run workshop:doctor
```

Numa reserva bem montada (igual a maquina de evento), TODAS as linhas devem sair OK, SEM nenhuma FALHA:

- A linha do token sai como `token presente no config`. Aqui "presente" significa "a entrada esta armada e o JSON e valido", nao "ha um token real": o valor e o placeholder `figd_SEU_TOKEN_AQUI` (o doctor so confere o prefixo `figd_`). Isso e exatamente o estado que queremos numa maquina pre-armada, e bate com o que `preparar-maquinas.md` espera.
- Para ter certeza de que e o placeholder e nao um token esquecido, abra o config e confirme que o valor e literalmente `figd_SEU_TOKEN_AQUI`.

Se QUALQUER linha aparecer como FALHA (Node, projeto, dist, config invalido, token), corrigir ANTES do evento.

Conferir tambem, a olho:

- [ ] Figma Desktop aberto no frame "Tela demo", plugin Bridge rodando.
- [ ] Claude Desktop aberto, sem conversa antiga.
- [ ] Preview sobe com `npm run workshop:start` (e para de novo).

---

## 4. Migracao em 2 minutos (pessoa travada)

Gatilho: o Bruno manda migrar. Nao investigar o problema profundo da maquina antiga; a reserva existe justamente para nao gastar tempo com isso.

Quem conduz a troca: Apoio 1 (token e Figma) junto com Apoio 2 (Claude e config). O Thiago NAO sai do palco para isso.

Passo a passo:

1. Sentar a pessoa na reserva. Se ela ja gerou o proprio token do Figma na maquina antiga (checkpoint 2), usar esse. Se nao gerou, gerar agora: Figma > Settings > Security > Personal access tokens > Generate new token, escopos de leitura de conteudo/variaveis/comentarios. Comeca com `figd_`, aparece uma vez.
2. Injetar o token com o wrapper seguro (ele pede o token num campo escondido, nunca imprime, nunca passa pelo argv):
   - macOS: duplo clique em `scripts/setup-figma-mcp.command`.
   - Windows: botao direito em `scripts/setup-figma-mcp.ps1` > Run with PowerShell.
   - O wrapper preenche o token na entrada `figma-console` que ja estava montada e preserva o resto.
3. Fechar o Claude Desktop POR COMPLETO e reabrir (macOS: Cmd+Q, nao so fechar a janela). O MCP so carrega no boot do app. Como o pacote ja esta no cache, a subida e rapida.
4. Teste real, no Claude, conversa nova: "Verifique o status da conexao com o Figma". Sucesso e a resposta confirmando conexao via WebSocket Bridge com o nome do arquivo aberto. Nao aceitar "o MCP aparece na lista" como prova; se der tempo, pedir para LER o frame "Tela demo" e conferir que volta dado especifico.
5. Pessoa liberada. O plugin ja estava rodando e o projeto ja estava buildado, entao ela cai direto no exercicio.

Se em 2 minutos nao conectar: a pessoa vira dupla com um vizinho ja rodando, e o apoio segue com a proxima. Nao prender a sala num caso individual.

---

## 5. Limpeza depois de cada uso

Toda reserva usada por um participante volta ao estado da secao 1 antes da proxima pessoa. O `workshop:reset` NAO toca em credencial nem em config; ele so restaura os componentes. Por isso a limpeza tem passos manuais alem dele.

Ordem, na pasta do projeto:

1. No Claude Desktop: apagar as conversas do participante (nada do que ele escreveu fica para o proximo).
2. Remover a entrada MCP com o token dele do config:
   ```
   npm run workshop:setup-mcp -- --remove
   ```
   Isso apaga so a entrada `figma-console` (faz backup, preserva outros MCP). Depois, fechar por completo e reabrir o Claude para ele largar o servidor carregado.
3. Revogar o token do participante no Figma: Settings > Security > Personal access tokens > revogar o token dele. Mesmo ja removido do config, revogar mata o valor em todo lugar.
4. Restaurar os componentes conforme codados na vespera:
   ```
   npm run workshop:reset
   ```
5. Deslogar as contas do participante: sair do Figma Desktop e sair do Claude Desktop se ele entrou com conta propria. Voltar para as contas de dia da maquina.
6. Fechar a copia do Figma que o participante tenha aberto e reabrir a copia compartilhada no frame "Tela demo", plugin rodando.
7. Conferir que a maquina voltou ao estado limpo:
   ```
   npm run workshop:setup-mcp -- --check
   npm run workshop:doctor
   ```
   O `--check` deve dizer que `figma-console` NAO esta configurado (removido). O `doctor` deve sair como a secao 3 (tudo OK menos a linha do token, que fica ausente de novo, como esperado numa reserva pronta).

A reserva esta pronta para a proxima pessoa.

---

## 6. Regras de seguranca fixas

- O token e sempre da propria pessoa, entra na migracao e sai na limpeza. Organizador nao usa token pessoal em maquina do evento.
- O token nunca passa pelo site, por analytics, por URL, por banco, pelo projetor, nem pelos organizadores. So o wrapper seguro, num campo escondido, grava local.
- Os scripts nunca imprimem o token. Nao contornar isso digitando o token direto num comando (apareceria na lista de processos e no historico).
- Nenhum segredo cravado fica na reserva entre um participante e o proximo. A limpeza da secao 5 e obrigatoria depois de CADA uso.
- No fim do evento, em cada reserva: revogar qualquer token que tenha sobrado, remover o MCP (`npm run workshop:setup-mcp -- --remove`), deslogar as contas e conferir com o `doctor` que nada pessoal ficou.
