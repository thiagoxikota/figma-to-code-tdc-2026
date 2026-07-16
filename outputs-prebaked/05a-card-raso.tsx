/*
 * Prebaked: output raso (prompt 5a "gera esse card em React").
 * Representativo do que sai sem contrato: div soup, hex cru fora dos
 * tokens (#4A90D9, #333, #888), sem estados, sem semântica, sem a11y.
 * Espelha src/components/CardRaso.tsx. Fallback do slot 1 do preview.
 * NOTA (painel adversarial 15/07): o render estático continua HONESTO de
 * propósito; o contraste do UAU 2 mora na interação (Tab/hover) e no code
 * toggle 05c-diff-callout.md, não num render deformado. Ver roteiro 10:52.
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
