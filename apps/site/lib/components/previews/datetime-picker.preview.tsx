import { memo } from "react";
import { SystemIcon } from "@/lib/icons/system-icon";

export const DateTimePickerPreview = memo(function DateTimePickerPreview() {
  return (
    <div className="w-full overflow-x-auto">
      <div className="w-[328px] rounded-md border border-border-subtle bg-surface-secondary p-mxs">
        <div className="mb-msm flex items-center justify-between text-xsm font-semiBold">
          <span>August 2026</span>
          <SystemIcon className="size-sm text-primary" name="calendar" />
        </div>
        <div className="grid grid-cols-7 gap-xxs">
          {Array.from({ length: 21 }, (_, index) => {
            const day = index + 10;
            const selected = day === 21;
            const inRange = day === 22 || day === 23;

            return (
              <span
                className={[
                  "flex size-picker-day items-center justify-center rounded-sm text-body",
                  selected ? "bg-primary text-primary-contrast" : "",
                  inRange ? "bg-secondary text-secondary-contrast" : "",
                ].join(" ")}
                key={day}
              >
                {day}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
});
