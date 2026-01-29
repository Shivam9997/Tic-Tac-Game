import { css, Global } from '@emotion/react'
import type { Theme } from './theme'

export const GlobalStyles = ({ theme }: { theme: Theme }) => (
  <Global
    styles={css`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      body {
        background-color: ${theme.colors.background};
        text-align: center;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
          'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
          'Helvetica Neue', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      #root {
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    `}
  />
)
