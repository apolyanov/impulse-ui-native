import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CardholderBoldIcon } from "../bold";
import { CardholderDuotoneIcon } from "../duotone";
import { CardholderFillIcon } from "../fill";
import { CardholderLightIcon } from "../light";
import { CardholderRegularIcon } from "../regular";
import { CardholderThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CardholderIcon = memo(function Cardholder(
  props: IconWrapperProps
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
