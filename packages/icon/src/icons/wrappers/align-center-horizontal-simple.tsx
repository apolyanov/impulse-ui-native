import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { AlignCenterHorizontalSimpleBold } from "../bold";
import { AlignCenterHorizontalSimpleDuotone } from "../duotone";
import { AlignCenterHorizontalSimpleFill } from "../fill";
import { AlignCenterHorizontalSimpleLight } from "../light";
import { AlignCenterHorizontalSimpleRegular } from "../regular";
import { AlignCenterHorizontalSimpleThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const AlignCenterHorizontalSimple = memo(
  function AlignCenterHorizontalSimple(props: IconWrapperProps) {
    const Icon = useMemo(() => {
      const icons: Record<IconVariant, ComponentType<SvgProps>> = {
        bold: AlignCenterHorizontalSimpleBold,
        duotone: AlignCenterHorizontalSimpleDuotone,
        fill: AlignCenterHorizontalSimpleFill,
        light: AlignCenterHorizontalSimpleLight,
        regular: AlignCenterHorizontalSimpleRegular,
        thin: AlignCenterHorizontalSimpleThin,
      };

      return icons[props.variant ?? "regular"];
    }, [props.variant]);

    return <Icon {...props} />;
  },
);
