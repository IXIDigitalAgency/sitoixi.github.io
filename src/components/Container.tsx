// src/components/Container.tsx
export default function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto w-full max-w-screen-2xl px-6 lg:px-8">{children}</div>;
}
