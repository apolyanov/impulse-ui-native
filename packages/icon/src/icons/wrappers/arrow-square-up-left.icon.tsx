import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ArrowSquareUpLeftBoldIcon } from "../bold";
import { ArrowSquareUpLeftDuotoneIcon } from "../duotone";
import { ArrowSquareUpLeftFillIcon } from "../fill";
import { ArrowSquareUpLeftLightIcon } from "../light";
import { ArrowSquareUpLeftRegularIcon } from "../regular";
import { ArrowSquareUpLeftThinIcon } from "../thin";

export const ArrowSquareUpLeftIcon = memo(function ArrowSquareUpLeft(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowSquareUpLeftBoldIcon,
      duotone: ArrowSquareUpLeftDuotoneIcon,
      fill: ArrowSquareUpLeftFillIcon,
      light: ArrowSquareUpLeftLightIcon,
      regular: ArrowSquareUpLeftRegularIcon,
      thin: ArrowSquareUpLeftThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
