import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { EjectSimpleBold } from "../bold";
import { EjectSimpleDuotone } from "../duotone";
import { EjectSimpleFill } from "../fill";
import { EjectSimpleLight } from "../light";
import { EjectSimpleRegular } from "../regular";
import { EjectSimpleThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const EjectSimple = memo(function EjectSimple(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: EjectSimpleBold,
      duotone: EjectSimpleDuotone,
      fill: EjectSimpleFill,
      light: EjectSimpleLight,
      regular: EjectSimpleRegular,
      thin: EjectSimpleThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
