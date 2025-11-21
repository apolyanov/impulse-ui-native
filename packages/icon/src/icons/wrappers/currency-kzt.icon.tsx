import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CurrencyKztBoldIcon } from "../bold";
import { CurrencyKztDuotoneIcon } from "../duotone";
import { CurrencyKztFillIcon } from "../fill";
import { CurrencyKztLightIcon } from "../light";
import { CurrencyKztRegularIcon } from "../regular";
import { CurrencyKztThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CurrencyKztIcon = memo(function CurrencyKzt(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CurrencyKztBoldIcon,
      duotone: CurrencyKztDuotoneIcon,
      fill: CurrencyKztFillIcon,
      light: CurrencyKztLightIcon,
      regular: CurrencyKztRegularIcon,
      thin: CurrencyKztThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
