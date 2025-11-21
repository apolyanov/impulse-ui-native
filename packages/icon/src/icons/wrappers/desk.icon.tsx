import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { DeskBoldIcon } from "../bold";
import { DeskDuotoneIcon } from "../duotone";
import { DeskFillIcon } from "../fill";
import { DeskLightIcon } from "../light";
import { DeskRegularIcon } from "../regular";
import { DeskThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const DeskIcon = memo(function Desk(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: DeskBoldIcon,
      duotone: DeskDuotoneIcon,
      fill: DeskFillIcon,
      light: DeskLightIcon,
      regular: DeskRegularIcon,
      thin: DeskThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
