import type { HTMLAttributes, ReactNode } from "react";
import { SystemIcon } from "@/lib/icons/system-icon";
import { classNames } from "@/lib/utils/class-names";

export function SectionContainer({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={classNames(
        "mx-auto min-w-0 w-full max-w-7xl pl-[max(16px,env(safe-area-inset-left))] pr-[max(16px,env(safe-area-inset-right))] md:px-md",
        className,
      )}
      {...props}
    />
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="text-overline uppercase text-primary">{children}</p>;
}

export function SectionHeading({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
}) {
  return (
    <div className="max-w-3xl">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-xs text-title-1 font-extraBold tracking-[-0.03em] md:text-display-medium">
        {title}
      </h2>
      {copy ? (
        <p className="mt-sm max-w-2xl text-body-large text-text-secondary">
          {copy}
        </p>
      ) : null}
    </div>
  );
}

export function ComponentCard({
  name,
  children,
}: {
  name: string;
  children: ReactNode;
}) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-md border border-border-subtle bg-surface-elevated transition-colors hover:border-primary hover:shadow-lg">
      <div className="flex min-h-48 flex-1 items-center justify-center border-b border-border-subtle bg-surface-primary p-msm">
        {children}
      </div>
      <div className="flex h-xl shrink-0 items-center justify-between gap-xs px-sm">
        <div className="min-w-0">
          <h3 className="truncate text-xsm font-bold">{name}</h3>
          <code className="mt-1 block truncate text-caption text-text-disabled">
            {`<${name} />`}
          </code>
        </div>
        <SystemIcon
          className="size-sm shrink-0 text-text-disabled transition-all group-hover:translate-x-1 group-hover:text-primary"
          name="arrow"
        />
      </div>
    </article>
  );
}
