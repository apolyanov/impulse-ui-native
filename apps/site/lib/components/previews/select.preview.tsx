import { memo } from "react";
import { SystemIcon } from "@/lib/icons/system-icon";

import { WebControl } from "../native-web";

export const SelectPreview = memo(function SelectPreview() {
  const options = ["React Native", "Expo"];

  return (
    <div className="flex w-full flex-col items-center gap-md py-xs">
      <div className="w-4/5">
        <WebControl suffix={<SystemIcon className="size-msm" name="chevron" />}>
          <span className="flex-1 px-xxs">React Native</span>
        </WebControl>
      </div>

      <div className="relative w-4/5 rounded-t-xl bg-surface-secondary">
        <div className="absolute inset-x-0 -top-md flex h-md items-center justify-center">
          <span className="h-[6px] w-1/4 rounded-round bg-surface-primary" />
        </div>
        <h4 className="px-md py-msm text-center text-title-3">Options</h4>
        <div className="px-md">
          {options.map((option, index) => (
            <div
              className="flex items-center justify-between p-sm text-body"
              key={option}
            >
              <span>{option}</span>
              <SystemIcon
                className={
                  index === 0 ? "size-msm text-primary" : "size-msm opacity-0"
                }
                name="check"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});
