import styled from '@emotion/styled'
import { Square } from './Square'
import type { BoardState } from '../types/game'

interface GameBoardProps {
  board: BoardState
  onSquareClick: (index: number) => void
}

const BoardContainer = styled.div`
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Grid = styled.div`
  height: ${({ theme }) => theme.sizes.gameBoard};
  width: ${({ theme }) => theme.sizes.gameBoard};
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.medium};
`

export const GameBoard = ({ board, onSquareClick }: GameBoardProps) => {
  return (
    <BoardContainer>
      <Grid>
        {board.map((value, index) => (
          <Square key={index} value={value} onClick={() => onSquareClick(index)} />
        ))}
      </Grid>
    </BoardContainer>
  )
}
