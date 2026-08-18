import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { AlignCenterHorizontalSimpleBoldIcon } from "../bold/align-center-horizontal-simple-bold.icon";
import { AlignCenterHorizontalSimpleDuotoneIcon } from "../duotone/align-center-horizontal-simple-duotone.icon";
import { AlignCenterHorizontalSimpleFillIcon } from "../fill/align-center-horizontal-simple-fill.icon";
import { AlignCenterHorizontalSimpleLightIcon } from "../light/align-center-horizontal-simple-light.icon";
import { AlignCenterHorizontalSimpleRegularIcon } from "../regular/align-center-horizontal-simple-regular.icon";
import { AlignCenterHorizontalSimpleThinIcon } from "../thin/align-center-horizontal-simple-thin.icon";

export const AlignCenterHorizontalSimpleIcon = memo(
  function AlignCenterHorizontalSimple(props: IconWrapperProps) {
    const Icon = useMemo(() => {
      const icons: Record<IconVariant, ComponentType<SvgProps>> = {
        bold: AlignCenterHorizontalSimpleBoldIcon,
        duotone: AlignCenterHorizontalSimpleDuotoneIcon,
        fill: AlignCenterHorizontalSimpleFillIcon,
        light: AlignCenterHorizontalSimpleLightIcon,
        regular: AlignCenterHorizontalSimpleRegularIcon,
        thin: AlignCenterHorizontalSimpleThinIcon,
      };

      return icons[props.variant ?? "regular"];
    }, [props.variant]);

    return <Icon {...props} />;
  },
);
