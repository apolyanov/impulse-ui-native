import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { AlignRightSimpleBold } from "../bold";
import { AlignRightSimpleDuotone } from "../duotone";
import { AlignRightSimpleFill } from "../fill";
import { AlignRightSimpleLight } from "../light";
import { AlignRightSimpleRegular } from "../regular";
import { AlignRightSimpleThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const AlignRightSimple = memo(function AlignRightSimple(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: AlignRightSimpleBold,
      duotone: AlignRightSimpleDuotone,
      fill: AlignRightSimpleFill,
      light: AlignRightSimpleLight,
      regular: AlignRightSimpleRegular,
      thin: AlignRightSimpleThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
