# Breeze Cash Playbook

A comprehensive Product Requirements Document and Strategic Playbook for Breeze Cash - AI-Powered Payment Platform.

## Development

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## Deployment

This project is automatically deployed to GitHub Pages using GitHub Actions.

### Manual Deployment

If you need to deploy manually:

```bash
# Install dependencies
pnpm install

# Build the project
pnpm build

# Deploy to GitHub Pages
pnpm deploy
```

### GitHub Pages Setup

1. Go to your repository settings
2. Navigate to "Pages" section
3. Set source to "GitHub Actions"
4. The workflow will automatically deploy when you push to the `master` branch

The site will be available at: `https://yourusername.github.io/breeze-cash-playbook/`

## Project Structure

- `src/components/` - React components
- `src/components/sections/` - Main content sections
- `src/components/ui/` - Reusable UI components
- `dist/` - Built files for deployment
