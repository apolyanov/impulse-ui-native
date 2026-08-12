import { memo } from "react";

import { SkeletonBone } from "../native-web";

export const SkeletonPreview = memo(function SkeletonPreview() {
  return (
    <div className="w-full max-w-72">
      <div className="flex items-center gap-xs">
        <SkeletonBone className="size-component-medium rounded-round" />
        <div className="flex-1 space-y-xs">
          <SkeletonBone className="h-mxs w-1/2" />
          <SkeletonBone className="h-xs w-2/3" />
        </div>
      </div>
      <div className="mt-sm space-y-xs">
        <SkeletonBone className="h-mxs w-3/4" />
        <SkeletonBone className="h-mxs w-full" />
        <SkeletonBone className="h-mxs w-1/2" />
      </div>
    </div>
  );
});
