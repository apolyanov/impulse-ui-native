import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { UploadSimpleBoldIcon } from "../bold";
import { UploadSimpleDuotoneIcon } from "../duotone";
import { UploadSimpleFillIcon } from "../fill";
import { UploadSimpleLightIcon } from "../light";
import { UploadSimpleRegularIcon } from "../regular";
import { UploadSimpleThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const UploadSimpleIcon = memo(function UploadSimple(
  props: IconWrapperProps
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
