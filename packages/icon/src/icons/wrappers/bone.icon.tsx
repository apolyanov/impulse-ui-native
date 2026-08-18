import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { BoneBoldIcon } from "../bold/bone-bold.icon";
import { BoneDuotoneIcon } from "../duotone/bone-duotone.icon";
import { BoneFillIcon } from "../fill/bone-fill.icon";
import { BoneLightIcon } from "../light/bone-light.icon";
import { BoneRegularIcon } from "../regular/bone-regular.icon";
import { BoneThinIcon } from "../thin/bone-thin.icon";

export const BoneIcon = memo(function Bone(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BoneBoldIcon,
      duotone: BoneDuotoneIcon,
      fill: BoneFillIcon,
      light: BoneLightIcon,
      regular: BoneRegularIcon,
      thin: BoneThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
