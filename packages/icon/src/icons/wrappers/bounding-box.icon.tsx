import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { BoundingBoxBoldIcon } from "../bold/bounding-box-bold.icon";
import { BoundingBoxDuotoneIcon } from "../duotone/bounding-box-duotone.icon";
import { BoundingBoxFillIcon } from "../fill/bounding-box-fill.icon";
import { BoundingBoxLightIcon } from "../light/bounding-box-light.icon";
import { BoundingBoxRegularIcon } from "../regular/bounding-box-regular.icon";
import { BoundingBoxThinIcon } from "../thin/bounding-box-thin.icon";

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
