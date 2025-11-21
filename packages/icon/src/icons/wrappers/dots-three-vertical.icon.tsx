import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { DotsThreeVerticalBoldIcon } from "../bold";
import { DotsThreeVerticalDuotoneIcon } from "../duotone";
import { DotsThreeVerticalFillIcon } from "../fill";
import { DotsThreeVerticalLightIcon } from "../light";
import { DotsThreeVerticalRegularIcon } from "../regular";
import { DotsThreeVerticalThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const DotsThreeVerticalIcon = memo(function DotsThreeVertical(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: DotsThreeVerticalBoldIcon,
      duotone: DotsThreeVerticalDuotoneIcon,
      fill: DotsThreeVerticalFillIcon,
      light: DotsThreeVerticalLightIcon,
      regular: DotsThreeVerticalRegularIcon,
      thin: DotsThreeVerticalThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
