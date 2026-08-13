import { memo } from "react";
import { SystemIcon } from "@/lib/icons/system-icon";

import { WebButton, WebInput, WebTag } from "../native-web";

export const PhonePreview = memo(function PhonePreview() {
  return (
    <div className="relative w-full max-w-[314px] rounded-[40px] border border-neutral-11 bg-neutral-11 p-[11px] shadow-xl">
      <div className="relative h-[580px] overflow-hidden rounded-[30px] bg-surface-primary px-sm py-mxs text-text-primary">
        <div className="flex items-center justify-between text-[11px] font-semiBold">
          <span>9:41</span>
          <span className="h-sm w-xl rounded-round bg-neutral-11" />
          <span>100%</span>
        </div>
        <div className="mt-sm flex items-center justify-between">
          <div>
            <p className="text-caption text-text-disabled">Good morning</p>
            <p className="text-title-5 font-bold">Alex Rivera</p>
          </div>
          <div className="relative flex size-component-medium items-center justify-center rounded-round bg-primary text-caption font-bold text-primary-contrast">
            AR
            <span className="absolute right-0 top-0 size-mxs rounded-round border-md border-surface-primary bg-primary" />
          </div>
        </div>
        <div className="mt-sm grid grid-cols-2 gap-xs">
          <div className="rounded-lg border border-border-subtle bg-surface-elevated p-mxs">
            <p className="text-[10px] font-semiBold uppercase text-text-disabled">
              Sessions
            </p>
            <strong className="mt-xxs block text-xl">248</strong>
            <small className="text-[10px] font-semiBold text-primary">
              ↑ 12.4%
            </small>
          </div>
          <div className="rounded-lg border border-primary bg-primary p-mxs text-primary-contrast">
            <p className="text-[10px] font-semiBold uppercase">Active</p>
            <strong className="mt-xxs block text-xl">36</strong>
            <small className="text-[10px] font-semiBold">live now</small>
          </div>
        </div>
        <div className="mt-sm flex gap-xxs">
          <WebTag size="small">All</WebTag>
          <WebTag size="small" variant="soft">
            Design
          </WebTag>
          <WebTag size="small" variant="soft">
            Mobile
          </WebTag>
        </div>
        <div className="mt-sm rounded-sm border border-border-subtle bg-surface-elevated p-mxs">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-caption font-semiBold">Notifications</p>
              <p className="text-[10px] text-text-disabled">Push &amp; email</p>
            </div>
            <span className="flex h-5 w-9 justify-end rounded-round bg-primary p-xxs">
              <i className="size-mxs rounded-round bg-primary-contrast" />
            </span>
          </div>
        </div>
        <div className="mt-xs">
          <WebInput
            placeholder="Search components…"
            prefixIcon="search"
            readOnly
          />
        </div>
        <div className="mt-xs grid grid-cols-2 gap-xs">
          <WebButton size="small">Get started</WebButton>
          <WebButton size="small" variant="outlined">
            Learn more
          </WebButton>
        </div>
        <div className="absolute inset-x-mxs bottom-mxs flex items-center justify-around rounded-lg border border-border-subtle bg-surface-elevated p-mxs text-text-disabled">
          {(["home", "box", "bell", "user"] as const).map((icon, index) => (
            <span className={index === 0 ? "text-primary" : ""} key={icon}>
              <SystemIcon className="size-sm" name={icon} />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
});
