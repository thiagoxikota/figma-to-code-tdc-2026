# Backlog pós-evento (triagem das críticas externas, 23/07)

Itens VÁLIDOS das revisões externas da véspera que NÃO entraram antes do palco (quebrariam os prompts byte-travados com o tutorial, exigiriam republicar o community file ou eram redesign de horas). Se o workshop virar material recorrente, atacar nesta ordem.

## P0 do material (integridade da demonstração)

1. **Redesenhar o A/B como comparação limpa**: mesmo prompt e mesmo formato de saída nos dois takes; a ÚNICA linha que muda é o acesso à fonte ("não consulte o Figma, marque valores sem fonte como inferido" vs "consulte o componente e a coleção; informe token e node de origem"). Fixar cliente, modelo, data e conversa limpa. Hoje o par 5a/5b é honesto como demonstração (documentado em prompts.md), mas não resiste a leitura científica.
2. **Separar o gabarito num arquivo próprio** (participante sem gabarito; facilitador com gabarito + versão corrigida + rubrica). No arquivo único, "não leia a página de gabarito" é pedido, não isolamento: o agente PODE ler.
3. **Alinhar objeto do exercício**: ou o Take B lê o componente Card (node 1:34) em vez da Tela demo, ou o exercício gera o formulário. Hoje a semântica do componente vem do prompt e a estrutura de outra tela; a defesa falada existe (note do slide 20), mas o material deveria resolver, não defender.
4. **Renomear "versão corrigida"** para "versão conforme aos seis critérios do exercício" e declarar no canvas que a auditoria cobre 6 desvios plantados, com seção separada para achados extras (labels, opt-in sem semântica, foco, estados de erro).

## P1 do design system didático

5. Code syntax Web em cada variável (a conversão `color/brand-primary` -> `--color-brand-primary` hoje é implícita; formalizar o de-para).
6. Renomear `Mode 1` -> `Light`; scopes apropriados em vez de ALL_SCOPES; aliases primitive -> semantic.
7. Aplicar TODOS os tokens nos componentes mestres (hoje `space/4`, `border/width`, `focus/ring-width`, `size/icon`, `font-weight/heading`, `line-height/body` estão declarados mas não governam nada; pesos, line-heights e paddings crus nos mestres).
8. Componentes com propriedades reais: Button com Focus-visible; Input como component set (Appearance Filled/Outline, State) com label de verdade; Card com props expostas (title, description, image, alt).
9. O defeito 4 é override local, não "variante errada": corrigir a nomenclatura no gabarito (ou criar a variante de fato).

## P2 do canvas

10. Navegação/índice na jornada (7000px de altura sem progresso), Tela demo maior que os prompts no passo da auditoria, painel de tokens em 4 blocos (color/spacing/shape/type), labels visuais nos componentes do passo 3, diffs ampliados no gabarito, aviso "contém seis desvios propositais" na capa.
11. Tese da abertura do canvas: trocar "A IA não lê a sua tela" por "Pixels mostram o resultado; bindings e componentes mostram a procedência" (tecnicamente mais forte; o MCP oficial lê screenshot).

## Rejeitados com razão registrada (não reabrir sem motivo novo)

- "Usar o MCP oficial do Figma": o oficial roda via Dev Mode (assento pago); o requisito do workshop é conta gratuita + arquivo duplicado. O bridge comunitário com versão fixada É a rota certa para este público. Documentado em docs/pipeline-facts.md.
- "get_variable_defs devolve só 10 variáveis": ferramenta do MCP oficial, não do figma-console-mcp. O fluxo real foi verificado ao vivo em 16/07: 23 variáveis com refreshCache (gotcha do cache frio documentado).
- "44px é AAA, não AA": o prompt não diz que 44 é AA; é regra interna mais rígida (mínimo AA do WCAG 2.2 é 24). Munição de Q&A na note do slide de perguntas.
