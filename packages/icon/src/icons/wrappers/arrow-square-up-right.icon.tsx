import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ArrowSquareUpRightBoldIcon } from "../bold";
import { ArrowSquareUpRightDuotoneIcon } from "../duotone";
import { ArrowSquareUpRightFillIcon } from "../fill";
import { ArrowSquareUpRightLightIcon } from "../light";
import { ArrowSquareUpRightRegularIcon } from "../regular";
import { ArrowSquareUpRightThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ArrowSquareUpRightIcon = memo(function ArrowSquareUpRight(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowSquareUpRightBoldIcon,
      duotone: ArrowSquareUpRightDuotoneIcon,
      fill: ArrowSquareUpRightFillIcon,
      light: ArrowSquareUpRightLightIcon,
      regular: ArrowSquareUpRightRegularIcon,
      thin: ArrowSquareUpRightThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
