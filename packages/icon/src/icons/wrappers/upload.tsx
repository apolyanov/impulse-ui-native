import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { UploadBold } from "../bold";
import { UploadDuotone } from "../duotone";
import { UploadFill } from "../fill";
import { UploadLight } from "../light";
import { UploadRegular } from "../regular";
import { UploadThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Upload = memo(function Upload(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: UploadBold,
      duotone: UploadDuotone,
      fill: UploadFill,
      light: UploadLight,
      regular: UploadRegular,
      thin: UploadThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
