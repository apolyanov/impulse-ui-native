import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { PlusCircleBold } from "../bold";
import { PlusCircleDuotone } from "../duotone";
import { PlusCircleFill } from "../fill";
import { PlusCircleLight } from "../light";
import { PlusCircleRegular } from "../regular";
import { PlusCircleThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const PlusCircle = memo(function PlusCircle(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PlusCircleBold,
      duotone: PlusCircleDuotone,
      fill: PlusCircleFill,
      light: PlusCircleLight,
      regular: PlusCircleRegular,
      thin: PlusCircleThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
