import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { MaskHappyBoldIcon } from "../bold/mask-happy-bold.icon";
import { MaskHappyDuotoneIcon } from "../duotone/mask-happy-duotone.icon";
import { MaskHappyFillIcon } from "../fill/mask-happy-fill.icon";
import { MaskHappyLightIcon } from "../light/mask-happy-light.icon";
import { MaskHappyRegularIcon } from "../regular/mask-happy-regular.icon";
import { MaskHappyThinIcon } from "../thin/mask-happy-thin.icon";

export const MaskHappyIcon = memo(function MaskHappy(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: MaskHappyBoldIcon,
      duotone: MaskHappyDuotoneIcon,
      fill: MaskHappyFillIcon,
      light: MaskHappyLightIcon,
      regular: MaskHappyRegularIcon,
      thin: MaskHappyThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
