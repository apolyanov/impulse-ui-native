import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { RadioactiveBold } from "../bold";
import { RadioactiveDuotone } from "../duotone";
import { RadioactiveFill } from "../fill";
import { RadioactiveLight } from "../light";
import { RadioactiveRegular } from "../regular";
import { RadioactiveThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Radioactive = memo(function Radioactive(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: RadioactiveBold,
      duotone: RadioactiveDuotone,
      fill: RadioactiveFill,
      light: RadioactiveLight,
      regular: RadioactiveRegular,
      thin: RadioactiveThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
