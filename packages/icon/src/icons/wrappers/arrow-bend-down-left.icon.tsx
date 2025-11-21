import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ArrowBendDownLeftBoldIcon } from "../bold";
import { ArrowBendDownLeftDuotoneIcon } from "../duotone";
import { ArrowBendDownLeftFillIcon } from "../fill";
import { ArrowBendDownLeftLightIcon } from "../light";
import { ArrowBendDownLeftRegularIcon } from "../regular";
import { ArrowBendDownLeftThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ArrowBendDownLeftIcon = memo(function ArrowBendDownLeft(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowBendDownLeftBoldIcon,
      duotone: ArrowBendDownLeftDuotoneIcon,
      fill: ArrowBendDownLeftFillIcon,
      light: ArrowBendDownLeftLightIcon,
      regular: ArrowBendDownLeftRegularIcon,
      thin: ArrowBendDownLeftThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
