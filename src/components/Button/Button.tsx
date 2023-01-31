import { IButtonProps } from "../types"
import "./Button.css"

const Button = ({ icon, text, className }: IButtonProps) => {
  return (
    <button className={`button ${className}`}>
      <div className="button__content">
        {!!icon && <img src={icon} alt="icon" className="button__icon" />}
        {!!text && <span>{text}</span>}
      </div>
    </button>
  )
}

export default Button
