# setup-figma-mcp.ps1 - Windows
# Pede o token do Figma num campo escondido e chama o merge seguro (mcp-config.mjs).
# O token nunca aparece na tela, nunca vai pro argv, nunca e logado.
# Uso: clicar com o botao direito > Run with PowerShell, ou:  powershell -ExecutionPolicy Bypass -File setup-figma-mcp.ps1

$ErrorActionPreference = 'Stop'
Write-Host 'Setup do Figma Console MCP (Windows)' -ForegroundColor Cyan
Write-Host ''

# Node
try { $nodeV = (node -v) } catch { Write-Host 'Node.js nao encontrado. Instale Node 18+ e reabra o terminal.' -ForegroundColor Red; exit 1 }
Write-Host "Node: $nodeV"

# Token num campo escondido
$secure = Read-Host -AsSecureString 'Cole seu token do Figma (figd_...) e Enter (nao aparece na tela)'
$bstr = [Runtime.InteropServices.Marshal]::SecureStringToBSTR($secure)
try { $token = [Runtime.InteropServices.Marshal]::PtrToStringAuto($bstr) }
finally { [Runtime.InteropServices.Marshal]::ZeroFreeBSTR($bstr) }

if (-not $token.StartsWith('figd_')) {
  Write-Host 'O token precisa comecar com figd_. Gere de novo no Figma e tente outra vez.' -ForegroundColor Red
  exit 1
}

$env:FIGMA_ACCESS_TOKEN = $token
$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
try {
  node (Join-Path $scriptDir 'mcp-config.mjs')
  $code = $LASTEXITCODE
}
finally {
  $env:FIGMA_ACCESS_TOKEN = $null   # limpa o token do ambiente do processo
  Remove-Variable token -ErrorAction SilentlyContinue
}

if ($code -ne 0) { Write-Host 'Algo falhou no merge do config. Veja a mensagem acima.' -ForegroundColor Red; exit $code }
Write-Host ''
Write-Host 'Pronto. Agora FECHE o Claude Desktop por completo e abra de novo.' -ForegroundColor Green
