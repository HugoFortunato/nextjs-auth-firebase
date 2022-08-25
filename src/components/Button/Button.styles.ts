import styled, { css } from 'styled-components'
import { ButtonProps } from './Button'

export const Button = styled.button<ButtonProps>`
   ${({ background }) => css`
      background: ${background};
   `}
  `

export const Span = styled.span<ButtonProps>`
  ${({ textColor }) => css`
      color: ${textColor};
   `}
`