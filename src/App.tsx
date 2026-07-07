import Card from './components/Card.tsx'
import CardRaso from './components/CardRaso.tsx'

/*
 * Palco da demo: dois slots lado a lado.
 * Slot 1 recebe o output do prompt raso (5a); slot 2, o do especificado (5b).
 * O contraste RENDERIZADO entre os dois é o argumento central do workshop.
 */

export default function App() {
  return (
    <main className="stage">
      <header className="stage-header">
        <h1>Do Figma ao código sem handoff</h1>
        <p>O mesmo card, a mesma IA, a mesma manhã. Só muda o que entra.</p>
      </header>

      <div className="slots">
        <section className="slot">
          <h2>Slot 1 · prompt raso</h2>
          <p className="slot-note">"gera esse card em React" (6 palavras, sem contrato)</p>
          <CardRaso />
        </section>

        <section className="slot">
          <h2>Slot 2 · prompt especificado</h2>
          <p className="slot-note">Contrato: tokens de tokens.css, 4 estados, a11y, props tipadas</p>
          <Card
            title="Cadeira Ergo Uno"
            description="Encosto em malha, ajuste lombar e apoio de braço 4D."
            onClick={() => {}}
          />
        </section>
      </div>
    </main>
  )
}
