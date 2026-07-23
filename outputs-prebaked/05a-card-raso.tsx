/*
 * Prebaked: output do Take A (prompt 5a, SEM o Figma).
 * Competente na ESTRUTURA (article, heading, button de verdade, estados,
 * aria), generico no DESIGN (hex cru inventado, espacamento fora do grid,
 * tipografia generica), porque o prompt nao deu fonte de design.
 * Os hex crus daqui sao o contraste com o Take B, que so usa var() com
 * nome de token do Figma. Ver 05c-diff-callout.md.
 * NAO confundir com src/components/CardRaso.tsx: aquele e OUTRO artefato
 * (o card do prompt-de-6-palavras usado no toggle do preview, Momento
 * UAU 2; div soup deliberado, decisao do painel de 15/07).
 * Fallback do slot 1 do preview.
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
