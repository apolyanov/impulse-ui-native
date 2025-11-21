import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ArrowSquareUpBoldIcon } from "../bold";
import { ArrowSquareUpDuotoneIcon } from "../duotone";
import { ArrowSquareUpFillIcon } from "../fill";
import { ArrowSquareUpLightIcon } from "../light";
import { ArrowSquareUpRegularIcon } from "../regular";
import { ArrowSquareUpThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ArrowSquareUpIcon = memo(function ArrowSquareUp(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowSquareUpBoldIcon,
      duotone: ArrowSquareUpDuotoneIcon,
      fill: ArrowSquareUpFillIcon,
      light: ArrowSquareUpLightIcon,
      regular: ArrowSquareUpRegularIcon,
      thin: ArrowSquareUpThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
