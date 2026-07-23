# Leia-me do apresentador

Conteúdo migrado do arquivo Figma da demo em 22/07/2026, quando a página do apresentador saiu do arquivo público (participante não precisa dela e o agente auditando o arquivo não deve tropeçar no gabarito). O detalhamento canônico dos defeitos segue em `outputs-prebaked/04-auditoria.md`.

## Os 6 defeitos plantados na Tela demo

Referir por NOME, nunca por node-id (node-id muda no backup e em cada cópia duplicada).

1. Botão continuar: cor por HEX CRU (#C8352B) em vez do token color/brand-primary. Idêntico ao olho, só a auditoria pega. Instância DESACOPLADA.
2. Tela demo: padding 20px, fora do grid de 8 (o correto é 24 = space/3).
3. Caption "Leva menos de um minuto": cinza #A29B93 sobre branco, contraste ~2.7:1, REPROVA WCAG AA (>=4.5:1 pra texto). Pré-computado à mão.
4. Input nome: estilo OUTLINE (sem preenchimento) onde o padrão do sistema é FILLED (surface-alt).
5. Ícone do opt-in: 20px onde o token size/icon manda 24px.
6. Grupo de campos: gap 12px onde a régua pede 16 (space/2).

## Fala de cobertura (plano B)

"Enquanto ela pensa, deixa eu te mostrar o que ela normalmente devolve aqui."
