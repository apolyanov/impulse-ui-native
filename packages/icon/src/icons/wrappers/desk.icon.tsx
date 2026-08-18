import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { DeskBoldIcon } from "../bold/desk-bold.icon";
import { DeskDuotoneIcon } from "../duotone/desk-duotone.icon";
import { DeskFillIcon } from "../fill/desk-fill.icon";
import { DeskLightIcon } from "../light/desk-light.icon";
import { DeskRegularIcon } from "../regular/desk-regular.icon";
import { DeskThinIcon } from "../thin/desk-thin.icon";

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
