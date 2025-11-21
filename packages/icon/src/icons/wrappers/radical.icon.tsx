import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { RadicalBoldIcon } from "../bold";
import { RadicalDuotoneIcon } from "../duotone";
import { RadicalFillIcon } from "../fill";
import { RadicalLightIcon } from "../light";
import { RadicalRegularIcon } from "../regular";
import { RadicalThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const RadicalIcon = memo(function Radical(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: RadicalBoldIcon,
      duotone: RadicalDuotoneIcon,
      fill: RadicalFillIcon,
      light: RadicalLightIcon,
      regular: RadicalRegularIcon,
      thin: RadicalThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
