import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ArrowSquareRightBoldIcon } from "../bold";
import { ArrowSquareRightDuotoneIcon } from "../duotone";
import { ArrowSquareRightFillIcon } from "../fill";
import { ArrowSquareRightLightIcon } from "../light";
import { ArrowSquareRightRegularIcon } from "../regular";
import { ArrowSquareRightThinIcon } from "../thin";

export const ArrowSquareRightIcon = memo(function ArrowSquareRight(
  props: IconWrapperProps,
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
