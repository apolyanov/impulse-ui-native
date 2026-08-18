import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { EjectBoldIcon } from "../bold/eject-bold.icon";
import { EjectDuotoneIcon } from "../duotone/eject-duotone.icon";
import { EjectFillIcon } from "../fill/eject-fill.icon";
import { EjectLightIcon } from "../light/eject-light.icon";
import { EjectRegularIcon } from "../regular/eject-regular.icon";
import { EjectThinIcon } from "../thin/eject-thin.icon";

export const EjectIcon = memo(function Eject(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: EjectBoldIcon,
      duotone: EjectDuotoneIcon,
      fill: EjectFillIcon,
      light: EjectLightIcon,
      regular: EjectRegularIcon,
      thin: EjectThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
