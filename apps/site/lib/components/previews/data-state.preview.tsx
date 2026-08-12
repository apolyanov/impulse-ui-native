import { memo } from "react";
import { SystemIcon } from "@/lib/icons/system-icon";

import { WebButton } from "../native-web";

export const DataStatePreview = memo(function DataStatePreview() {
  return (
    <div className="flex flex-col items-center gap-data-state-gap text-center">
      <SystemIcon className="size-data-state-icon text-primary" name="search" />
      <p className="text-body">No results found</p>
      <WebButton variant="filled">Clear search</WebButton>
    </div>
  );
});
