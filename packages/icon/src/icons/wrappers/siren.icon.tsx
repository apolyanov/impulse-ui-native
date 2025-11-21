import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { SirenBoldIcon } from "../bold";
import { SirenDuotoneIcon } from "../duotone";
import { SirenFillIcon } from "../fill";
import { SirenLightIcon } from "../light";
import { SirenRegularIcon } from "../regular";
import { SirenThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

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
