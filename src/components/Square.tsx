import styled from '@emotion/styled'
import type { Player } from '../types/game'

interface SquareProps {
  value: Player | null
  onClick: () => void
}

const SquareButton = styled.button<{ $player: Player | null }>`
  height: ${({ theme }) => theme.sizes.box};
  width: ${({ theme }) => theme.sizes.box};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  border: none;
  font-size: ${({ theme }) => theme.fontSize.box};
  background-color: ${({ theme }) => theme.colors.boxBackground};
  color: ${({ theme, $player }) =>
    $player === 'X' ? theme.colors.playerX : $player === 'O' ? theme.colors.playerO : 'transparent'};
  cursor: pointer;
  transition: transform 0.1s ease, box-shadow 0.2s ease;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover:not(:disabled) {
    transform: scale(1.05);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  &:disabled {
    cursor: not-allowed;
  }

  &:active:not(:disabled) {
    transform: scale(0.95);
  }
`

export const Square = ({ value, onClick }: SquareProps) => {
  return (
    <SquareButton $player={value} onClick={onClick} disabled={value !== null}>
      {value}
    </SquareButton>
  )
}
