import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { BarnBoldIcon } from "../bold/barn-bold.icon";
import { BarnDuotoneIcon } from "../duotone/barn-duotone.icon";
import { BarnFillIcon } from "../fill/barn-fill.icon";
import { BarnLightIcon } from "../light/barn-light.icon";
import { BarnRegularIcon } from "../regular/barn-regular.icon";
import { BarnThinIcon } from "../thin/barn-thin.icon";

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
