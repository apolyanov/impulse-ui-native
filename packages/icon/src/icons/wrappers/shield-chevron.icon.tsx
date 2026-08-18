import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ShieldChevronBoldIcon } from "../bold/shield-chevron-bold.icon";
import { ShieldChevronDuotoneIcon } from "../duotone/shield-chevron-duotone.icon";
import { ShieldChevronFillIcon } from "../fill/shield-chevron-fill.icon";
import { ShieldChevronLightIcon } from "../light/shield-chevron-light.icon";
import { ShieldChevronRegularIcon } from "../regular/shield-chevron-regular.icon";
import { ShieldChevronThinIcon } from "../thin/shield-chevron-thin.icon";

export const ShieldChevronIcon = memo(function ShieldChevron(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ShieldChevronBoldIcon,
      duotone: ShieldChevronDuotoneIcon,
      fill: ShieldChevronFillIcon,
      light: ShieldChevronLightIcon,
      regular: ShieldChevronRegularIcon,
      thin: ShieldChevronThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
