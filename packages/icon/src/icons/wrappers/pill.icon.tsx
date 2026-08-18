import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { PillBoldIcon } from "../bold/pill-bold.icon";
import { PillDuotoneIcon } from "../duotone/pill-duotone.icon";
import { PillFillIcon } from "../fill/pill-fill.icon";
import { PillLightIcon } from "../light/pill-light.icon";
import { PillRegularIcon } from "../regular/pill-regular.icon";
import { PillThinIcon } from "../thin/pill-thin.icon";

export const PillIcon = memo(function Pill(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PillBoldIcon,
      duotone: PillDuotoneIcon,
      fill: PillFillIcon,
      light: PillLightIcon,
      regular: PillRegularIcon,
      thin: PillThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
