/*
 * Card "Take A" (prompt 5a, SEM o Figma): output competente-mas-generico.
 *
 * A ESTRUTURA de codigo e boa: article + heading, button de verdade,
 * estados (hover/focus/disabled), aria. O prompt 5a pede tudo isso.
 * O que falta e a FONTE de design: sem o Figma, o modelo inventa a cor
 * (hex cru fora da marca), o espacamento (fora do grid) e a tipografia.
 * Por isso o `npm run validate:workshop` acusa os hex crus daqui e passa
 * o Take B, que usa var(--token). O contraste da demo e DESIGN FIDELITY,
 * nao "codigo ruim vs bom": ver roteiro (Take A / Take B / Comparacao) e
 * outputs-prebaked/05c-diff-callout.md.
 *
 * No palco, a geracao ao vivo (5a) sobrescreve este arquivo; esta e a
 * copia known-good de fallback. Restaurar: git checkout -- src/components/
 */

const styles = `
.cardA {
  background: #ffffff;
  border: 1px solid #dddddd;
  border-radius: 10px;
  padding: 20px;
  max-width: 350px;
  font-family: Arial, Helvetica, sans-serif;
}
.cardA__title { margin: 0 0 10px; font-size: 19px; font-weight: 700; color: #1a1a1a; }
.cardA__desc { margin: 0 0 14px; font-size: 14px; line-height: 1.4; color: #777777; }
.cardA__btn {
  font: inherit;
  padding: 9px 18px;
  border: none;
  border-radius: 6px;
  background: #4A90D9;
  color: #ffffff;
  cursor: pointer;
}
.cardA__btn:hover { background: #3a7bc0; }
.cardA__btn:focus-visible { outline: 2px solid #4A90D9; outline-offset: 2px; }
.cardA__btn:disabled { background: #b8b8b8; cursor: not-allowed; }
`

export default function CardRaso() {
  return (
    <>
      <style>{styles}</style>
      <article className="cardA">
        <h3 className="cardA__title">Cadeira Ergo Uno</h3>
        <p className="cardA__desc">Encosto em malha, ajuste lombar e apoio de braço 4D.</p>
        <button className="cardA__btn" type="button" onClick={() => {}}>
          Ver detalhes
        </button>
      </article>
    </>
  )
}
