import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { BoundingBoxBoldIcon } from "../bold";
import { BoundingBoxDuotoneIcon } from "../duotone";
import { BoundingBoxFillIcon } from "../fill";
import { BoundingBoxLightIcon } from "../light";
import { BoundingBoxRegularIcon } from "../regular";
import { BoundingBoxThinIcon } from "../thin";

export const BoundingBoxIcon = memo(function BoundingBox(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BoundingBoxBoldIcon,
      duotone: BoundingBoxDuotoneIcon,
      fill: BoundingBoxFillIcon,
      light: BoundingBoxLightIcon,
      regular: BoundingBoxRegularIcon,
      thin: BoundingBoxThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
