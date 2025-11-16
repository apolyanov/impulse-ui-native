import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { BoundingBoxBold } from "../bold";
import { BoundingBoxDuotone } from "../duotone";
import { BoundingBoxFill } from "../fill";
import { BoundingBoxLight } from "../light";
import { BoundingBoxRegular } from "../regular";
import { BoundingBoxThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const BoundingBox = memo(function BoundingBox(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BoundingBoxBold,
      duotone: BoundingBoxDuotone,
      fill: BoundingBoxFill,
      light: BoundingBoxLight,
      regular: BoundingBoxRegular,
      thin: BoundingBoxThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
