# Design Intent Brief

Task:
Reconstruir a UX/UI do tutorial TDC e sincronizar a jornada com Google Slides e Figma.

User job:
Uma pessoa no workshop precisa saber exatamente o que fazer agora, completar o setup no computador enquanto lê pelo celular e se recuperar de um bloqueio sem se perder nem depender de um formulário de suporte.

Business or portfolio goal:
Fazer a experiência do workshop provar clareza, rigor de especificação e qualidade de interface no mesmo nível do conteúdo apresentado.

Primary screen or moment:
Cada passo deve deixar óbvios o objetivo, a ação principal, o critério de sucesso e a próxima decisão. O momento crítico é sair de um erro e voltar ao passo sem perder contexto.

Source audit:
- Product/source of truth: jornada ao vivo dos 30 slides, refletida no HTML canônico e na página "01 Comece aqui" do Figma.
- Existing components or patterns: shell estático, roteamento por hash, persistência local sem token, blocos copiáveis, checklists, sheet de troubleshooting e reserva.
- Tokens or visual constraints: vermilion institucional, neutros quentes, tipografia de sistema offline, uma superfície dominante, bordas e sombras discretas, nenhuma decoração sem função.
- Business rules: 4 passos de setup e 5 passos de prática; tela final fora da contagem; aos 25 minutos a prática começa; token nunca persistido; conteúdo funciona offline; cópia byte a byte no portfólio.
- Accessibility constraints: WCAG AA, sem significado apenas por cor, 44px mínimo, foco visível, teclado completo, reduced motion, 200 por cento de texto, forced colors e landmarks semânticos.
- Source links or node-ids: Figma `aV212CPkZcQVFr7Sa97BAr` node `32:9`; Slides `13QjroG0DwuAVNH1J5j557DC2_L-J0PcmMt6kGBvmXRw`; produção `https://thiagoxikota.com/tdc/`.

Design intent:
- Layout and hierarchy: shell calmo, coluna de leitura estreita, um título dominante, uma explicação curta, conteúdo principal e uma área de ação inequívoca. Progressão por linha fina e rótulo, sem pilhas de cards.
- States: capa, escolha de sistema, Linux, pré-requisitos, setup 1 a 4, prática 1 a 5, conclusão, reserva, lista de problemas, solução guiada, problema não listado e confirmação de reset.
- Interaction and motion: ações primárias preenchidas e centralizadas; secundárias delineadas ou textuais; listas de navegação reconhecíveis; sheet responsiva; transições curtas apenas em opacity e transform; zero movimento com reduced motion.
- Copy tone: direta, calma, concreta e instrucional. Cada palavra precisa orientar uma ação ou explicar um critério.
- Data or persistence behavior: progresso e contexto persistem em localStorage; token vive apenas na memória da aba; nenhuma rede externa; hash reflete a tela atual.
- Non-goals: não mudar o pipeline técnico, não criar analytics, não adicionar chat ou formulário de suporte, não inventar um sexto passo, não redesenhar o mini design system da demo.

Agent role:
frontend-implementer

Acceptance criteria:
Todas as rotas e variantes são fluidas em mobile e desktop; botões são inequívocos e têm rótulos centralizados; o campo de mesa e toda ação "chamar apoio" deixam de existir; troubleshooting termina em voltar, tentar outra solução, seguir em dupla ou migrar para reserva; site, slides, Figma e docs usam a mesma ordem, labels, prompts e critérios.

Verification evidence:
Validação estrutural do pacote, testes do workshop, comparação byte a byte, build do portfólio, screenshots desktop e mobile, golden path completo, teclado e foco, touch targets, dark mode, reduced motion, texto ampliado, console e rede limpos e relatório de consistência cruzada.

Human-review boundary:
Thiago aprova o refinamento visual final. A publicação só acontece depois de os gates técnicos e visuais passarem e de a consistência cruzada estar comprovada.
