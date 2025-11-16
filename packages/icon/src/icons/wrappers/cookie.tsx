import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CookieBold } from "../bold";
import { CookieDuotone } from "../duotone";
import { CookieFill } from "../fill";
import { CookieLight } from "../light";
import { CookieRegular } from "../regular";
import { CookieThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Cookie = memo(function Cookie(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CookieBold,
      duotone: CookieDuotone,
      fill: CookieFill,
      light: CookieLight,
      regular: CookieRegular,
      thin: CookieThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
