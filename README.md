# Senior Frontend / Full Stack Engineer Portfolio

A production-grade personal portfolio web application showcasing enterprise-scale experience, architecture decisions, and technical leadership.

## Tech Stack

- **React 18** with **Vite** - Modern build tooling and fast development experience
- **TypeScript** - Type safety and developer experience
- **Redux Toolkit** - Centralized state management with typed selectors
- **Tailwind CSS** - Utility-first styling with dark mode support
- **React Router** - Client-side routing with lazy loading
- **Framer Motion** - Subtle micro-interactions and animations

## Architecture

### Feature-Based Structure

```
src/
  app/
    store.ts          # Redux store configuration
    hooks.ts          # Typed Redux hooks
  features/
    profile/          # Profile metrics slice
    experience/       # Experience timeline slice
    projects/         # Projects case studies slice
    skills/           # Skills, strengths, philosophy slice
    ui/               # UI state (theme, navigation, expanded items)
  components/
    layout/           # Navigation, Container
    cards/            # Reusable card components
    ui/               # Base UI components (Card)
  pages/              # Route-level page components
  routes/             # Route configuration with lazy loading
  data/               # Static JSON data files
  types/              # TypeScript type definitions
  utils/              # Utility functions
```

### Design Principles

1. **Feature-Based Organization**: Each feature has its own Redux slice, keeping concerns separated
2. **Container vs Presentational**: Pages are containers that connect to Redux, components are presentational
3. **Type Safety**: Full TypeScript coverage with strict mode enabled
4. **Lazy Loading**: Routes are code-split for optimal performance
5. **Reusable Components**: Card variants and UI components promote consistency

### State Management

- **Redux Toolkit** for centralized state
- **Typed hooks** (`useAppDispatch`, `useAppSelector`) for type-safe Redux access
- **Feature slices** for domain-specific state
- **UI slice** for global UI concerns (theme, navigation, expanded items)

### Styling Approach

- **Tailwind CSS** for utility-first styling
- **Dark mode** via `class` strategy (toggled via Redux)
- **Component variants** for consistent card styling
- **Responsive design** with mobile-first approach
- **No UI libraries** - custom components only

### Performance Optimizations

- **Code splitting** via React Router lazy loading
- **Memoization** in card components with Framer Motion
- **Optimized animations** - only where they add clarity
- **Static data** - JSON files loaded at build time

## Sections

### 1. Overview Dashboard
Metrics-driven introduction with cards showing:
- Years of Experience
- Users Impacted
- Systems Built
- Performance Improvements
- Scale Metrics

### 2. Experience Timeline
Non-linear, card-based timeline with:
- Expandable role details
- Achievement categorization (Scale, Performance, Leadership, DevOps)
- Impact-focused descriptions
- Tag-based technology indicators

### 3. Project Case Studies
Detailed project breakdowns including:
- Problem statement
- Architecture decisions
- Tech stack
- Performance outcomes with metrics
- Scale metrics (users, transactions, locations)

### 4. Architecture & Engineering Strengths
System design interview-style cards covering:
- State Management Patterns
- Performance Optimization Techniques
- Component Architecture Strategy
- API Integration at Scale
- Error Handling & Resilience
- DevOps & CI/CD Excellence

### 5. Skills Matrix
Categorized skill cards grouped by:
- Frontend Engineering
- Backend & APIs
- DevOps & Infrastructure
- Architecture & Design
- Leadership & Collaboration

Visual proficiency indicators (expert, advanced, proficient) without progress bars.

### 6. Engineering Philosophy
Short, sharp principles:
- Tradeoffs over trends
- Performance before polish
- Scalability before shortcuts
- Maintainability over cleverness
- Architecture enables velocity

## Development

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Linting

```bash
npm run lint
```

## Data Structure

All content is stored in static JSON files under `src/data/`:

- `profile.json` - Overview metrics
- `experience.json` - Professional experience timeline
- `projects.json` - Project case studies
- `skills.json` - Skills, strengths, and philosophy

This approach:
- Keeps content separate from code
- Enables easy content updates
- Avoids over-engineering API mocks
- Maintains type safety through TypeScript interfaces

## Key Decisions

### Why Redux Toolkit?
- Proven patterns for scalable state management
- Excellent TypeScript support
- DevTools integration
- Minimal boilerplate

### Why Feature-Based Structure?
- Scales well as application grows
- Clear separation of concerns
- Easy to locate related code
- Promotes reusability

### Why No UI Libraries?
- Full control over design system
- Smaller bundle size
- No dependency conflicts
- Custom components match exact requirements

### Why Static JSON Data?
- Simple and performant
- No backend required
- Easy to version control
- Type-safe with TypeScript

### Why Framer Motion?
- Smooth, performant animations
- Declarative API
- Great React integration
- Only used for micro-interactions (not over-animated)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Personal portfolio - all rights reserved.

