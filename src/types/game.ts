export type Player = 'X' | 'O'
export type BoardState = (Player | null)[]
export type WinningPattern = number[]

export const WINNING_PATTERNS: WinningPattern[] = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
]
