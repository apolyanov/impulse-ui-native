import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ShieldChevronBold } from "../bold";
import { ShieldChevronDuotone } from "../duotone";
import { ShieldChevronFill } from "../fill";
import { ShieldChevronLight } from "../light";
import { ShieldChevronRegular } from "../regular";
import { ShieldChevronThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ShieldChevron = memo(function ShieldChevron(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ShieldChevronBold,
      duotone: ShieldChevronDuotone,
      fill: ShieldChevronFill,
      light: ShieldChevronLight,
      regular: ShieldChevronRegular,
      thin: ShieldChevronThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
