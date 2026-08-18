import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ShrimpBoldIcon } from "../bold/shrimp-bold.icon";
import { ShrimpDuotoneIcon } from "../duotone/shrimp-duotone.icon";
import { ShrimpFillIcon } from "../fill/shrimp-fill.icon";
import { ShrimpLightIcon } from "../light/shrimp-light.icon";
import { ShrimpRegularIcon } from "../regular/shrimp-regular.icon";
import { ShrimpThinIcon } from "../thin/shrimp-thin.icon";

export const ShrimpIcon = memo(function Shrimp(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ShrimpBoldIcon,
      duotone: ShrimpDuotoneIcon,
      fill: ShrimpFillIcon,
      light: ShrimpLightIcon,
      regular: ShrimpRegularIcon,
      thin: ShrimpThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
