import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { RectangleBoldIcon } from "../bold";
import { RectangleDuotoneIcon } from "../duotone";
import { RectangleFillIcon } from "../fill";
import { RectangleLightIcon } from "../light";
import { RectangleRegularIcon } from "../regular";
import { RectangleThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const RectangleIcon = memo(function Rectangle(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: RectangleBoldIcon,
      duotone: RectangleDuotoneIcon,
      fill: RectangleFillIcon,
      light: RectangleLightIcon,
      regular: RectangleRegularIcon,
      thin: RectangleThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
