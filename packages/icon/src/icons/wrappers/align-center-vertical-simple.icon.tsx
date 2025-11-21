import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { AlignCenterVerticalSimpleBoldIcon } from "../bold";
import { AlignCenterVerticalSimpleDuotoneIcon } from "../duotone";
import { AlignCenterVerticalSimpleFillIcon } from "../fill";
import { AlignCenterVerticalSimpleLightIcon } from "../light";
import { AlignCenterVerticalSimpleRegularIcon } from "../regular";
import { AlignCenterVerticalSimpleThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const AlignCenterVerticalSimpleIcon = memo(
  function AlignCenterVerticalSimple(props: IconWrapperProps) {
    const Icon = useMemo(() => {
      const icons: Record<IconVariant, ComponentType<SvgProps>> = {
        bold: AlignCenterVerticalSimpleBoldIcon,
        duotone: AlignCenterVerticalSimpleDuotoneIcon,
        fill: AlignCenterVerticalSimpleFillIcon,
        light: AlignCenterVerticalSimpleLightIcon,
        regular: AlignCenterVerticalSimpleRegularIcon,
        thin: AlignCenterVerticalSimpleThinIcon,
      };

      return icons[props.variant ?? "regular"];
    }, [props.variant]);

    return <Icon {...props} />;
  }
);
