import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { BarnBoldIcon } from "../bold";
import { BarnDuotoneIcon } from "../duotone";
import { BarnFillIcon } from "../fill";
import { BarnLightIcon } from "../light";
import { BarnRegularIcon } from "../regular";
import { BarnThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const BarnIcon = memo(function Barn(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BarnBoldIcon,
      duotone: BarnDuotoneIcon,
      fill: BarnFillIcon,
      light: BarnLightIcon,
      regular: BarnRegularIcon,
      thin: BarnThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
