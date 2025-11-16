import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { MaskHappyBold } from "../bold";
import { MaskHappyDuotone } from "../duotone";
import { MaskHappyFill } from "../fill";
import { MaskHappyLight } from "../light";
import { MaskHappyRegular } from "../regular";
import { MaskHappyThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const MaskHappy = memo(function MaskHappy(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: MaskHappyBold,
      duotone: MaskHappyDuotone,
      fill: MaskHappyFill,
      light: MaskHappyLight,
      regular: MaskHappyRegular,
      thin: MaskHappyThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
