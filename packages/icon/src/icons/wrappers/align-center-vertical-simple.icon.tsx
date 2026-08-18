import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { AlignCenterVerticalSimpleBoldIcon } from "../bold/align-center-vertical-simple-bold.icon";
import { AlignCenterVerticalSimpleDuotoneIcon } from "../duotone/align-center-vertical-simple-duotone.icon";
import { AlignCenterVerticalSimpleFillIcon } from "../fill/align-center-vertical-simple-fill.icon";
import { AlignCenterVerticalSimpleLightIcon } from "../light/align-center-vertical-simple-light.icon";
import { AlignCenterVerticalSimpleRegularIcon } from "../regular/align-center-vertical-simple-regular.icon";
import { AlignCenterVerticalSimpleThinIcon } from "../thin/align-center-vertical-simple-thin.icon";

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
  },
);
