import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { StorefrontBold } from "../bold";
import { StorefrontDuotone } from "../duotone";
import { StorefrontFill } from "../fill";
import { StorefrontLight } from "../light";
import { StorefrontRegular } from "../regular";
import { StorefrontThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Storefront = memo(function Storefront(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: StorefrontBold,
      duotone: StorefrontDuotone,
      fill: StorefrontFill,
      light: StorefrontLight,
      regular: StorefrontRegular,
      thin: StorefrontThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
