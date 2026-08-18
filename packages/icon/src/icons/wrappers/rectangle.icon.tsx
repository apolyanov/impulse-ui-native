import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { RectangleBoldIcon } from "../bold/rectangle-bold.icon";
import { RectangleDuotoneIcon } from "../duotone/rectangle-duotone.icon";
import { RectangleFillIcon } from "../fill/rectangle-fill.icon";
import { RectangleLightIcon } from "../light/rectangle-light.icon";
import { RectangleRegularIcon } from "../regular/rectangle-regular.icon";
import { RectangleThinIcon } from "../thin/rectangle-thin.icon";

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
