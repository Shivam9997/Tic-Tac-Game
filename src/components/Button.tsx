import styled from '@emotion/styled'

interface ButtonProps {
  variant?: 'reset' | 'start'
}

export const Button = styled.button<ButtonProps>`
  padding: ${({ theme }) => theme.spacing.small};
  background-color: ${({ theme, variant = 'reset' }) =>
    variant === 'reset' ? theme.colors.resetButton : theme.colors.startButton};
  color: ${({ theme }) => theme.colors.buttonText};
  font-size: ${({ theme }) => theme.fontSize.button};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  border: none;
  cursor: pointer;
  transition: opacity 0.2s ease;
  font-weight: 500;

  &:hover {
    opacity: 0.9;
  }

  &:active {
    transform: scale(0.98);
  }
`
