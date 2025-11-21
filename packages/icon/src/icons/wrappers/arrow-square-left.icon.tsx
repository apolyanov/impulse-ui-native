import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ArrowSquareLeftBoldIcon } from "../bold";
import { ArrowSquareLeftDuotoneIcon } from "../duotone";
import { ArrowSquareLeftFillIcon } from "../fill";
import { ArrowSquareLeftLightIcon } from "../light";
import { ArrowSquareLeftRegularIcon } from "../regular";
import { ArrowSquareLeftThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ArrowSquareLeftIcon = memo(function ArrowSquareLeft(
  props: IconWrapperProps
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
