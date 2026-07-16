#!/bin/bash
# setup-figma-mcp.command - macOS
# Duplo-clique no Finder. Pede o token do Figma escondido e chama o merge seguro.
# O token nunca aparece na tela, nunca vai pro argv, nunca e logado.

set -euo pipefail
cd "$(dirname "$0")"

echo "Setup do Figma Console MCP (macOS)"
echo ""

if ! command -v node >/dev/null 2>&1; then
  echo "Node.js nao encontrado. Instale Node 18+ (nodejs.org) e reabra o Terminal."
  exit 1
fi
echo "Node: $(node -v)"

printf "Cole seu token do Figma (figd_...) e Enter (nao aparece na tela): "
read -rs FIGMA_ACCESS_TOKEN
echo ""

case "$FIGMA_ACCESS_TOKEN" in
  figd_*) : ;;
  *) echo "O token precisa comecar com figd_. Gere de novo no Figma e tente outra vez."; exit 1 ;;
esac

export FIGMA_ACCESS_TOKEN
node mcp-config.mjs
unset FIGMA_ACCESS_TOKEN

echo ""
echo "Pronto. Agora FECHE o Claude Desktop por completo (Cmd+Q) e abra de novo."
