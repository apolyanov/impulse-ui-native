import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { UploadSimpleBold } from "../bold";
import { UploadSimpleDuotone } from "../duotone";
import { UploadSimpleFill } from "../fill";
import { UploadSimpleLight } from "../light";
import { UploadSimpleRegular } from "../regular";
import { UploadSimpleThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const UploadSimple = memo(function UploadSimple(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: UploadSimpleBold,
      duotone: UploadSimpleDuotone,
      fill: UploadSimpleFill,
      light: UploadSimpleLight,
      regular: UploadSimpleRegular,
      thin: UploadSimpleThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
