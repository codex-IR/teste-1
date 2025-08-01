# Electron React Vite

This project uses Electron, React, Vite and TypeScript.
It also integrates Ant Design for UI components.
ESLint and Prettier are configured for consistent code style.

## Directory structure

```
public/        # Static public assets
src/           # Application source code
  assets/      # Images and other asset files
  components/  # Reusable React components
  pages/       # Page-level React components
  hooks/       # Custom React hooks
  context/     # React context providers
  styles/      # Global styles
  utils/       # Utility functions
  types/       # TypeScript types
  App.tsx      # Root React component
  main.tsx     # Entry point for React
```

The Electron main process is located in the `electron/` folder.

The app uses a simple Header-Content-Footer layout provided by Ant Design in
`MainLayout.tsx`.

The main window has a minimum size of 1024x768 pixels and hardware
acceleration is disabled. The IPC flooding protection is also disabled and the