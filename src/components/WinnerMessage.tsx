import styled from '@emotion/styled'
import { Button } from './Button'
import type { Player } from '../types/game'

interface WinnerMessageProps {
  winner: Player | null
  isDraw: boolean
  onRestart: () => void
  show: boolean
}

const MessageOverlay = styled.div<{ show: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100vh;
  display: ${({ show }) => (show ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.large};
  background-color: ${({ theme }) => theme.colors.background};
  z-index: 1000;
  animation: fadeIn 0.3s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`

const MessageText = styled.p`
  color: ${({ theme }) => theme.colors.messageText};
  font-size: ${({ theme }) => theme.fontSize.box};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  font-weight: bold;
  text-align: center;
  padding: 0 2rem;
  line-height: 1.4;
`

export const WinnerMessage = ({ winner, isDraw, onRestart, show }: WinnerMessageProps) => {
  const message = winner 
    ? `Game Over!\nWinner is ${winner}` 
    : isDraw 
    ? 'It is a draw Match!' 
    : ''

  return (
    <MessageOverlay show={show}>
      <MessageText>{message}</MessageText>
      <Button variant="start" onClick={onRestart}>
        Start Game
      </Button>
    </MessageOverlay>
  )
}
