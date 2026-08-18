import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CardholderBoldIcon } from "../bold/cardholder-bold.icon";
import { CardholderDuotoneIcon } from "../duotone/cardholder-duotone.icon";
import { CardholderFillIcon } from "../fill/cardholder-fill.icon";
import { CardholderLightIcon } from "../light/cardholder-light.icon";
import { CardholderRegularIcon } from "../regular/cardholder-regular.icon";
import { CardholderThinIcon } from "../thin/cardholder-thin.icon";

export const CardholderIcon = memo(function Cardholder(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CardholderBoldIcon,
      duotone: CardholderDuotoneIcon,
      fill: CardholderFillIcon,
      light: CardholderLightIcon,
      regular: CardholderRegularIcon,
      thin: CardholderThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
