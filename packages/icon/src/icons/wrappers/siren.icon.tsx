import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { SirenBoldIcon } from "../bold/siren-bold.icon";
import { SirenDuotoneIcon } from "../duotone/siren-duotone.icon";
import { SirenFillIcon } from "../fill/siren-fill.icon";
import { SirenLightIcon } from "../light/siren-light.icon";
import { SirenRegularIcon } from "../regular/siren-regular.icon";
import { SirenThinIcon } from "../thin/siren-thin.icon";

export const SirenIcon = memo(function Siren(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SirenBoldIcon,
      duotone: SirenDuotoneIcon,
      fill: SirenFillIcon,
      light: SirenLightIcon,
      regular: SirenRegularIcon,
      thin: SirenThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
