# Outputs pré-gerados (rede de segurança da demo)

Gerados nos ensaios contra o arquivo Figma CONGELADO. São o fallback de todo passo ao vivo. Status 22/07: completos.

- `01-leitura.md`: output do prompt 1 (leitura do frame)
- `04-auditoria.md`: output do prompt 4 (os 6 defeitos, com severidade)
- `05a-card-raso.tsx`: output do Take A (prompt 5a, sem o Figma): estrutura competente, design inventado. Não confundir com `src/components/CardRaso.tsx` (o card do prompt-de-6-palavras do toggle do preview)
- `05b-card-especificado.tsx`: output do Take B (prompt 5b, com o Figma via MCP), no formato do contrato: arquivo único, variáveis com procedência comentada e as 3 linhas no fim. A versão integrada ao preview é `src/components/Card.tsx` + `Card.css`
- `05c-diff-callout.md`: os 3 pares do momento UAU (Take A vs Take B) + a prova de rastreabilidade (nada roda no palco) + a fala de cobertura
- `06-a11y.md`: output do prompt 6 sobre o card gerado

Regra de palco: estes arquivos ficam ABERTOS numa janela de fundo durante a demo. A troca é coberta pela fala: "enquanto ela pensa, deixa eu te mostrar o que ela normalmente devolve aqui".
