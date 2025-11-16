import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { DeskBold } from "../bold";
import { DeskDuotone } from "../duotone";
import { DeskFill } from "../fill";
import { DeskLight } from "../light";
import { DeskRegular } from "../regular";
import { DeskThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Desk = memo(function Desk(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: DeskBold,
      duotone: DeskDuotone,
      fill: DeskFill,
      light: DeskLight,
      regular: DeskRegular,
      thin: DeskThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
