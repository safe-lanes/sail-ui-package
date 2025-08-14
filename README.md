# UI Component Library

A modern, production-ready React component library built with Vite, TypeScript, and Tailwind CSS.

## Features

- 🚀 Built with Vite for fast development and optimized builds
- 💪 Full TypeScript support with exported types
- 🎨 Beautiful components styled with Tailwind CSS
- 📦 Optimized for tree-shaking and small bundle sizes
- ♿ Accessible components with proper ARIA attributes
- 📱 Responsive design out of the box

## Components

- **Button** - Versatile button component with multiple variants and states
- **Input** - Form input with label, validation, and icon support
- **Card** - Flexible container component with hover effects
- **Badge** - Status indicators and labels
- **Avatar** - User profile images with fallbacks
- **Spinner** - Loading indicators
- **Modal** - Accessible dialog component

## Installation

```bash
npm install @your-org/ui-components
```

## Usage

```jsx
import { Button, Input, Card } from '@your-org/ui-components';
import '@your-org/ui-components/styles';

function App() {
  return (
    <Card>
      <Input label="Email" type="email" placeholder="Enter your email" />
      <Button variant="primary">Submit</Button>
    </Card>
  );
}
```

## Development

1. Clone the repository
2. Install dependencies: `npm install`
3. Start development server: `npm run dev`
4. Build for production: `npm run build:lib`

## Building for Production

To build the component library for distribution:

```bash
npm run build:lib
```

This will create a `dist` folder with:

- ESM and CJS modules
- TypeScript declarations
- Bundled CSS styles

## Publishing

1. Update version in `package.json`
2. Build the library: `npm run build:lib`
3. Publish to npm: `npm publish`

## License

MIT

## Contributors

A big thanks to all who helped build this UI library!

<!-- CONTRIBUTORS:START -->
<!-- CONTRIBUTORS:END -->
