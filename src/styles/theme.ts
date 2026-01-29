// Design tokens and theme configuration
export const theme = {
  colors: {
    background: 'rgb(59 76 219 / 58%)',
    boxBackground: 'rgb(142 53 89 / 72%)',
    playerX: 'rgb(14 235 9 / 72%)',
    playerO: 'yellow',
    resetButton: 'rgb(5, 5, 60)',
    startButton: 'rgb(243, 19, 19)',
    messageText: 'rgb(2 8 102)',
    buttonText: 'white',
  },
  spacing: {
    small: '1rem',
    medium: '1.5vmin',
    large: '4rem',
  },
  borderRadius: {
    small: '9px',
    medium: '10px',
    large: '1rem',
  },
  fontSize: {
    box: '8vmin',
    button: '1.25rem',
    heading: '3rem',
  },
  sizes: {
    gameBoard: '60vmin',
    box: '18vmin',
  },
} as const

export type Theme = typeof theme
