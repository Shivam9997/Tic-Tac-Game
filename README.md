# Modern Tic Tac Toe Game

A modern, fully responsive Tic Tac Toe game built with **React**, **TypeScript**, **Vite**, and **Emotion** (CSS-in-JS).

## 🚀 Tech Stack

- **React 18** - Modern UI library
- **TypeScript** - Type-safe development
- **Vite** - Lightning-fast build tool
- **Emotion** - Powerful CSS-in-JS styling
- **npm** - Package manager

## ✨ Features

- ✅ Two-player gameplay (X and O)
- ✅ Winner detection with modal overlay
- ✅ Draw game detection
- ✅ Reset game functionality
- ✅ Smooth animations and transitions
- ✅ Fully responsive design
- ✅ Modern component architecture
- ✅ Type-safe with TypeScript
- ✅ Reusable design tokens and theme

## 🎨 Design

Maintains the original design aesthetics with:
- Blue/purple gradient background
- Pink/magenta game squares
- Green color for Player X
- Yellow color for Player O
- Smooth hover effects and animations

## 📁 Project Structure

```
src/
├── components/
│   ├── Button.tsx          # Reusable button component
│   ├── Square.tsx           # Individual game square
│   ├── GameBoard.tsx        # 3x3 game grid
│   └── WinnerMessage.tsx    # Winner overlay modal
├── hooks/
│   └── useGameLogic.ts      # Game state and logic
├── styles/
│   ├── theme.ts             # Design tokens (colors, sizes, etc.)
│   └── GlobalStyles.tsx     # Global CSS styles
├── types/
│   └── game.ts              # TypeScript type definitions
├── App.tsx                  # Main app component
├── main.tsx                 # Application entry point
├── emotion.d.ts             # Emotion theme typing
└── vite-env.d.ts            # Vite type definitions
```

## 🏃 Getting Started

### Development

```bash
npm run dev
```

Opens the game at [http://localhost:5173/](http://localhost:5173/)

### Build for Production

```bash
npm run build
```

Builds optimized production files in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## 🎮 How to Play

1. Player X starts first
2. Click any empty square to place your mark
3. Players alternate turns (X and O)
4. First player to get 3 in a row (horizontal, vertical, or diagonal) wins
5. If all squares are filled with no winner, it's a draw
6. Click "Reset Game" or "Start Game" to play again

## 🧩 Component Architecture

The game follows modern React best practices:
- **Custom hooks** for game logic separation
- **Styled components** with Emotion for scoped styling
- **Type-safe props** with TypeScript
- **Design tokens** for consistent theming
- **Modular components** for reusability

## 🎯 Key Improvements Over Original

1. **Modern Framework**: React + TypeScript instead of vanilla JS
2. **CSS-in-JS**: Emotion for scoped, dynamic styling
3. **Type Safety**: Full TypeScript coverage
4. **Better Organization**: Modular component structure
5. **Design Tokens**: Centralized theme configuration
6. **Reusable Components**: Button, Square components can be reused
7. **Better State Management**: Custom hooks pattern
8. **Enhanced UX**: Smooth animations and hover effects

## 📝 License

MIT

---

Built with ❤️ using modern web technologies
