"use client";

import { useEffect, useState } from "react";
import { GithubLogoIcon, ImpulseUINativeLogoIcon } from "@/lib/icons";
import { SystemIcon } from "@/lib/icons/system-icon";
import { navigationLinks, packageCommands, project } from "@/lib/site-data";

import type { NativeSize, NativeVariant } from "./native-web";
import { SectionContainer } from "./marketing-primitives";
import { SegmentedControl, WebButton, WebIconButton } from "./native-web";

export function PackageVersion({
  prefix = "",
  suffix = "",
}: {
  prefix?: string;
  suffix?: string;
}) {
  const [version, setVersion] = useState(project.version);

  useEffect(() => {
    let active = true;

    const loadVersion = async () => {
      try {
        const response = await fetch("/api/package-version", {
          cache: "no-store",
        });
        const result = (await response.json()) as { version?: unknown };

        if (active && typeof result.version === "string") {
          setVersion(result.version);
        }
      } catch {
        // Keep the repository version as a resilient fallback.
      }
    };

    void loadVersion();
    const interval = window.setInterval(
      () => {
        void loadVersion();
      },
      60 * 60 * 1000,
    );

    return () => {
      active = false;
      window.clearInterval(interval);
    };
  }, []);

  return (
    <>
      {prefix}
      {version}
      {suffix}
    </>
  );
}

export function Navigation() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <nav className="sticky top-0 z-50 border-b border-border-subtle bg-surface-secondary/90 backdrop-blur-md">
      <SectionContainer className="flex h-xl items-center justify-between gap-xs">
        <a
          aria-label="ImpulseUI Native home"
          className="flex min-w-0 items-center gap-xs"
          href="#"
        >
          <ImpulseUINativeLogoIcon className="size-md shrink-0 text-primary" />
          <span className="truncate text-xsm font-bold sm:text-title-6">
            ImpulseUI <span className="text-primary">Native</span>
          </span>
        </a>
        <ul className="hidden items-center gap-msm lg:flex">
          {navigationLinks.map((link) => (
            <li key={link.label}>
              <a
                className="text-body-small font-semiBold transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus"
                href={link.href}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden items-center gap-xs lg:flex">
          <a
            className="inline-flex h-component-medium items-center gap-xs px-sm text-xsm font-semiBold"
            href={project.repository}
          >
            <GithubLogoIcon className="size-sm" /> GitHub
          </a>
          <a
            className="inline-flex h-component-medium items-center gap-xs rounded-md bg-primary px-sm text-xsm font-semiBold text-primary-contrast"
            href="#docs"
          >
            Read docs <SystemIcon className="size-sm" name="arrow" />
          </a>
        </div>
        <WebIconButton
          aria-expanded={open}
          className="lg:hidden"
          icon={open ? "x" : "menu"}
          label="Toggle navigation"
          onClick={() => setOpen((current) => !current)}
          size="small"
          variant="plain"
        />
      </SectionContainer>
      {open ? (
        <div className="border-t border-border-subtle bg-surface-secondary lg:hidden">
          <SectionContainer className="py-sm">
            <ul className="flex flex-col gap-xxs">
              {navigationLinks.map((link) => (
                <li key={link.label}>
                  <a
                    className="block rounded-md px-xs py-xs text-body-small font-semiBold hover:bg-secondary"
                    href={link.href}
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              className="mt-xs flex h-component-medium items-center justify-center gap-xs rounded-md border border-primary text-xsm font-semiBold text-primary"
              href={project.repository}
            >
              <GithubLogoIcon className="size-sm" /> GitHub
            </a>
          </SectionContainer>
        </div>
      ) : null}
    </nav>
  );
}

type PackageManager = keyof typeof packageCommands;

export function InstallBox() {
  const [manager, setManager] = useState<PackageManager>("npm");
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(packageCommands[manager]);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="mt-md w-full max-w-full overflow-hidden rounded-lg border border-border-subtle bg-surface-elevated shadow-sm">
      <div className="grid grid-cols-4 items-center gap-xxs p-xs sm:flex">
        {(Object.keys(packageCommands) as PackageManager[]).map((item) => (
          <WebButton
            className="min-w-0 px-xxs font-mono sm:px-mxs"
            key={item}
            onClick={() => setManager(item)}
            size="small"
            variant={manager === item ? "filled" : "plain"}
          >
            {item}
          </WebButton>
        ))}
        <span className="ml-auto hidden pr-xs text-overline uppercase text-text-disabled sm:block">
          Quick start
        </span>
      </div>
      <div className="mx-xs flex min-w-0 items-center gap-xs rounded-md bg-surface-inverse px-xs py-mxs text-caption text-surface-inverse-contrast sm:px-sm">
        <span className="font-mono text-primary">$</span>
        <code className="min-w-0 flex-1 truncate">
          {packageCommands[manager]}
        </code>
        <button
          aria-label="Copy install command"
          className="flex shrink-0 items-center gap-xxs rounded-sm p-xxs font-semiBold hover:bg-white/10 sm:px-xs"
          onClick={copy}
        >
          <SystemIcon className="size-sm" name={copied ? "check" : "copy"} />
          <span className="hidden sm:inline">{copied ? "Copied" : "Copy"}</span>
        </button>
      </div>
      <div className="mt-xs grid grid-cols-3 border-t border-border-subtle">
        {[
          { label: "Version", value: <PackageVersion /> },
          { label: "License", value: project.license },
          { label: "Package", value: "Toolkit" },
        ].map(({ label, value }) => (
          <div
            className="border-r border-border-subtle p-xs text-center last:border-0"
            key={label}
          >
            <p className="text-[9px] font-semiBold uppercase tracking-wider text-text-disabled">
              {label}
            </p>
            <p className="mt-xxs truncate font-mono text-caption font-bold">
              {value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

const variants = ["filled", "outlined", "soft", "ghost", "plain"] as const;
const sizes = ["small", "medium", "large"] as const;
const states = ["default", "loading", "disabled"] as const;

export function ButtonPlayground() {
  const [variant, setVariant] = useState<NativeVariant>("filled");
  const [size, setSize] = useState<NativeSize>("medium");
  const [state, setState] = useState<(typeof states)[number]>("default");

  return (
    <div className="mt-lg overflow-hidden rounded-xl border border-border-subtle bg-surface-elevated">
      <div className="flex flex-wrap items-center justify-between gap-xs border-b border-border-subtle p-sm">
        <div>
          <p className="text-overline uppercase text-text-disabled">
            Playground
          </p>
          <h3 className="text-title-6">Button</h3>
        </div>
        <code className="text-caption text-text-secondary">
          variant=<span className="text-primary">&quot;{variant}&quot;</span>{" "}
          size=<span className="text-primary">&quot;{size}&quot;</span>
        </code>
      </div>
      <div className="grid lg:grid-cols-[1fr_360px]">
        <div className="grid-field flex min-h-72 items-center justify-center p-md">
          <WebButton
            disabled={state === "disabled"}
            loading={state === "loading"}
            size={size}
            variant={variant}
          >
            Get started <SystemIcon className="size-sm" name="arrow" />
          </WebButton>
        </div>
        <div className="space-y-msm border-t border-border-subtle p-msm lg:border-l lg:border-t-0">
          <SegmentedControl
            label="Variant"
            onChange={setVariant}
            options={variants}
            value={variant}
          />
          <SegmentedControl
            label="Size"
            onChange={setSize}
            options={sizes}
            value={size}
          />
          <SegmentedControl
            label="State"
            onChange={setState}
            options={states}
            value={state}
          />
        </div>
      </div>
    </div>
  );
}
