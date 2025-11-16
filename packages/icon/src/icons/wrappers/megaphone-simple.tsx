import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { MegaphoneSimpleBold } from "../bold";
import { MegaphoneSimpleDuotone } from "../duotone";
import { MegaphoneSimpleFill } from "../fill";
import { MegaphoneSimpleLight } from "../light";
import { MegaphoneSimpleRegular } from "../regular";
import { MegaphoneSimpleThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const MegaphoneSimple = memo(function MegaphoneSimple(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: MegaphoneSimpleBold,
      duotone: MegaphoneSimpleDuotone,
      fill: MegaphoneSimpleFill,
      light: MegaphoneSimpleLight,
      regular: MegaphoneSimpleRegular,
      thin: MegaphoneSimpleThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
