import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { StackBold } from "../bold";
import { StackDuotone } from "../duotone";
import { StackFill } from "../fill";
import { StackLight } from "../light";
import { StackRegular } from "../regular";
import { StackThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Stack = memo(function Stack(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: StackBold,
      duotone: StackDuotone,
      fill: StackFill,
      light: StackLight,
      regular: StackRegular,
      thin: StackThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
