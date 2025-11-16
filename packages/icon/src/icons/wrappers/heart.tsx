import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { HeartBold } from "../bold";
import { HeartDuotone } from "../duotone";
import { HeartFill } from "../fill";
import { HeartLight } from "../light";
import { HeartRegular } from "../regular";
import { HeartThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Heart = memo(function Heart(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: HeartBold,
      duotone: HeartDuotone,
      fill: HeartFill,
      light: HeartLight,
      regular: HeartRegular,
      thin: HeartThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
