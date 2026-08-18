import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { RugBoldIcon } from "../bold/rug-bold.icon";
import { RugDuotoneIcon } from "../duotone/rug-duotone.icon";
import { RugFillIcon } from "../fill/rug-fill.icon";
import { RugLightIcon } from "../light/rug-light.icon";
import { RugRegularIcon } from "../regular/rug-regular.icon";
import { RugThinIcon } from "../thin/rug-thin.icon";

export const RugIcon = memo(function Rug(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: RugBoldIcon,
      duotone: RugDuotoneIcon,
      fill: RugFillIcon,
      light: RugLightIcon,
      regular: RugRegularIcon,
      thin: RugThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
