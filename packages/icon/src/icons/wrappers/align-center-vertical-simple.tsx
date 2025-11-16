import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { AlignCenterVerticalSimpleBold } from "../bold";
import { AlignCenterVerticalSimpleDuotone } from "../duotone";
import { AlignCenterVerticalSimpleFill } from "../fill";
import { AlignCenterVerticalSimpleLight } from "../light";
import { AlignCenterVerticalSimpleRegular } from "../regular";
import { AlignCenterVerticalSimpleThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const AlignCenterVerticalSimple = memo(
  function AlignCenterVerticalSimple(props: IconWrapperProps) {
    const Icon = useMemo(() => {
      const icons: Record<IconVariant, ComponentType<SvgProps>> = {
        bold: AlignCenterVerticalSimpleBold,
        duotone: AlignCenterVerticalSimpleDuotone,
        fill: AlignCenterVerticalSimpleFill,
        light: AlignCenterVerticalSimpleLight,
        regular: AlignCenterVerticalSimpleRegular,
        thin: AlignCenterVerticalSimpleThin,
      };

      return icons[props.variant ?? "regular"];
    }, [props.variant]);

    return <Icon {...props} />;
  },
);
