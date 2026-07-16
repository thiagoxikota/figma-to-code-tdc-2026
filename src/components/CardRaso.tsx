/*
 * Card "raso": placeholder representativo do que o prompt de 6 palavras
 * ("gera esse card em React") costuma devolver sem contrato: div soup,
 * hex cru fora dos tokens (#4A90D9), sem estados, sem semântica, sem a11y.
 *
 * PROPOSITAL (painel adversarial 15/07): o render estático continua HONESTO
 * (parece um card genérico aceitável), NÃO deformado pra ficar feio. O
 * contraste do MOMENTO UAU 2 mora na INTERAÇÃO (este div não pega foco de
 * teclado nem tem hover, ao contrário do Card especificado) e no code toggle
 * (outputs-prebaked/05c-diff-callout.md), não num render propositalmente
 * quebrado. Não "consertar" deixando o raso feio: viraria strawman e o
 * cético da plateia fareja. Ver roteiro 10:52-55 e estratégia seção 6,
 * correção crítica 3.
 *
 * No palco, a geração ao vivo sobrescreve este arquivo; a cópia de
 * fallback vive em outputs-prebaked/. Restaurar com:
 *   git checkout -- src/components/
 */

export default function CardRaso() {
  return (
    <div
      style={{
        backgroundColor: '#ffffff',
        borderRadius: '12px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
        padding: '20px',
        maxWidth: '350px',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#333333', marginBottom: '10px' }}>
        Cadeira Ergo Uno
      </div>
      <div style={{ fontSize: '14px', color: '#888888', marginBottom: '15px' }}>
        Encosto em malha, ajuste lombar e apoio de braço 4D.
      </div>
      <div
        style={{
          backgroundColor: '#4A90D9',
          color: 'white',
          padding: '8px 16px',
          borderRadius: '6px',
          display: 'inline-block',
          cursor: 'pointer',
        }}
        onClick={() => {}}
      >
        Ver detalhes
      </div>
    </div>
  )
}
