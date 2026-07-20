# Do Figma ao código sem handoff

Kit do workshop apresentado no The Developer's Conference Florianópolis 2026 (23/07, 10:15 às 11:45), por Thiago Xikota e Bruno Bach, com The AI Collective Florianópolis, Friends of Figma Florianópolis e Designers no Boteco.

A tese em uma frase: a IA não lê a sua tela, ela lê o que você conseguiu especificar. O resto ela inventa. O jeito de provar isso não é falar sobre, é ligar o pipeline de verdade e ver o output mudar.

## O que muda nesta versão

A sala agora faz o pipeline completo com MCP, ao vivo, cada dupla na própria máquina. Não é mais só assistir a demo e especificar no navegador. Você instala a ponte, conecta o Claude ao seu Figma, lê um frame real, gera um componente, compara com o Figma e corrige uma falha.

O exercício antigo (o par raso vs especificado, sem MCP, no Claude do navegador) continua existindo, mas só como rede de segurança e treino de casa. Ele não é mais a atividade principal da sala.

## O fluxo (a arquitetura única da sala)

```
Claude Desktop
      ↓  (MCP, via npx local)
Figma Console MCP  (figma-console-mcp)
      ↓  (ponte por WebSocket local)
Plugin Desktop Bridge  (~/.figma-console-mcp/plugin)
      ↓
Figma Desktop  (arquivo aberto, plugin rodando)
```

O cliente na sala é o Claude Desktop, um caminho só, sem bifurcação. O Claude Code roda o mesmo MCP e fica no kit como alternativa para casa, nunca oferecido como escolha no meio da sala. Um caminho só reduz erro coletivo.

A fonte técnica de tudo (pacote, versão, comandos, caminhos, prompt de teste) é `docs/pipeline-facts.md`. Se algum material divergir dela, o material está errado.

## O que você faz na sala

Duas partes, com o relógio junto.

### Setup guiado (25 min, 5 checkpoints)

1. **Acesso e login.** Entrar no Figma e no Claude Desktop, escolher a rota do seu dispositivo na página do QR. Linux não roda esse fluxo, então vai direto para dupla ou máquina reserva, sem perder 15 minutos à toa.
2. **Token do Figma.** Gerar um token pessoal local (começa com `figd_`). Aparece uma vez só, copie na hora. Ele nunca sai da sua máquina.
3. **Config do Claude Desktop.** Adicionar o servidor `figma-console` no arquivo de config, salvar, fechar o Claude por completo e reabrir. O MCP só carrega no boot.
4. **Plugin Desktop Bridge.** Importar o plugin auto-empacotado pelo MCP, rodar e deixar aberto.
5. **Teste real.** No Claude, pedir o status da conexão e depois pedir para ele ler o frame `Tela demo`. Sucesso é ver dado específico do arquivo voltar, não o MCP aparecer numa lista.

Regra de corte dura: aos 25 minutos a prática começa, mesmo com gente sem terminar. A partir do minuto 20 do setup, caso travado migra para dupla ou reserva (migração em 2 minutos), sem investigar problema profundo individual no meio da sala.

### Exercício real (23 min)

1. **Ler o frame** pelo MCP (3 min).
2. **Gerar o componente** a partir da estrutura do Figma, não de um print (6 min).
3. **Inspecionar 3 propriedades** você mesmo, no bloco de código da conversa, contra os valores relidos do frame (5 min).
4. **Corrigir**, se houver o que corrigir, consultando o frame de novo (5 min).
5. **Revogar o token** no Figma. Não é opcional e não tem corte (4 min).

O alvo é um card pequeno. Sem backend, sem banco, sem auth, sem API externa.

**Na sala ninguém instala projeto.** O exercício inteiro roda dentro do Claude, sem terminal, porque a máquina do evento vem crua e 40 `npm install` dentro de 23 minutos é bomba-relógio. Ver rodando é o passo seguinte: acontece no telão da máquina de palco, se sobrar tempo, e em casa pelo kit.

## Como reproduzir em casa

O pipeline é o mesmo, só que no seu ritmo, sem o corte de relógio da sala. Passo a passo completo, com o troubleshooting de quando dá errado, em `kit/setup-10min.md`. A referência técnica congelada está em `docs/pipeline-facts.md`.

Resumo do setup:

1. **Node 18 ou mais novo** instalado.
2. **Token do Figma** em Figma > Settings > Security > Personal access tokens. Escopos de leitura de conteúdo, variáveis e comentários. Copie na hora, ele aparece uma vez.
3. **Config do Claude Desktop.** Edite o arquivo de config e adicione o servidor:

   - Windows: `%APPDATA%\Claude\claude_desktop_config.json`
   - macOS: `~/Library/Application Support/Claude/claude_desktop_config.json`

   ```json
   {
     "mcpServers": {
       "figma-console": {
         "command": "npx",
         "args": ["-y", "figma-console-mcp@1.35.0"],
         "env": {
           "FIGMA_ACCESS_TOKEN": "figd_SEU_TOKEN_AQUI",
           "ENABLE_MCP_APPS": "true"
         }
       }
     }
   }
   ```

   No macOS e no Windows dá para deixar esse merge no automático com `npm run workshop:setup-mcp` (ele preserva os outros servidores que já existirem). Depois de salvar, **feche o Claude Desktop por completo e reabra**.

4. **Plugin Desktop Bridge.** Na 1.35.0 o plugin é auto-empacotado pelo próprio MCP num caminho estável (por isso reabra o Claude antes, senão a pasta pode ainda não existir):

   - macOS: `~/.figma-console-mcp/plugin/manifest.json`
   - Windows: `%USERPROFILE%\.figma-console-mcp\plugin\manifest.json`

   Importe por Figma Desktop > Plugins > Development > Import plugin from manifest, aponte para o `manifest.json` acima, rode o plugin e deixe ativo. Não é mais baixar ZIP do GitHub.

5. **Teste.** No Claude, conversa nova: "Verifique o status da conexão com o Figma". Depois peça para ele ler o frame `Tela demo` e confira que voltou dado específico do arquivo.

Prefere Claude Code? O mesmo MCP roda lá:

```
claude mcp add figma-console -s user -e FIGMA_ACCESS_TOKEN=figd_... -e ENABLE_MCP_APPS=true -- npx -y figma-console-mcp@1.35.0
```

## Comandos do kit

```
npm run workshop:start       Sobe o preview (Vite) pra ver o componente gerado
npm run workshop:setup-mcp   Merge idempotente do servidor no config do Claude Desktop
npm run workshop:setup-mcp -- --remove   Remove o servidor do config
npm run workshop:check       Typecheck + checagem de token/tokens
npm run workshop:doctor      Diagnóstico do ambiente (Node, config, ponte)
npm run workshop:reset       Restaura os componentes do exercício (não toca credencial)
npm run validate:workshop    Validação usada no CI do kit
```

Os scripts de setup por sistema operacional estão em `scripts/setup-figma-mcp.command` (macOS) e `scripts/setup-figma-mcp.ps1` (Windows). Nenhum script imprime o token.

## Mapa dos arquivos

```
docs/pipeline-facts.md   Fonte técnica única (pacote, versão, caminhos, prompt de teste). Leia primeiro.
onboarding/index.html    Assistente do QR: roteia por dispositivo, guia os 5 checkpoints, ajuda e prática
scripts/                 mcp-config.mjs (merge do config), setup por SO, doctor.mjs, reset.mjs, check-tokens.mjs
ops/                     Runbook da sala: papéis dos 4 operadores, cronograma minuto a minuto, contingência, teardown
prompts/prompts.md       Os 10 prompts do pipeline com MCP, prontos pra copiar
prompts/standalone.md    Fallback sem MCP (par raso vs especificado, Claude no navegador). Não é o exercício da sala
outputs-prebaked/        Outputs de referência dos ensaios, rede de segurança da demo ao vivo
kit/setup-10min.md       Setup completo pra rodar em casa, com troubleshooting
kit/cartao-de-bancada.md Aposentado (16/07): nada é impresso; o conteúdo vive nos slides e na onboarding
kit/feedback-form.md     As 3 perguntas de feedback
src/tokens.css           A fonte de verdade dos tokens do mini design system
src/components/          Card gerado (Card.tsx, Card.css) e a versão rasa de comparação
qr/                      QR do kit (SVG e PNG) apontando pra URL curta do onboarding
slides/                  deck.html e deck.pdf do palco
video/LINK.md            Vídeo de emergência (plano C, gravação separada)
dist/                    Build estático do preview: abre sem instalar nada
```

URL curta do onboarding (placeholder até confirmar o host): `thiagoxikota.com/tdc`.

## Arquivo Figma da demo

Arquivo público, duplicável na Community: https://www.figma.com/community/file/1659374868260259462

Duplique para a sua conta e rode os prompts contra ele. É o mesmo arquivo da demo do palco: um mini design system com tokens e uma tela `Tela demo` com seis inconsistências plantadas (fill cru fora do componente, input com estilo divergente, caption de baixo contraste, entre outras). O detalhamento dos defeitos está em `outputs-prebaked/04-auditoria.md`.

## Fallback e treino de casa (sem MCP)

Se a rede ou o login travar em massa na sala, a gente roda o par raso vs especificado de `prompts/standalone.md` junto, no telão, no Claude do navegador, pra ninguém ficar parado. O mesmo material serve pra você treinar sozinho em casa a competência de escrever a especificação.

Seja honesto sobre o limite desse fallback: ele não é "do Figma ao código". Não tem arquivo de Figma sendo lido. O contexto que no pipeline real vem do frame, ali você digita na mão dentro do prompt. É um simulador da metade da especificação, não o pipeline inteiro.

## Honestidade sobre o setup

Instalar MCP no meio de uma sala cheia dá trabalho e vai travar em algumas máquinas. É por isso que existe corte de relógio, dupla como padrão, máquinas reserva e o fallback acima. A promessa não é que roda liso em 100 por cento das mãos, é que quem conectar sai tendo feito o pipeline de verdade, e quem não conectar vê acontecendo e leva o kit pra rodar em casa.

Os limites reais, ditos sem maquiar:

- Código gerado por IA não é código de produção. É ponto de partida, o dev depois se vira.
- O MCP não substitui design system. Ele lê o que existe. Arquivo bagunçado gera contexto bagunçado e output bagunçado.
- Nada de fingir ao vivo: se um passo usar um output pré-gerado dos ensaios, isso é dito na hora, não vendido como geração ao vivo.

## Segurança do token

O token é seu e é local. Ele nunca passa pelo site do workshop, por analytics, por URL, por banco, por material público, pelo projetor nem pelos organizadores. Os scripts não imprimem token, e as máquinas do evento não usam token pessoal de organizador.

No fim, se quiser deixar a máquina limpa: revogue o token no Figma, rode `npm run workshop:setup-mcp -- --remove` pra tirar o servidor do config, remova o plugin se quiser e saia das contas. Na máquina do evento isso faz parte do teardown.

## Licença

MIT. Use, adapte, ensine.

O método por trás do workshop vem da pesquisa sobre convergência estrutural e letramento de especificação (AIMEDIA 2026, IARIA). A conversa continua na newsletter Notas de Produto e em [thiagoxikota.com](https://thiagoxikota.com). Levo esse método pra times de produto. Se fizer sentido pro seu, fala comigo por lá.
