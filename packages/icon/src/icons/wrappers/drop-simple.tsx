import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { DropSimpleBold } from "../bold";
import { DropSimpleDuotone } from "../duotone";
import { DropSimpleFill } from "../fill";
import { DropSimpleLight } from "../light";
import { DropSimpleRegular } from "../regular";
import { DropSimpleThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const DropSimple = memo(function DropSimple(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: DropSimpleBold,
      duotone: DropSimpleDuotone,
      fill: DropSimpleFill,
      light: DropSimpleLight,
      regular: DropSimpleRegular,
      thin: DropSimpleThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
