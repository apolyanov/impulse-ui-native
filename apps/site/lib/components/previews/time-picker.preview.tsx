import { memo } from "react";

export const TimePickerPreview = memo(function TimePickerPreview() {
  const columns = [
    { values: ["08", "09", "10"], label: "h" },
    { values: ["40", "41", "42"], label: "m" },
    { values: ["29", "30", "31"], label: "s" },
  ] as const;

  return (
    <div className="relative flex h-time-viewport items-center gap-xs overflow-hidden rounded-md bg-surface-secondary px-sm">
      <div className="absolute inset-x-xs top-1/2 h-time-item -translate-y-1/2 rounded-round bg-surface-primary" />
      {columns.map((column) => (
        <div
          className="relative z-10 flex w-time-column items-center justify-center gap-xxs"
          key={column.label}
        >
          <div className="flex w-[30px] flex-col items-center">
            {column.values.map((item, index) => (
              <span
                className={[
                  "flex h-time-item items-center text-xl",
                  index === 1
                    ? "font-semiBold text-primary"
                    : "font-regular text-text-primary",
                ].join(" ")}
                key={item}
              >
                {item}
              </span>
            ))}
          </div>
          <span className="text-body">{column.label}</span>
        </div>
      ))}
    </div>
  );
});
