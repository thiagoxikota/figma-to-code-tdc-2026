import './Card.css'

/*
 * Card "especificado": o resultado do prompt 5b (o contrato).
 * Esta é a versão known-good de ensaio. No palco, a geração ao vivo
 * sobrescreve este arquivo; restaurar com:
 *   git checkout -- src/components/
 */

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
