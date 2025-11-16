import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { StackSimpleBold } from "../bold";
import { StackSimpleDuotone } from "../duotone";
import { StackSimpleFill } from "../fill";
import { StackSimpleLight } from "../light";
import { StackSimpleRegular } from "../regular";
import { StackSimpleThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const StackSimple = memo(function StackSimple(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: StackSimpleBold,
      duotone: StackSimpleDuotone,
      fill: StackSimpleFill,
      light: StackSimpleLight,
      regular: StackSimpleRegular,
      thin: StackSimpleThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
