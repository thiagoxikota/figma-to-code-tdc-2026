# Folha operacional dos 4 papéis

Workshop "Do Figma ao código sem handoff". TDC Florianópolis 2026, 23/07, 10:15 às 11:45 (90 min). Thiago Xikota, Bruno Bach e Lourena de Jesus.

Uma página por papel: Thiago (palco), Bruno (demo, técnico coletivo, relógio, contingência), Apoio 1 = Lourena (Figma, circulação e dúvidas da sala), Apoio 2 (Claude Desktop) [SEM PESSOA ALOCADA em 22/07: definir na chegada ou Bruno e Lourena absorvem]. Leia a sua página e a barra comum abaixo antes de a sala abrir.

O fluxo da sala é um só, não ofereça bifurcação de cliente ao participante:

```
Claude Desktop  ->  Figma Console MCP (npx)  ->  plugin Desktop Bridge  ->  Figma Desktop
```

Claude Desktop é o cliente na sala. Claude Code só aparece no kit como alternativa pra casa, nunca como escolha no palco.

---

## Barra comum (vale pros 4)

### Cronograma oficial (conteúdo fecha 11:42, últimos 3 min são margem)

| Horário | Bloco | Min |
|---|---|---|
| 10:15 - 10:18 | Problema e promessa | 3 |
| 10:18 - 10:22 | Como o fluxo funciona | 4 |
| 10:22 - 10:32 | Demo compacta | 10 |
| 10:32 - 10:57 | Setup guiado | 25 |
| 10:57 - 11:20 | Exercício real | 23 |
| 11:20 - 11:30 | Validação, correção e limites | 10 |
| 11:30 - 11:36 | Perguntas | 6 |
| 11:36 - 11:42 | Síntese e encerramento | 6 |
| 11:42 - 11:45 | Margem operacional | 3 |

### Setup guiado em 4 passos: Abrir, Token, Conectar, Ligar e testar (10:32 às 10:57)

1. Abrir (Figma e Claude logados, arquivo da demo duplicado; escolher rota de dispositivo, Linux vai direto pra dupla ou reserva).
2. Token (começa com `figd_`, aparece uma vez, validade de 1 dia).
3. Conectar (config do Claude: salvar, fechar por completo, reabrir).
4. Ligar e testar (plugin Bridge importado do manifest e aberto; Claude lê o frame "Tela demo" e devolve dado específico).

### Checkpoints de relógio do setup (leitura em voz alta é do Bruno)

| Relógio | Minuto do setup | Marca esperada |
|---|---|---|
| 10:37 | 5 | Todos escolheram rota e logaram |
| 10:42 | 10 | Maioria logada e com token |
| 10:47 | 15 | Maioria com Claude configurado |
| 10:51 | 19 | Maioria com Bridge importado |
| 10:54 | 22 | Maioria testou a conexão |
| 10:57 | 25 | A prática começa |

### Regra de corte (DURA, sobrepõe boa vontade)

- Aos 25 min de setup (10:57) a prática começa, mesmo com gente sem terminar. Ninguém segura a sala inteira por casos individuais.
- A partir do minuto 20 do setup (10:52), caso travado migra pra máquina reserva ou pra dupla. Não se investiga problema profundo individual depois desse ponto.
- Quem não terminou o setup acompanha pela dupla, roda o pipeline em casa com o kit, e ainda assim faz o exercício olhando a tela do par.

### Migração pra reserva (padrão, não exceção)

- Duplas são o padrão de bancada. Todo mundo tem um par.
- Linux não roda o fluxo. A página do QR avisa na hora, sem gastar 15 min de setup à toa. Vai direto pra dupla ou pra reserva.
- Reserva 1, 2 e 3 ficam prontas e logadas. Migração de uma pessoa travada leva cerca de 2 min: senta na reserva, o projeto já está buildado, retoma do checkpoint em que estava.
- Gatilho de migração: pessoa no minuto 20 sem passar do checkpoint 3, erro de permissão de instalação, Node ausente, ou máquina que não deixa importar plugin.

### Dispositivos

- Máquina do evento (Windows): vem CRUA. Só Figma, Claude e Node instalados (confirmado com a TI em 16/07, vale pra todas). Sem plugin importado, sem config, sem projeto, sem git, e não há acesso pra provisionar antes. A dupla monta token, config (caminho manual do JSON) e plugin ao vivo, guiada pela onboarding do QR. A vantagem da máquina do evento é só não precisar instalar app.
- Windows próprio: fluxo completo. Precisa permissão de instalar e Node 18+.
- macOS próprio: mesmo fluxo, caminhos do Mac.
- Linux: não roda. Vai pra dupla ou reserva.

### Segurança do token (inviolável, os 4 zelam)

- O token nunca passa pelo site, analytics, URL, banco, material público, projetor, nem pelos organizadores.
- Organizadores não usam token pessoal nas máquinas do evento.
- Os scripts não imprimem token.
- No fim: revogar o token, remover a entrada `figma-console` do `claude_desktop_config.json` na mão, remover o plugin se a pessoa quiser, limpar a máquina do evento e sair das contas.

---

# THIAGO (palco)

Conduz. É a voz e o ritmo da sala. Fica no palco do começo ao fim.

## Responsabilidades

- Conduzir os blocos, manter o ritmo e a energia, fazer as sínteses.
- Ser a referência visível: quando a sala está perdida, é pra ele que olham.
- Traduzir cada checkpoint em uma instrução única e clara, uma coisa de cada vez.
- Decidir na hora entre seguir e acionar contingência, junto com o Bruno.
- Fechar no horário. Conteúdo termina 11:42.

## O que faz em cada bloco

- 10:15 - 10:18 Problema e promessa: abre com a tese. A IA não lê a sua tela, ela lê o que você conseguiu especificar. O resto ela inventa.
- 10:18 - 10:22 Como o fluxo funciona: explica os 4 elos (Claude Desktop, MCP, Bridge, Figma) sem jargão. Um cliente só na sala.
- 10:22 - 10:32 Demo compacta: narra enquanto o Bruno opera. Mostra o Claude lendo o frame de verdade e gerando o componente. Não promete resultado antes de rodar.
- 10:32 - 10:57 Setup guiado: chama os 4 passos do guia (Abrir, Token, Conectar, Ligar e testar) em voz alta, um por vez. Aguarda o Bruno confirmar a maioria antes de avançar. Não desce do palco pra debugar máquina.
- 10:57 - 11:20 Exercício real: dá o start, lê os 6 passos do exercício em ritmo, marca as viradas (ler, gerar, comparar, corrigir, concluir). O preview não é passo do participante: roda só na máquina de palco, se sobrar tempo.
- 11:20 - 11:30 Validação, correção e limites: conduz a leitura das divergências e diz os limites reais. Código gerado não é produção, MCP não substitui design system, arquivo bagunçado gera contexto bagunçado.
- 11:30 - 11:36 Perguntas: modera, corta pergunta que vira consultoria individual.
- 11:36 - 11:42 Síntese e encerramento: fecha a tese, aponta o kit pra casa, agradece.

## Sinais de acionar contingência

- Bruno sinaliza que a maioria não bateu um checkpoint no relógio: Thiago segura o discurso e dá mais um respiro curto, ou manda seguir com quem está pronto.
- Demo trava ao vivo: Thiago narra o que era pra acontecer e o Bruno traz o fallback pré-gerado, dito como fallback, nunca como se fosse ao vivo.
- Rede ou login caindo em massa: Thiago anuncia o fallback coletivo (a sala especifica junto no Claude, exercício sem MCP) e o pipeline completo fica pra casa com o kit.

## O que NÃO faz

- Não sai do palco pra resolver problema individual de máquina. Isso é do Bruno e dos apoios.
- Não abre o segundo cliente nem oferece bifurcação (Claude Code) pra sala.
- Não estica bloco pra salvar caso perdido. Aos 25 min a prática começa.
- Não promete que o código sai pronto pra produção.
- Não toca em token de ninguém.

---

# BRUNO (demo, técnico coletivo, relógio, contingência)

Opera a demo, resolve o que é coletivo, guarda o relógio e puxa a contingência. É o par técnico do palco.

## Responsabilidades

- Operar a demo compacta enquanto o Thiago narra.
- Resolver problema técnico coletivo (o que afeta muita gente ao mesmo tempo), não caso a caso.
- Guardar o relógio: ler os checkpoints e avisar o Thiago quando a marca não bateu.
- Acionar contingência e fallback.
- Validar as três coisas que provam que funcionou: conexão viva, componente gerado a partir do frame, e a comparação feita contra os valores relidos.

## O que faz em cada bloco

- 10:15 - 10:22 Problema, promessa e fluxo: deixa a demo carregada e o arquivo Figma aberto, plugin rodando. Confere a Bridge conectada antes de o Thiago chamar.
- 10:22 - 10:32 Demo compacta: opera. Verifica o status da conexão com o Figma, pede pro Claude ler o frame "Tela demo" e mostra dado específico voltando. Se travar, entra o fallback pré-gerado, dito como fallback.
- 10:32 - 10:57 Setup guiado: cronometra. Lê os checkpoints de relógio (10:37, 10:42, 10:47, 10:51, 10:54, 10:57) e avisa o Thiago da marca. Coordena os apoios sobre onde estão os gargalos. Decide migrações pra reserva a partir do minuto 20.
- 10:57 - 11:20 Exercício real: circula validando os 3 sinais em bancadas de amostra. Conexão viva, componente gerado a partir do frame, e a dupla comparando o código com os valores relidos. Na sala ninguém instala projeto. O preview roda só na máquina de palco, e só se sobrar tempo.
- 11:20 - 11:30 Validação, correção e limites: confirma que as duplas inspecionaram as 3 propriedades e corrigiram as que divergiam consultando o frame de novo (pode não haver divergência nenhuma, e tá certo assim).
- 11:30 - 11:42 Perguntas e encerramento: apoia respostas técnicas, coordena o desligamento (revogar token, remover MCP, limpar máquinas do evento).

## Sinais de acionar contingência

- Checkpoint de relógio não bateu na maioria: avisa o Thiago para segurar ou seguir, e realoca apoio pro gargalo.
- Demo travando: corta pro fallback pré-gerado na hora, sem tentar consertar ao vivo.
- Falha de rede ou login em massa (muitos participantes ao mesmo tempo): declara o fallback coletivo, exercício sem MCP no Claude, pipeline completo pra casa.
- Fila de casos individuais crescendo: manda migrar pra reserva ou dupla, não deixa virar suporte 1 a 1.

## O que NÃO faz

- Não vira suporte individual travando o relógio. Caso profundo migra, não se investiga na sala.
- Não deixa o fallback pré-gerado passar por ao vivo. Sempre nomeia como fallback.
- Não segura a sala além dos 25 min de setup.
- Não usa token pessoal de participante nas máquinas do evento.
- Não imprime nem projeta token.

---

# APOIO 1 (Figma, token, arquivo, permissões, plugin, frame)

Cuida de tudo do lado do Figma. É quem destrava acesso, token, plugin e o arquivo.

## Responsabilidades

- Login no Figma e permissões de conta.
- Geração e higiene do token (`figd_`, escopos, uma exibição só).
- Arquivo Figma correto aberto (o público duplicável pros participantes).
- Import e vida do plugin Desktop Bridge.
- Garantir que o frame "Tela demo" está acessível e legível pela Bridge.

## O que faz em cada bloco

- 10:15 - 10:32 Antes e durante a abertura: confirma o arquivo público duplicável no ar (`figma.com/community/file/1659374868260259462`), plugin da máquina de demo importado e rodando, Bridge conectada.
- 10:32 - 10:57 Setup guiado, foco nos checkpoints 1, 2 e 4:
  - Checkpoint 1 acesso: ajuda quem não loga no Figma, roteia Linux pra dupla ou reserva na hora.
  - Checkpoint 2 token: guia Figma > Settings > Security > Personal access tokens > Generate. Escopos de leitura de conteúdo, variáveis e comentários. Lembra que aparece uma vez, copiar na hora.
  - Checkpoint 4 plugin: guia o import via Figma Desktop > Plugins > Development > Import plugin from manifest, apontando pro `manifest.json` em `~/.figma-console-mcp/plugin/` (Windows `%USERPROFILE%\.figma-console-mcp\plugin\`). Lembra de rodar o plugin e deixar aberto.
- 10:57 - 11:20 Exercício real: garante que cada dupla enxerga o frame "Tela demo" e consegue relê-lo na hora de comparar e corrigir.
- 11:20 - 11:30 Validação: apoia a leitura das divergências do lado do Figma (o que o frame realmente diz).
- 11:30 - 11:42 Encerramento: conduz a revogação de token e a remoção do plugin de quem quiser limpar.

## Sinais de acionar contingência

- Pasta `~/.figma-console-mcp/plugin/` não existe: o Claude não subiu com o config salvo ainda. Manda salvar o config e reabrir o Claude antes de tentar importar.
- Token não aparece com prefixo `figd_` ou some antes de copiar: gera de novo, sem improviso.
- Muita gente presa no login do Figma: avisa o Bruno, encaminha pra dupla.
- Máquina no Linux: não perde tempo, roteia pra reserva.

## O que NÃO faz

- Não coleta, anota, projeta nem digita o token de participante em lugar público. Token é local e da pessoa.
- Não usa token pessoal nas máquinas do evento.
- Não instala o plugin baixando ZIP do GitHub. O caminho atual é importar do manifest auto-empacotado.
- Não investiga caso individual profundo depois do minuto 20. Migra.

---

# APOIO 2 (Claude Desktop, config MCP, Node, JSON, reinício)

Cuida de tudo do lado do Claude e da máquina. É quem faz o MCP subir. Não cuida de projeto local nem de preview: na sala ninguém instala projeto.

## Responsabilidades

- Login no Claude Desktop.
- Edição segura do `claude_desktop_config.json` (merge, sem quebrar o que já existe).
- Node 18+ presente e permissões de instalação.
- Fechar e reabrir o Claude por completo depois de salvar o config.
- Reconhecer que projeto local e preview NÃO fazem parte da bancada do participante. Quem perguntar por terminal, redireciona pro kit de casa.

## O que faz em cada bloco

- 10:15 - 10:32 Antes e durante a abertura: confere a máquina de demo com Claude Desktop configurado e MCP `figma-console` carregado.
- 10:32 - 10:57 Setup guiado, foco nos checkpoints 3 e 5:
  - Checkpoint 3 config: guia o merge no `claude_desktop_config.json` (Windows `%APPDATA%\Claude\`, macOS `~/Library/Application Support/Claude/`). Entrada `mcpServers.figma-console` com `command` npx, `args` `["-y","figma-console-mcp@1.35.0"]`, env `FIGMA_ACCESS_TOKEN` e `ENABLE_MCP_APPS` `"true"`. Versão fixada, sem `@latest`. A máquina do participante vem crua e não tem o projeto, então o caminho é copiar o bloco pronto da onboarding e colar no JSON. O script de merge só existe pra quem já baixou o kit, em casa.
  - Depois do config: manda fechar o Claude por completo (no Mac Cmd+Q) e reabrir. O MCP só carrega no boot.
  - Checkpoint 5 teste real: no Claude, conversa nova, "Verifique o status da conexão com o Figma". Depois pede pra LER o frame "Tela demo" e conferir dado específico voltando. MCP na lista não é sucesso.
- 10:57 - 11:20 Exercício real: garante que cada dupla tem conexão viva e conseguiu gerar. Destrava Claude travado, MCP que caiu e plugin desconectado. Nada de terminal.
- 11:20 - 11:30 Validação: confirma que a dupla pediu a fonte de cada valor relendo o frame e que a correção bate com o frame.
- 11:30 - 11:42 Encerramento: conduz a remoção da entrada `figma-console` do config na mão e a limpeza das máquinas do evento.

## Sinais de acionar contingência

- JSON quebrado ou config não carrega: usa o script de merge em vez de editar na mão. Se persistir, migra pra reserva.
- MCP não aparece depois de reabrir: confirma que o Claude foi fechado por completo, não só a janela. Reabre.
- Node ausente ou versão abaixo de 18, ou sem permissão de instalar: é gatilho de migração pra reserva, não de instalar na marra.
- Preview não sobe (porta, build): usa a máquina reserva com o projeto já buildado.

## O que NÃO faz

- Não cola token de participante em canal público nem deixa script imprimir token.
- Não roda `@latest`. A versão do workshop é `figma-console-mcp@1.35.0`, fixada.
- Não oferece Claude Code como escolha na sala. Isso é só kit de casa.
- Não gasta o setup inteiro num JSON de uma pessoa depois do minuto 20. Migra.
