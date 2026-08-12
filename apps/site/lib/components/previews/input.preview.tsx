import { memo } from "react";

import { WebInput } from "../native-web";

export const InputPreview = memo(function InputPreview() {
  return (
    <div className="w-full max-w-72 space-y-xs">
      <WebInput
        defaultValue="alex@example.com"
        label="Email address"
        prefixIcon="user"
        readOnly
      />
      <WebInput
        error="Enter a valid email address"
        placeholder="name@example.com"
        readOnly
      />
    </div>
  );
});
