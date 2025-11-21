import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ArrowSquareRightBoldIcon } from "../bold";
import { ArrowSquareRightDuotoneIcon } from "../duotone";
import { ArrowSquareRightFillIcon } from "../fill";
import { ArrowSquareRightLightIcon } from "../light";
import { ArrowSquareRightRegularIcon } from "../regular";
import { ArrowSquareRightThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ArrowSquareRightIcon = memo(function ArrowSquareRight(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowSquareRightBoldIcon,
      duotone: ArrowSquareRightDuotoneIcon,
      fill: ArrowSquareRightFillIcon,
      light: ArrowSquareRightLightIcon,
      regular: ArrowSquareRightRegularIcon,
      thin: ArrowSquareRightThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
