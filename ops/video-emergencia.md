# Video de emergencia (plano C do fluxo real)

Gravar ate 21/07. Serve pra quando a internet cair de vez ou a bridge morrer duas vezes: o Thiago narra por cima do video em vez de fingir que o pipeline rodou ao vivo. Tres copias: disco local, pendrive, link nao listado (preencher em `video/LINK.md`).

## Formato

- 1920x1080, 60fps, H.264, 8 a 10 min.
- Capitulos por beat (marcador no arquivo), com um frame congelado no fim de cada beat pra dar tempo de narrar.
- Terminal e Claude Desktop em fonte grande (o mesmo tamanho do palco). Cursor visivel.
- Sem audio de narracao no arquivo: o Thiago narra ao vivo. Se quiser, uma trilha de legenda por beat.
- Gravar na MESMA maquina e no MESMO estado do dia (versoes travadas, arquivo Figma congelado).

## Roteiro de captura (beat a beat)

NOTA 22/07: o vídeo NÃO foi gravado (ver `video/LINK.md`); o plano C do dia são os prebaked no telão. O roteiro abaixo vale se ainda houver gravação; os beats 5 a 7 usam os 3 pares canônicos de `outputs-prebaked/05c-diff-callout.md` (só código lado a lado; nenhum comando de validação, decisão do dono 23/07).

1. Abertura (20s). Tela dividida: o card no Figma e o card implementado, o botao denunciando a diferenca (16 no Figma, 14 no codigo). Congela.
2. Arquitetura (30s). Passa o mouse pelo diagrama: Figma Desktop, Bridge, MCP, Claude Desktop. Congela.
3. Conexao (40s). No Claude Desktop: "Verifique o status da conexao com o Figma". Mostra a resposta conectado via WebSocket Bridge, com o nome do arquivo. Congela na resposta.
4. Leitura do frame (60s). Cola o prompt de leitura. O Claude devolve a arvore de camadas, os componentes e os tokens do frame "Tela demo". Congela mostrando que ele leu estrutura, nao pixels.
5. Take A, sem o Figma (60s). Sessao isolada, sem MCP. Cola o prompt raso. Sai um card competente no codigo (estado, tipo, aria) mas com cor, espacamento e tipografia inventados. Congela no resultado.
6. Take B, com o Figma via MCP (75s). Sessao nova. Mesmo pedido, so acrescentando ler o frame via MCP. Sai fiel: cor da marca, grid, tipografia do produto, tudo puxado do arquivo. Congela lado a lado com o Take A.
7. Validacao objetiva (45s). `npm run workshop:check` nos dois. O Take A falha na checagem de token (hex cru), o Take B passa (so variavel). Congela no output do comando.
8. Auditoria (60s). Prompt de auditoria no frame com os 6 defeitos plantados. Mostra a IA achando parte deles, honesto sobre quantos pega. Congela na lista.
9. Correcao (45s). Escolhe uma falha, pede pro Claude consultar o frame de novo e corrigir so ela. Congela no diff.
10. Fecho (20s). Volta pro card do comeco: com o agente lendo o Figma, o 16 tem muito menos chance de virar 14. Congela.

## Regras

- Nunca cortar de um jeito que sugira que algo instantaneo era lento, nem o contrario. E documental, nao propaganda.
- Se um beat depender de rede e a captura vier lenta, gravar assim mesmo e cortar so o tempo morto, mantendo o resultado real.
- Guardar o projeto e o arquivo Figma no exato estado do video, pra reproducao bater.
