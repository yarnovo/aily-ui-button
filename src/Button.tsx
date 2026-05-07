import type { ButtonProps } from './Button.types'
import './Button.css'

const cls = (...parts: (string | false | undefined)[]) => parts.filter(Boolean).join(' ')

/** akong Button · Web · DOM `<button>` */
export function Button(props: ButtonProps) {
  const {
    variant = 'primary',
    size = 'md',
    disabled = false,
    loading = false,
    fullWidth = false,
    iconLeft,
    iconRight,
    children,
    onClick,
    onPress,
    type = 'button',
    ariaLabel,
  } = props

  const handle = () => {
    if (disabled || loading) return
    onClick?.()
    onPress?.()
  }

  return (
    <button
      type={type}
      aria-label={ariaLabel}
      aria-busy={loading || undefined}
      aria-disabled={disabled || undefined}
      disabled={disabled}
      onClick={handle}
      className={cls(
        'ak-btn',
        `ak-btn--${variant}`,
        `ak-btn--${size}`,
        fullWidth && 'ak-btn--full-width',
        loading && 'ak-btn--loading',
      )}
    >
      {iconLeft && <span className="ak-btn__icon">{iconLeft}</span>}
      {children && <span>{children}</span>}
      {iconRight && <span className="ak-btn__icon">{iconRight}</span>}
    </button>
  )
}

export default Button
