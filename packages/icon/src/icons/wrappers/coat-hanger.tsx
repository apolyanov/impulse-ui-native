import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CoatHangerBold } from "../bold";
import { CoatHangerDuotone } from "../duotone";
import { CoatHangerFill } from "../fill";
import { CoatHangerLight } from "../light";
import { CoatHangerRegular } from "../regular";
import { CoatHangerThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CoatHanger = memo(function CoatHanger(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CoatHangerBold,
      duotone: CoatHangerDuotone,
      fill: CoatHangerFill,
      light: CoatHangerLight,
      regular: CoatHangerRegular,
      thin: CoatHangerThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
