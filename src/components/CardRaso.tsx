/*
 * Card "raso": placeholder representativo do que o prompt de 6 palavras
 * ("gera esse card em React") costuma devolver sem contrato: div soup,
 * hex cru fora dos tokens, sem estados, sem semântica, sem acessibilidade.
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
