/*
 * Prebaked: output especificado (prompt 5b, o contrato).
 * Bate com src/components/Card.tsx. Estilos só por variável de
 * tokens.css (companheiro src/components/Card.css), nunca hex cru:
 * props tipadas, 4 estados (default/hover/focus-visible/disabled),
 * article + heading + button, foco 2px, alvo 44px, contraste AA.
 * Fallback do slot 2 do preview.
 */

import './Card.css'

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
