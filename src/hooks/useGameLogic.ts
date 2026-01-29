import { useState, useCallback } from 'react'
import type { Player, BoardState } from '../types/game'
import { WINNING_PATTERNS } from '../types/game'

export const useGameLogic = () => {
  const [board, setBoard] = useState<BoardState>(Array(9).fill(null))
  const [currentPlayer, setCurrentPlayer] = useState<Player>('X')
  const [winner, setWinner] = useState<Player | null>(null)
  const [isDraw, setIsDraw] = useState(false)
  const [moves, setMoves] = useState(0)

  const checkWinner = useCallback((currentBoard: BoardState): Player | null => {
    for (const pattern of WINNING_PATTERNS) {
      const [a, b, c] = pattern
      const pos1 = currentBoard[a]
      const pos2 = currentBoard[b]
      const pos3 = currentBoard[c]

      if (pos1 && pos2 && pos3 && pos1 === pos2 && pos2 === pos3) {
        return pos1
      }
    }
    return null
  }, [])

  const handleSquareClick = useCallback(
    (index: number) => {
      if (board[index] || winner || isDraw) return

      const newBoard = [...board]
      newBoard[index] = currentPlayer
      setBoard(newBoard)

      const newMoves = moves + 1
      setMoves(newMoves)

      const gameWinner = checkWinner(newBoard)
      if (gameWinner) {
        setWinner(gameWinner)
        return
      }

      if (newMoves === 9) {
        setIsDraw(true)
        return
      }

      setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X')
    },
    [board, currentPlayer, winner, isDraw, moves, checkWinner]
  )

  const resetGame = useCallback(() => {
    setBoard(Array(9).fill(null))
    setCurrentPlayer('X')
    setWinner(null)
    setIsDraw(false)
    setMoves(0)
  }, [])

  return {
    board,
    currentPlayer,
    winner,
    isDraw,
    handleSquareClick,
    resetGame,
    isGameOver: winner !== null || isDraw,
  }
}
