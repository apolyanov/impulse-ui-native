import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { DotsThreeOutlineBold } from "../bold";
import { DotsThreeOutlineDuotone } from "../duotone";
import { DotsThreeOutlineFill } from "../fill";
import { DotsThreeOutlineLight } from "../light";
import { DotsThreeOutlineRegular } from "../regular";
import { DotsThreeOutlineThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const DotsThreeOutline = memo(function DotsThreeOutline(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: DotsThreeOutlineBold,
      duotone: DotsThreeOutlineDuotone,
      fill: DotsThreeOutlineFill,
      light: DotsThreeOutlineLight,
      regular: DotsThreeOutlineRegular,
      thin: DotsThreeOutlineThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
