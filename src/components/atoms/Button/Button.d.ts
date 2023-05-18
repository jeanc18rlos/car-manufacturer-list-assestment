export const enum ButtonVariant {
  Primary = "primary",
}

export const enum ButtonSize {
  ExtraSmall = "extra-small",
  Small = "small",
  Medium = "medium",
  Large = "large",
  ExtraLarge = "extra-large",
}

export type ButtonProps = {
  children: React.ReactNode
  className?: string
  onClick?: () => void
  disabled?: boolean
  variant?: ButtonVariant
  size?: ButtonSize
}
