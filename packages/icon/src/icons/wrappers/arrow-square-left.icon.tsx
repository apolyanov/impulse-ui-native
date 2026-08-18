import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ArrowSquareLeftBoldIcon } from "../bold/arrow-square-left-bold.icon";
import { ArrowSquareLeftDuotoneIcon } from "../duotone/arrow-square-left-duotone.icon";
import { ArrowSquareLeftFillIcon } from "../fill/arrow-square-left-fill.icon";
import { ArrowSquareLeftLightIcon } from "../light/arrow-square-left-light.icon";
import { ArrowSquareLeftRegularIcon } from "../regular/arrow-square-left-regular.icon";
import { ArrowSquareLeftThinIcon } from "../thin/arrow-square-left-thin.icon";

export const ArrowSquareLeftIcon = memo(function ArrowSquareLeft(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowSquareLeftBoldIcon,
      duotone: ArrowSquareLeftDuotoneIcon,
      fill: ArrowSquareLeftFillIcon,
      light: ArrowSquareLeftLightIcon,
      regular: ArrowSquareLeftRegularIcon,
      thin: ArrowSquareLeftThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
