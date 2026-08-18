import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { VisorBoldIcon } from "../bold/visor-bold.icon";
import { VisorDuotoneIcon } from "../duotone/visor-duotone.icon";
import { VisorFillIcon } from "../fill/visor-fill.icon";
import { VisorLightIcon } from "../light/visor-light.icon";
import { VisorRegularIcon } from "../regular/visor-regular.icon";
import { VisorThinIcon } from "../thin/visor-thin.icon";

export const VisorIcon = memo(function Visor(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: VisorBoldIcon,
      duotone: VisorDuotoneIcon,
      fill: VisorFillIcon,
      light: VisorLightIcon,
      regular: VisorRegularIcon,
      thin: VisorThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
