# Segurança e limpeza

Workshop "Do Figma ao código sem handoff". TDC Florianópolis 2026, 23/07, 10:15 às 11:45. Thiago Xikota e Bruno Bach.

O único dado sensível que circula na sala é o token pessoal do Figma (começa com `figd_`). Esta folha define como ele é tratado e como cada máquina volta ao estado limpo no fim. Regra de ouro: o token é do participante, fica na máquina dele, e some no encerramento.

O fluxo da sala é um só. O token entra em um lugar só (o config local do Claude Desktop):

```
Claude Desktop  ->  Figma Console MCP (npx)  ->  plugin Desktop Bridge  ->  Figma Desktop
```

---

## 1. Regras do token (inegociáveis)

O token do Figma **nunca** passa por:

- Site do workshop, página do QR, ou a URL curta `thiagoxikota.com/tdc`.
- Analytics, telemetria, ou qualquer coleta.
- Parâmetro de URL, formulário, link compartilhado.
- Banco de dados, planilha, ou log de qualquer natureza.
- Projetor, tela principal, ou compartilhamento de tela.
- Mãos dos organizadores. Ninguém do time digita, lê, guarda ou pede o token de um participante.

Complementos:

- **Os scripts não imprimem o token.** `workshop:doctor`, `workshop:check` e o setup do MCP verificam presença e formato (`figd_...`), nunca ecoam o valor. Se um comando for colar output no chat do Claude ou num terminal projetado, ainda assim o segredo não aparece.
- **O token é local.** Ele existe na máquina do participante e na conta Figma dele, e em nenhum outro lugar.
- **Organizadores não usam token pessoal nas máquinas do evento.** A máquina do evento vem com o config preparado SEM token. O participante gera e cola o próprio, e apaga no fim (seção 4).
- **Escopos mínimos** na geração: `file_content:read`, `file_variables:read`, `file_comments:read`, `file_comments:write`. Nada além disso.
- O token do Figma **aparece uma vez só** na tela de geração. Quem perde, gera outro. Não existe recuperação.

---

## 2. Onde o token fica gravado

Um lugar, local, fora deste repositório:

| Sistema | Caminho do config |
|---|---|
| macOS | `~/Library/Application Support/Claude/claude_desktop_config.json` |
| Windows | `%APPDATA%\Claude\claude_desktop_config.json` |

Detalhes que importam pra segurança:

- O token vive dentro desse JSON, no campo `mcpServers.figma-console.env.FIGMA_ACCESS_TOKEN`. É um arquivo de sistema do Claude Desktop, **não faz parte do projeto do workshop** e nunca é versionado. O repositório do workshop não contém, não lê e não sobe esse arquivo.
- O script de setup **faz backup antes de gravar**. Cada execução do merge cria uma cópia ao lado do config, com nome `claude_desktop_config.json.bak-<carimbo-de-tempo>`, na mesma pasta da tabela acima. Esses `.bak-*` podem conter uma versão anterior do config, então entram na limpeza (seção 4).
- Rodar o setup várias vezes gera vários `.bak-*`. É esperado. A limpeza apaga todos.

---

## 3. Antes de tudo isso: por que o encerramento existe

Enquanto o MCP estiver configurado e o token válido, aquela máquina consegue ler os arquivos Figma daquela conta. Na máquina pessoal do participante isso é dele e ele decide. Na **máquina do evento** (compartilhada, reserva, ou emprestada) isso não pode sobrar. O passo a passo abaixo zera as duas situações. Faça na ordem.

---

## 4. Passo a passo de fim (encerramento)

Ordem recomendada: primeiro corte o acesso na origem (revogar o token), depois limpe a máquina.

### 4.1 Revogar o token no Figma (corta o acesso na raiz)

1. Figma > menu do usuário > **Settings** > **Security** > **Personal access tokens**.
2. Localize o token gerado pro workshop e clique em **Revoke** (revogar).
3. Confirme. A partir daí, qualquer cópia daquele token (inclusive as que sobraram em `.bak-*`) fica inútil.

Este é o passo mais importante. Se a pessoa só tiver tempo de fazer um, é este.

### 4.2 Remover a entrada MCP do Claude Desktop

Na pasta do projeto do workshop, no terminal:

```
npm run workshop:setup-mcp -- --remove
```

O que faz: remove **apenas** a entrada `figma-console` do config, preservando qualquer outro servidor MCP que o participante já tivesse. Faz um backup antes de gravar. Depois, feche o Claude Desktop por completo (no macOS é Cmd+Q) e reabra pra ele soltar o MCP.

### 4.3 Remover o plugin Bridge (opcional)

Se quiser deixar o Figma Desktop limpo:

- Figma Desktop > **Plugins** > **Development** > o plugin importado do workshop > **Remove**.
- O caminho auto-empacotado (`~/.figma-console-mcp/plugin/` no macOS, `%USERPROFILE%\.figma-console-mcp\plugin\` no Windows) pode ser apagado se quiser zerar de vez. É opcional: sem token e sem MCP, o plugin sozinho não acessa nada.

### 4.4 Limpar a máquina do evento (obrigatório em máquina compartilhada)

Na máquina do evento, reserva, ou qualquer máquina que não seja pessoal do participante, faça tudo:

1. **Logout do Figma** (menu do usuário > Log out). Na conta, não só no arquivo.
2. **Logout do Claude Desktop** (sair da conta dentro do app).
3. **Apagar os backups `.bak-*`** do config, na pasta da tabela da seção 2. Eles podem guardar um token antigo. Comando de apoio:
   - macOS: apagar `~/Library/Application Support/Claude/claude_desktop_config.json.bak-*`
   - Windows: apagar `%APPDATA%\Claude\claude_desktop_config.json.bak-*`
4. **Restaurar os componentes** do projeto ao estado original:
   ```
   npm run workshop:reset
   ```
   Esse comando restaura só `src/components/` (o Card e o preview). Ele **não toca** em config do Claude, token, nem em nada pessoal. É seguro rodar quantas vezes quiser.
5. Confirmar que a entrada `figma-console` saiu do config (passo 4.2 já fez; `workshop:doctor` confirma sem imprimir segredo).

### 4.5 Sair das contas

- Fechar o Claude Desktop.
- Confirmar que Figma e Claude estão deslogados na máquina do evento.
- Se a máquina for devolvida ou reaproveitada: a pessoa que recebe não encontra token, MCP, nem sessão logada.

### Resumo do encerramento (uma linha por passo)

| # | Ação | Onde | Quem faz |
|---|---|---|---|
| 1 | Revogar o token | Figma > Settings > Security | Participante |
| 2 | `workshop:setup-mcp -- --remove` + reabrir Claude | Terminal do projeto | Participante |
| 3 | Remover plugin Bridge (opcional) | Figma Desktop > Plugins > Development | Participante |
| 4 | Logout Figma e Claude, apagar `.bak-*`, `workshop:reset` | Máquina do evento | Participante e Apoio |
| 5 | Sair das contas, fechar o app | Máquina do evento | Participante e Apoio |

---

## 5. Checklist de véspera (segurança)

Rodar na preparação, antes do dia do workshop. Responsáveis: Apoio 1 (Figma) e Apoio 2 (Claude Desktop e projeto).

**Máquinas do evento e reservas**

- [ ] Config do Claude Desktop preparado **SEM token** em cada máquina (campo `FIGMA_ACCESS_TOKEN` vazio ou placeholder, nunca um token real de organizador).
- [ ] Nenhuma conta Figma pessoal de organizador logada nas máquinas do evento.
- [ ] Nenhuma conta Claude pessoal de organizador logada com histórico sensível nas máquinas do evento.
- [ ] Plugin Bridge pré-importado e testado em cada máquina, com um token descartável só pra validar, **revogado logo após o teste**.
- [ ] Rodar `npm run workshop:doctor` em cada máquina e confirmar que ele diagnostica sem imprimir segredo.
- [ ] Rodar `npm run workshop:reset` pra garantir que os componentes estão no estado inicial.
- [ ] `.bak-*` de testes anteriores apagados das pastas de config.

**Material e projeção**

- [ ] Nenhum slide, tutorial ou página do QR mostra um token real. Só o formato `figd_...` como exemplo.
- [ ] A tela que vai pro projetor não expõe o config com token de ninguém durante a demo.
- [ ] URL curta `thiagoxikota.com/tdc` e o onboarding não coletam, logam nem repassam token (confirmar que a página trata o token só como texto local).

**Fluxo e time**

- [ ] Os 4 operadores sabem: ninguém do time digita, lê ou guarda o token de um participante.
- [ ] Procedimento de encerramento (seção 4) impresso ou aberto pra consulta rápida no fim.
- [ ] Máquinas reserva prontas pra migração em 2 min, também sem token pré-carregado.

---

## 6. Limites honestos

- Revogar o token é o corte real de acesso. Apagar arquivos sem revogar deixa uma janela aberta enquanto o token for válido. Revogue.
- `workshop:reset` e `workshop:setup-mcp -- --remove` cuidam do projeto e do MCP. Eles não deslogam contas nem apagam sessão do navegador. O logout é manual (seção 4.4 e 4.5).
- O token aparece uma vez na geração. Não existe "recuperar depois". Se sumiu, gera outro e revoga o antigo.
