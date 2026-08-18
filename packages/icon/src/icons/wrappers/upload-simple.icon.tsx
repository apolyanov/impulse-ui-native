import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { UploadSimpleBoldIcon } from "../bold/upload-simple-bold.icon";
import { UploadSimpleDuotoneIcon } from "../duotone/upload-simple-duotone.icon";
import { UploadSimpleFillIcon } from "../fill/upload-simple-fill.icon";
import { UploadSimpleLightIcon } from "../light/upload-simple-light.icon";
import { UploadSimpleRegularIcon } from "../regular/upload-simple-regular.icon";
import { UploadSimpleThinIcon } from "../thin/upload-simple-thin.icon";

export const UploadSimpleIcon = memo(function UploadSimple(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: UploadSimpleBoldIcon,
      duotone: UploadSimpleDuotoneIcon,
      fill: UploadSimpleFillIcon,
      light: UploadSimpleLightIcon,
      regular: UploadSimpleRegularIcon,
      thin: UploadSimpleThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
