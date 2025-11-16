import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { RectangleBold } from "../bold";
import { RectangleDuotone } from "../duotone";
import { RectangleFill } from "../fill";
import { RectangleLight } from "../light";
import { RectangleRegular } from "../regular";
import { RectangleThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Rectangle = memo(function Rectangle(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: RectangleBold,
      duotone: RectangleDuotone,
      fill: RectangleFill,
      light: RectangleLight,
      regular: RectangleRegular,
      thin: RectangleThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
