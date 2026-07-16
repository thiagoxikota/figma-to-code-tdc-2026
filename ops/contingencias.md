# Contingências da sala

Folha de operação para os 4 operadores. Cada cenário tem sintoma, ação passo a passo e o gatilho de migração para dupla ou máquina reserva. Fonte técnica única: `docs/pipeline-facts.md`. Não improvisar pacote, comando, caminho ou prompt fora do que está lá.

Princípio que sobrepõe tudo: nunca fingir que a geração ao vivo funcionou. Se o pipeline não rodou na máquina do participante, diga que não rodou e siga pelo caminho local (prebaked, vídeo, auditoria). Honestidade vale mais que a demo bonita.

---

## Regra de corte (colar na cabeça antes de tudo)

- **Setup dura 25 min.** Aos 25 min a prática começa, com gente sem terminar. Ninguém segura a sala inteira por um caso individual.
- **A partir do minuto 20 do setup**, qualquer caso travado migra para reserva ou dupla. Não se investiga problema profundo de uma máquina depois do minuto 20. Migração de reserva leva 2 min.
- **Bruno guarda o relógio e aciona a contingência.** Thiago não sai do palco. Apoio 1 e Apoio 2 vão até a máquina.
- Checkpoints de relógio: min 5 rota escolhida e login feito; min 10 login e token; min 15 Claude configurado; min 19 Bridge; min 22 teste real; min 25 prática.

## Quem resolve o quê

- **Apoio 1 (Figma):** token, arquivo Figma, permissões, plugin Bridge, frame "Tela demo".
- **Apoio 2 (Claude e ambiente):** Claude Desktop, config do MCP, Node, JSON, reinício, projeto local, servidor de preview.
- **Bruno:** relógio, demo, contingência coletiva, validação de conexão e geração.
- **Thiago:** palco, ritmo, síntese. Não desce para caso individual.

---

## 1. Claude Desktop não reconhece o MCP

**Sintoma.** O `figma-console` não aparece na lista de ferramentas do Claude Desktop, ou aparece mas o teste de status não responde nada útil.

**Ação (Apoio 2).**
1. Rodar `npm run workshop:doctor`. Ele diz se o JSON está válido, se a entrada `figma-console` existe e se o Node serve.
2. Confirmar o arquivo certo (não criar um segundo). Windows: `%APPDATA%\Claude\claude_desktop_config.json`. macOS: `~/Library/Application Support/Claude/claude_desktop_config.json`.
3. Validar o JSON: chave `mcpServers.figma-console`, `command` igual a `npx`, `args` iguais a `["-y","figma-console-mcp@1.35.0"]`, `env` com `FIGMA_ACCESS_TOKEN` e `ENABLE_MCP_APPS` como `"true"`. Vírgula sobrando ou aspas quebradas derrubam tudo. Em vez de editar na mão, rodar `npm run workshop:setup-mcp` (merge idempotente e seguro).
4. Fechamento completo. No macOS é Cmd+Q, não fechar a janela. No Windows, sair pela bandeja, não só o X. O MCP só carrega no boot do app.
5. Reabrir o Claude Desktop e abrir uma conversa nova.
6. Testar de novo: "Verifique o status da conexão com o Figma".

**Migrar quando.** Passou do minuto 20 e o `workshop:doctor` ainda acusa erro, ou o config foi refeito uma vez e não subiu. Vai para dupla com quem já configurou, ou para máquina reserva.

---

## 2. Desktop Bridge não conecta

**Sintoma.** O MCP responde, mas o status diz que não há Bridge conectada, ou o Claude não consegue ler o frame.

**Ação (Apoio 1).**
1. Figma **Desktop** aberto (não o navegador). O Bridge só fala com o app.
2. Arquivo aberto: a cópia do "Tela demo" que o participante duplicou da comunidade.
3. Plugin certo e ativo. Import via Figma Desktop > Plugins > Development > Import plugin from manifest, apontando para `~/.figma-console-mcp/plugin/manifest.json` (Windows: `%USERPROFILE%\.figma-console-mcp\plugin\manifest.json`). Rodar o plugin e deixar a janela dele aberta enquanto usa.
4. Se a pasta do plugin não existir: o config do Claude ainda não subiu uma vez. Salvar o config, reabrir o Claude, depois importar o plugin.
5. Reiniciar em ordem crescente de esforço: reiniciar o plugin (fechar e rodar de novo), depois reiniciar o Figma Desktop, depois pedir ao Claude "reconecte com o Figma". O plugin varre as portas 9223 a 9232 e reconecta sozinho.
6. Confirmar leitura de verdade: pedir para ler o frame "Tela demo" e conferir que volta dado específico (título "Criar sua conta", campos, botão). MCP na lista não é sucesso.

**Migrar quando.** Reiniciou plugin e Figma uma vez cada e a Bridge não sobe, ou passou do minuto 20. Dupla ou reserva.

---

## 3. Node não funciona

**Sintoma.** `npx` falha, o MCP não sobe, ou o `workshop:start` não roda. Mensagem tipo "command not found" ou versão antiga.

**Ação (Apoio 2).**
1. Rodar `npm run workshop:doctor`. Ele checa a versão do Node (mínimo 18) e o PATH.
2. Se o doctor diz que o Node não está no PATH: fechar o terminal e abrir um novo. Instalador de Node costuma só valer em terminal novo.
3. Conferir a versão: `node -v` tem que ser 18 ou maior.
4. Se instalou agora e ainda não pega: reabrir o terminal de novo, e no Windows reabrir também o Claude Desktop para ele herdar o PATH atualizado.

**Migrar quando.** Node não instalado e sem permissão de instalar na máquina, ou passou do minuto 20. Reserva já vem com Node pronto. Máquina do evento também.

---

## 4. Token inválido

**Sintoma.** O MCP sobe mas o Figma recusa. Erro de autenticação, ou o status volta sem o nome do arquivo.

**Ação (Apoio 1).**
1. Conferir o prefixo: o token começa com `figd_`. Se não começa, é o token errado.
2. Conferir que não entrou espaço, quebra de linha ou aspa extra ao colar dentro do JSON.
3. Se ainda recusa, gerar um novo: Figma > Settings > Security > Personal access tokens > Generate new token. Escopos de conteúdo, variáveis e comentários. Ele aparece uma vez só, copiar na hora.
4. Colar o token novo no config (rodar `workshop:setup-mcp` de novo ou editar a chave `FIGMA_ACCESS_TOKEN`), salvar, fechar e reabrir o Claude.
5. O token é local. Nunca colar em chat público, projetor, URL, formulário ou mandar para os organizadores. Ninguém usa token pessoal nas máquinas do evento.

**Migrar quando.** Gerou token novo uma vez e ainda recusa, ou passou do minuto 20. Dupla com quem já está lendo o frame.

---

## 5. Internet lenta

**Sintoma.** Login demora, `npx` arrasta baixando o pacote, a geração no Claude fica travada.

**Ação (Bruno + apoios).**
1. Lembrar a sala: quase tudo é local. O preview (`npm run workshop:start`), a auditoria do frame e o projeto já baixado não dependem da rede.
2. Se o `npx` está lento, ele só baixa o pacote uma vez. Nas máquinas do evento e nas reserva o pacote já está em cache.
3. Se a geração no Claude está lenta, seguir com os outputs prebaked de `outputs-prebaked/` para não travar o ritmo, deixando claro que é material pré-gerado, não ao vivo.
4. Se a demo do palco engasgar, cair para o vídeo de emergência (ver `ops/video-emergencia.md`).

**Migrar quando.** Não precisa migrar máquina, precisa migrar de modo. A prática continua na parte local (preview, comparação, correção).

---

## 6. Internet indisponível

**Sintoma.** Rede caiu para todo mundo ou para boa parte da sala. Login e geração ao vivo fora do ar.

**Ação (Bruno assume o coletivo, Thiago mantém o palco).**
1. Demo do palco vai pela **gravada** (`ops/video-emergencia.md`), anunciando que é gravação, não ao vivo.
2. O onboarding do QR funciona offline via `file://` (abrir o `onboarding/index.html` local). Não depende da URL curta nem da rede.
3. O projeto roda local: `npm run workshop:start` sobe o preview sem internet.
4. A auditoria do frame vira coletiva a partir dos outputs prebaked de `outputs-prebaked/`, ditos em voz alta e comparados na tela. Deixar explícito que é material pré-gerado.
5. O exercício da sala passa a ser: abrir o preview local, comparar com a imagem do frame, achar as divergências e corrigir uma no código. Sem depender de MCP.

**Migrar quando.** Não é migração de máquina, é queda para o plano offline inteiro. Nunca dizer que a geração ao vivo aconteceu se ela não aconteceu.

---

## 7. Rate limit do Claude

**Sintoma.** O Claude Desktop avisa que atingiu o limite de uso, ou passa a recusar novas gerações.

**Ação (Bruno + Apoio 2).**
1. Juntar em dupla: quem bateu o limite passa a acompanhar a máquina de quem ainda tem cota.
2. Reduzir o número de gerações por participante. Uma geração boa vale mais que três apressadas.
3. Se muita gente bateu ao mesmo tempo, fazer uma **correção coletiva** no palco: uma geração e uma correção conduzidas por Bruno, a sala acompanha e aplica.
4. Reforçar que os outputs prebaked cobrem quem ficou sem cota, ditos como pré-gerados.

**Migrar quando.** Rate limit é migração de fluxo, não de máquina. Cai para dupla e para a correção coletiva. Ninguém fica parado esperando a cota voltar.

---

## 8. Login bloqueado

**Sintoma.** Não consegue entrar no Figma ou no Claude Desktop. Verificação de dispositivo, 2FA sem o celular, conta corporativa travada, e-mail sem acesso na hora.

**Ação (Apoio 1 para Figma, Apoio 2 para Claude).**
1. Uma tentativa rápida pelo caminho normal (reenviar código, tentar outro método de login).
2. Se não resolve em pouco tempo, não insistir. Login corporativo e 2FA sem device não se resolvem no meio da sala.
3. Encaixar em dupla com alguém que já está logado, ou levar para máquina reserva, que já vem com contas prontas.

**Migrar quando.** Não entrou na primeira tentativa rápida, ou passou do minuto 20. Dupla ou reserva na hora, sem investigar a fundo.

---

## 9. Linux

**Sintoma.** Participante em Linux. O fluxo Claude Desktop mais Bridge não roda no Linux.

**Ação (a página do onboarding já avisa na hora da escolha de rota).**
1. Não deixar o participante gastar 15 min de setup à toa. O aviso aparece assim que ele marca Linux.
2. Encaminhar direto para dupla com alguém em Windows ou macOS, ou para máquina reserva.
3. Fazer isso **no começo**, no checkpoint de rota (min 5), não no fim do setup.

**Migrar quando.** Desde o início. Linux é dupla ou reserva por padrão, não é um caso a depurar.

---

## Encerramento seguro (últimos minutos)

Fechar sem deixar rastro de credencial:
1. Revogar o token: Figma > Settings > Security > Personal access tokens > revoke.
2. Remover o MCP do config: `npm run workshop:setup-mcp -- --remove`.
3. Remover o plugin Bridge do Figma, se quiser.
4. Restaurar o projeto: `npm run workshop:reset` (volta os componentes, não toca em credencial).
5. Na máquina do evento e nas reserva: limpar config, sair das contas de Figma e Claude, remover o token.

Os scripts não imprimem token. Ninguém leva token pessoal embora numa máquina do evento.
