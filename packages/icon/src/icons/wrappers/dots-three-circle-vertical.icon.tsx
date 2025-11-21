import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { DotsThreeCircleVerticalBoldIcon } from "../bold";
import { DotsThreeCircleVerticalDuotoneIcon } from "../duotone";
import { DotsThreeCircleVerticalFillIcon } from "../fill";
import { DotsThreeCircleVerticalLightIcon } from "../light";
import { DotsThreeCircleVerticalRegularIcon } from "../regular";
import { DotsThreeCircleVerticalThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const DotsThreeCircleVerticalIcon = memo(
  function DotsThreeCircleVertical(props: IconWrapperProps) {
    const Icon = useMemo(() => {
      const icons: Record<IconVariant, ComponentType<SvgProps>> = {
        bold: DotsThreeCircleVerticalBoldIcon,
        duotone: DotsThreeCircleVerticalDuotoneIcon,
        fill: DotsThreeCircleVerticalFillIcon,
        light: DotsThreeCircleVerticalLightIcon,
        regular: DotsThreeCircleVerticalRegularIcon,
        thin: DotsThreeCircleVerticalThinIcon,
      };

      return icons[props.variant ?? "regular"];
    }, [props.variant]);

    return <Icon {...props} />;
  }
);
