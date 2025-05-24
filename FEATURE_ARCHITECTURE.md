# Feature-Based Architecture

This project follows a feature-based architecture pattern that organizes code by business features rather than technical layers.

## Directory Structure

```
src/
├── app/                    # App configuration and setup
├── assets/                 # Static assets (images, styles)
├── features/              # Feature-based modules
│   ├── auth/              # Authentication feature
│   │   ├── components/    # Auth-specific components
│   │   ├── hooks/         # Auth-specific hooks
│   │   ├── pages/         # Auth pages (login, register)
│   │   ├── services/      # Auth API services
│   │   ├── types/         # Auth TypeScript types
│   │   └── index.ts       # Feature exports
│   ├── dashboard/         # Dashboard feature
│   │   ├── components/    # Dashboard-specific components
│   │   ├── hooks/         # Dashboard-specific hooks
│   │   ├── pages/         # Dashboard pages (analytics, users, etc.)
│   │   ├── services/      # Dashboard API services
│   │   ├── types/         # Dashboard TypeScript types
│   │   └── index.ts       # Feature exports
│   ├── public/            # Public pages feature
│   │   ├── components/    # Public-specific components
│   │   ├── hooks/         # Public-specific hooks
│   │   ├── pages/         # Public pages (home, about)
│   │   ├── services/      # Public API services
│   │   ├── types/         # Public TypeScript types
│   │   └── index.ts       # Feature exports
│   ├── shared/            # Shared/common code
│   │   ├── components/    # Reusable UI components
│   │   ├── hooks/         # Shared hooks
│   │   ├── services/      # Shared services
│   │   ├── types/         # Shared TypeScript types
│   │   ├── utils/         # Utility functions
│   │   └── index.ts       # Shared exports
│   └── index.ts           # All features export
└── routes/                # TanStack Router route definitions
    ├── auth/              # Auth route files
    ├── dashboard/         # Dashboard route files
    └── _public/           # Public route files
```

## Benefits

### 1. **Feature Isolation**

- Each feature is self-contained with its own components, hooks, services, and types
- Reduces coupling between different parts of the application
- Makes it easier to understand and modify specific features

### 2. **Scalability**

- Easy to add new features without affecting existing ones
- Team members can work on different features independently
- Clear boundaries make code reviews more focused

### 3. **Maintainability**

- Related code is co-located, making it easier to find and modify
- Shared code is clearly separated from feature-specific code
- Consistent structure across all features

### 4. **Reusability**

- Shared components and utilities are centralized
- Features can import from each other when needed
- Clear separation between shared and feature-specific code

## Path Aliases

The project uses TypeScript path aliases for cleaner imports:

```typescript
// Available aliases
'@/*'; // ./src/*
'@/features/*'; // ./src/features/*
'@/shared/*'; // ./src/features/shared/*
'@/auth/*'; // ./src/features/auth/*
'@/dashboard/*'; // ./src/features/dashboard/*
'@/public/*'; // ./src/features/public/*
```

## Usage Examples

### Importing Shared Components

```typescript
import { Button, Avatar } from '@/shared/components';
// or
import { Button } from '@/features/shared/components';
```

### Importing Feature-Specific Code

```typescript
import { LoginRoute } from '@/auth/pages';
import { DashboardIndexRoute } from '@/dashboard/pages';
```

### Creating New Features

1. Create the feature directory structure:

```bash
mkdir -p src/features/new-feature/{components,hooks,pages,services,types}
```

2. Create index files for each subdirectory
3. Add the feature export to `src/features/index.ts`
4. Add path alias to `tsconfig.json` and `vite.config.ts` if needed

## Best Practices

### 1. **Keep Features Independent**

- Avoid direct imports between features (use shared instead)
- Each feature should be able to function independently
- Use shared services for cross-feature communication

### 2. **Use Index Files**

- Always create index files to control what gets exported
- Use named exports for better tree-shaking
- Re-export with descriptive names when needed

### 3. **Consistent Structure**

- Follow the same directory structure for all features
- Use consistent naming conventions
- Keep similar file organization across features

### 4. **Shared vs Feature-Specific**

- Put truly reusable code in shared
- Keep feature-specific code within the feature
- When in doubt, start feature-specific and move to shared later

## Migration Notes

This architecture was migrated from a traditional layer-based structure. The main changes include:

- Moved components from `src/components/` to feature-specific directories
- Consolidated utilities in `src/features/shared/utils/`
- Updated import paths throughout the codebase
- Added feature-specific path aliases
- Created index files for better organization

The route structure remains the same for TanStack Router compatibility, but now imports from the feature directories.
