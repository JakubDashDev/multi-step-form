# WorkConnect — Product Creation Form

A three-step "Add product" form built with Next.js, shadcn/ui, TanStack Form, Zod and nuqs.

## Live app

https://multi-step-form-one-henna.vercel.app/

## Running locally

### With Docker

```bash
docker compose up
```

Open [http://localhost:3000](http://localhost:3000). The container mounts the
project folder, so it hot-reloads the same as running `pnpm dev` directly.

### With Node

Requirements: Node 20+ and pnpm.

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Key decisions

**File structure is organized by domain, not by file type.** Everything about
products: types, validation schemas, the mock API, state, and components,
lives under `src/features/products/`. The way a real app would group a
domain, instead of top-level `components/`, `hooks/`, `types/` folders split
by what kind of file they are. `src/components/ui/` is the one exception:
shadcn primitives are genuinely shared across domains, so they stay
top-level.

**`src/features/products/api.ts` is a simulated backend.** `getProducts`
paginates the in-memory product list and `createProduct` turns a validated
form submission into a stored `Product`, the same shape a real endpoint
would return. There's no real backend for this task, so state lives in a
React context (`products-context.tsx`) seeded from `src/mocks/products.ts`. In a real app with an actual API, I'd reach for RTK Query (or
plain Axios).

**Sonner for the "product added" toast.** It's the toast library shadcn/ui
documents and ships a ready component for, so it drops in with no extra
wiring.
