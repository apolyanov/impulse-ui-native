import type { SystemIconName } from "@/lib/icons/system-icon";
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
  category,
  description,
  icon,
  name,
  packageName,
  sourceHref,
  tags,
}: {
  category: string;
  description: string;
  icon: SystemIconName;
  name: string;
  packageName: string;
  sourceHref: string;
  tags: readonly string[];
}) {
  return (
    <article className="flex h-full flex-col rounded-md border border-border-subtle bg-surface-elevated p-sm hover:border-primary hover:shadow-lg">
      <div className="flex items-start justify-between gap-xs">
        <span className="flex size-component-large items-center justify-center rounded-md bg-secondary text-primary">
          <SystemIcon className="size-msm" name={icon} />
        </span>
        <span className="rounded-round border border-border-subtle bg-surface-primary px-xs py-xxs text-[10px] font-semiBold uppercase tracking-wider text-text-disabled">
          {category}
        </span>
      </div>
      <h3 className="mt-sm text-title-5 font-bold">{name}</h3>
      <p className="mt-xs flex-1 text-body-small text-text-secondary">
        {description}
      </p>
      <div className="mt-sm flex flex-wrap gap-xxs">
        {tags.map((tag) => (
          <span
            className="rounded-sm bg-surface-primary px-xs py-xxs text-[10px] font-semiBold text-text-disabled"
            key={tag}
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-sm flex items-center gap-xs border-t border-border-subtle pt-mxs">
        <code className="min-w-0 flex-1 truncate text-[10px] text-text-disabled">
          {packageName}
        </code>
        <a
          aria-label={`View ${name} source`}
          className="flex size-component-small shrink-0 items-center justify-center rounded-sm text-text-disabled hover:bg-secondary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus"
          href={sourceHref}
        >
          <SystemIcon className="size-sm" name="arrow" />
        </a>
      </div>
    </article>
  );
}
