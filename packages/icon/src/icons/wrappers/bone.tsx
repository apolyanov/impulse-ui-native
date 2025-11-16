import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { BoneBold } from "../bold";
import { BoneDuotone } from "../duotone";
import { BoneFill } from "../fill";
import { BoneLight } from "../light";
import { BoneRegular } from "../regular";
import { BoneThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Bone = memo(function Bone(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BoneBold,
      duotone: BoneDuotone,
      fill: BoneFill,
      light: BoneLight,
      regular: BoneRegular,
      thin: BoneThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
