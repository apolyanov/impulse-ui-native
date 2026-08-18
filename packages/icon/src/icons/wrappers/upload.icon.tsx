import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { UploadBoldIcon } from "../bold/upload-bold.icon";
import { UploadDuotoneIcon } from "../duotone/upload-duotone.icon";
import { UploadFillIcon } from "../fill/upload-fill.icon";
import { UploadLightIcon } from "../light/upload-light.icon";
import { UploadRegularIcon } from "../regular/upload-regular.icon";
import { UploadThinIcon } from "../thin/upload-thin.icon";

export const UploadIcon = memo(function Upload(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: UploadBoldIcon,
      duotone: UploadDuotoneIcon,
      fill: UploadFillIcon,
      light: UploadLightIcon,
      regular: UploadRegularIcon,
      thin: UploadThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
