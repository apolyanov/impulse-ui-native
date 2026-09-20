---
name: hook-ordering
description: Standardizes the ordering and organization of React hooks within function components.
---

# React Hook Ordering

## Purpose

Use this skill when writing, reviewing, or refactoring React function components that use hooks.

The goal is to keep hook usage:

- valid according to the Rules of Hooks
- predictable across renders
- easy to scan and maintain
- organized by data flow and responsibility

## Core Rule

React hooks must be called:

1. At the top level of a React function component or custom hook.
2. In the same order on every render.

Never call hooks conditionally, inside loops, inside nested functions, or after a conditional early return that may change between renders.

Bad:

```tsx
if (isLoggedIn) {
  const [name, setName] = useState("");
}
```

Bad:

```tsx
if (enabled) {
  useEffect(() => {
    // ...
  }, []);
}
```

Prefer moving the condition inside the hook:

```tsx
useEffect(() => {
  if (!enabled) return;

  // ...
}, [enabled]);
```

## Recommended Hook Order

Use this order as a default convention:

1. Context and framework hooks
2. State and reducers
3. Refs
4. Custom hooks and data-fetching hooks
5. Memoized or derived values
6. Memoized callbacks
7. Effects
8. Layout or imperative effects
9. Module-level pure helpers
10. Early returns
11. JSX

Think of the component as:

> inputs → state → refs → external/custom data → derived values → handlers → effects → render

## Example

```tsx
function formatUserName(name: string) {
  return name.trim();
}

const UserRow = memo(function UserRow({ user, onSelect }: UserRowProps) {
  const handleSelect = useCallback(() => onSelect(user.id), [onSelect, user.id]);

  return <button onClick={handleSelect}>{formatUserName(user.name)}</button>;
});

function UserList() {
  // 1. Context / framework hooks
  const user = useContext(UserContext);
  const params = useParams();

  // 2. State / reducers
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialState);

  // 3. Refs
  const inputRef = useRef<HTMLInputElement>(null);

  // 4. Custom hooks / queries
  const { data, isLoading, error } = useUsers(query);

  // 5. Derived / memoized values
  const activeUsers = useMemo(
    () => data?.filter((user) => user.active) ?? [],
    [data]
  );

  // 6. Memoized callbacks
  const handleSelect = useCallback((id: string) => {
    setIsOpen(false);
    dispatch({ type: "select", id });
  }, []);

  // 7. Effects
  useEffect(() => {
    if (!user) return;

    // synchronize with an external system
  }, [user]);

  // 8. Layout / imperative effects
  useLayoutEffect(() => {
    // Use only when measurement or pre-paint DOM work is required.
  }, []);

  // 10. Early returns
  if (isLoading) return <Spinner />;
  if (error) return <ErrorState error={error} />;

  // 11. Render
  return (
    <div>
      {activeUsers.map((user) => (
        <UserRow key={user.id} user={user} onSelect={handleSelect} />
      ))}
    </div>
  );
}
```

## Guidance for Custom Hooks

Custom hooks should generally be placed according to the role they play.

Keep one custom hook implementation per `.hook.ts` or `.hook.tsx` file. Give the file the hook's kebab-case name and export related hooks through the directory barrel. Put shared option types, constants, and pure utilities in separate focused files instead of grouping multiple hooks into one implementation file. Function overloads that describe one hook contract remain with that hook.

Hooks that provide foundational inputs to the rest of the component should appear high in the component.

Examples:

```tsx
const auth = useAuth();
const params = useParams();
const query = useUserQuery(auth.userId);
```

Place them before `useMemo`, `useCallback`, or effects that depend on their results.

If a custom hook internally manages effects, state, and callbacks, treat it as a single abstraction rather than trying to mirror its internal ordering in the consuming component.

## useMemo

Use `useMemo` for expensive calculations and for objects, arrays, style compositions, context values, or derived structures created during render and passed across component or hook boundaries. Primitive strings, numbers, and booleans do not need memoization because their value identity is already stable.

Prefer:

```tsx
const visibleUsers = users.filter((user) => user.visible);
```

unless memoization solves a real performance or identity problem.

When used, place `useMemo` after the values it depends on.

## useCallback

Any function created during render must be deliberately stabilized or moved outside the component when it is pure and render-independent. Use `useCallback` so a render-created function's identity changes only with its declared dependencies. In ImpulseUI controls, prefer `useEventCallback` from `@impulse-ui-native/core` for event handlers that need stable identity while reading current props or state.

Stable function identity matters especially when:

- passing callbacks to memoized children
- using a callback as a dependency
- integrating with APIs that depend on stable references

Place callbacks after the state, data, and derived values they use.

## Effects

Effects should usually come after state, queries, derived values, and callbacks.

Use effects for synchronization with systems outside React, such as:

- browser APIs
- subscriptions
- timers
- network synchronization
- third-party libraries

Avoid using effects for values that can be calculated during render.

Prefer:

```tsx
const fullName = `${firstName} ${lastName}`;
```

over:

```tsx
const [fullName, setFullName] = useState("");

useEffect(() => {
  setFullName(`${firstName} ${lastName}`);
}, [firstName, lastName]);
```

## useLayoutEffect

Use `useLayoutEffect` only when work must happen after DOM mutation but before the browser paints.

Typical cases include:

- measuring layout
- synchronously adjusting DOM positioning
- preventing visible layout flicker

Prefer `useEffect` for normal side effects.

## Early Returns

Hooks must run before any early return whose condition can change between renders.

Bad:

```tsx
function Profile({ user }) {
  if (!user) return null;

  const [tab, setTab] = useState("overview");

  return <ProfileTabs tab={tab} />;
}
```

Good:

```tsx
function Profile({ user }) {
  const [tab, setTab] = useState("overview");

  if (!user) return null;

  return <ProfileTabs tab={tab} />;
}
```

## Refactoring Signal

If a component contains so many hooks that the ordering becomes hard to understand, consider extracting:

- a custom hook for related state and effects
- a child component for an independent UI concern
- a reducer for complex state transitions
- derived logic into pure functions

For example:

```tsx
function CheckoutPage() {
  const checkout = useCheckout();
  const payment = usePayment(checkout.order);
  const analytics = useCheckoutAnalytics(checkout);

  // ...
}
```

This is often clearer than keeping dozens of loosely related hooks in one component.

## Helper Placement and Typing

Keep closures that depend on component state or props near the component. Move pure domain mappings, normalization, clamping, and state-conversion logic into the owning package's utilities when it can be understood and tested independently of rendering.

Give extracted utilities explicit parameter and return types. For finite results, define a named union or enum-like type and return it directly instead of using call-site `as const` assertions to recover narrow inference. Presentation-only render helpers and themed style factories may remain local.

## Review Checklist

When reviewing a React component, verify that:

- hooks are always called in the same order
- no hook is inside a conditional, loop, or nested callback
- early returns occur after hook declarations
- foundational hooks appear before dependent hooks
- state and external data appear before derived values
- callbacks appear after the values they depend on
- effects appear after the values they synchronize
- render-created functions and reference-valued constants are stabilized with `useEventCallback`, `useCallback`, or `useMemo`
- `useLayoutEffect` is used only when pre-paint DOM work is necessary
- large clusters of related hooks are extracted when that improves clarity

## Default Convention

When there is no project-specific convention, use:

```text
context / framework hooks
state / reducers
refs
custom hooks / queries
useMemo
useCallback
useEffect
useLayoutEffect
module-level pure helpers
early returns
JSX
```

Consistency within a codebase matters more than enforcing a rigid stylistic order beyond React's Rules of Hooks.
