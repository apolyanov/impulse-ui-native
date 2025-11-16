import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CardholderBold } from "../bold";
import { CardholderDuotone } from "../duotone";
import { CardholderFill } from "../fill";
import { CardholderLight } from "../light";
import { CardholderRegular } from "../regular";
import { CardholderThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Cardholder = memo(function Cardholder(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CardholderBold,
      duotone: CardholderDuotone,
      fill: CardholderFill,
      light: CardholderLight,
      regular: CardholderRegular,
      thin: CardholderThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
