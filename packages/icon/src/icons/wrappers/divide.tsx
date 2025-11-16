import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { DivideBold } from "../bold";
import { DivideDuotone } from "../duotone";
import { DivideFill } from "../fill";
import { DivideLight } from "../light";
import { DivideRegular } from "../regular";
import { DivideThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Divide = memo(function Divide(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: DivideBold,
      duotone: DivideDuotone,
      fill: DivideFill,
      light: DivideLight,
      regular: DivideRegular,
      thin: DivideThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
