import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CookieBoldIcon } from "../bold/cookie-bold.icon";
import { CookieDuotoneIcon } from "../duotone/cookie-duotone.icon";
import { CookieFillIcon } from "../fill/cookie-fill.icon";
import { CookieLightIcon } from "../light/cookie-light.icon";
import { CookieRegularIcon } from "../regular/cookie-regular.icon";
import { CookieThinIcon } from "../thin/cookie-thin.icon";

export const CookieIcon = memo(function Cookie(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CookieBoldIcon,
      duotone: CookieDuotoneIcon,
      fill: CookieFillIcon,
      light: CookieLightIcon,
      regular: CookieRegularIcon,
      thin: CookieThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
