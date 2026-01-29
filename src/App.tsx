import { ThemeProvider } from '@emotion/react'
import styled from '@emotion/styled'
import { GlobalStyles } from './styles/GlobalStyles'
import { theme } from './styles/theme'
import { GameBoard } from './components/GameBoard'
import { WinnerMessage } from './components/WinnerMessage'
import { Button } from './components/Button'
import { useGameLogic } from './hooks/useGameLogic'

const Main = styled.main`
  width: 100%;
  max-width: 1200px;
  padding: 2rem;
`

const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.heading};
  margin-bottom: 2rem;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
`

const ResetButtonWrapper = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
`

function App() {
  const { board, winner, isDraw, handleSquareClick, resetGame, isGameOver } = useGameLogic()

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles theme={theme} />
      <WinnerMessage winner={winner} isDraw={isDraw} onRestart={resetGame} show={isGameOver} />
      <Main>
        <Title>Tic Tac Toe</Title>
        <GameBoard board={board} onSquareClick={handleSquareClick} />
        <ResetButtonWrapper>
          <Button variant="reset" onClick={resetGame}>
            Reset Game
          </Button>
        </ResetButtonWrapper>
      </Main>
    </ThemeProvider>
  )
}

export default App
