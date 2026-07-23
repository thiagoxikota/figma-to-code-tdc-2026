/*
 * Prebaked: output real do ensaio do prompt 5b (o contrato completo, com o
 * bloco de FORMATO OBRIGATORIO): um arquivo so, sem libs externas, todo
 * estilo por variavel CSS com o nome do token do Figma e o valor lido do
 * frame comentado ao lado, e as 3 linhas de procedencia no fim.
 * Fallback do slot 2 do preview.
 *
 * A implementacao integrada ao preview (src/components/Card.tsx + Card.css)
 * e a ADAPTACAO deste output pro build do Vite (CSS em arquivo proprio).
 * Os valores e tokens sao os mesmos.
 */

const css = `
.card {
  background: var(--color-surface);            /* #FFFFFF, do frame */
  border: var(--border-width) solid var(--color-border); /* 1px, #E2DDD6, do frame */
  border-radius: var(--radius-md);             /* 8px, do frame */
  padding: var(--space-3);                     /* 24px, do frame (grid de 8) */
  max-width: 320px;
  font-family: var(--font-body);
  font-size: var(--font-size-body);            /* 16px, do frame */
  line-height: var(--line-height-body);        /* 1.5, do frame */
  color: var(--color-text);                    /* #1F1C1A, do frame */
}
.card__image {
  width: 100%;
  border-radius: var(--radius-md);             /* 8px, do frame */
  display: block;
}
.card__title {
  font-size: var(--font-size-heading);         /* 20px, do frame */
  font-weight: var(--font-weight-heading);     /* 700, do frame */
  margin: var(--space-2) 0 0;                  /* 16px, do frame */
}
.card__description {
  color: var(--color-text-muted);              /* #6C665F, do frame (passa AA) */
  margin: var(--space-1) 0 0;                  /* 8px, do frame */
}
.card__action {
  margin-top: var(--space-2);                  /* 16px, do frame */
  min-height: var(--tap-target-min);           /* 44px, do frame */
  width: 100%;
  background: var(--color-brand-primary);      /* #C8352B, do frame */
  color: var(--color-surface);                 /* #FFFFFF, do frame */
  border: none;
  border-radius: var(--radius-md);             /* 8px, do frame */
  font-size: var(--font-size-body);            /* 16px, do frame */
  cursor: pointer;
}
.card__action:hover {
  background: var(--color-brand-primary-hover); /* #A82A22, do frame */
}
.card__action:focus-visible {
  outline: var(--focus-ring-width) solid var(--color-focus); /* 2px, #1D4ED8, do frame */
  outline-offset: 2px;
}
.card--disabled .card__action,
.card__action:disabled {
  background: var(--color-disabled-bg);        /* #EDEAE5, do frame */
  color: var(--color-disabled-text);           /* #A29B93, do frame */
  cursor: not-allowed;
}
`

export interface CardProps {
  title: string
  description: string
  imageUrl?: string
  onClick?: () => void
  disabled?: boolean
}

export default function Card({ title, description, imageUrl, onClick, disabled = false }: CardProps) {
  return (
    <article className={`card${disabled ? ' card--disabled' : ''}`}>
      <style>{css}</style>
      {imageUrl && <img className="card__image" src={imageUrl} alt="" />}
      <div className="card__body">
        <h3 className="card__title">{title}</h3>
        <p className="card__description">{description}</p>
        {onClick && (
          <button className="card__action" type="button" onClick={onClick} disabled={disabled}>
            Ver detalhes
          </button>
        )}
      </div>
    </article>
  )
}

/*
 * Cor do botao: color/brand-primary (#C8352B, do frame).
 * Tamanho do titulo: font/size-heading (20px, do frame).
 * Espacamento interno: space/3 (24px, do frame, grid de 8).
 */
