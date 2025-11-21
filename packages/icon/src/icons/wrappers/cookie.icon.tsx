import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CookieBoldIcon } from "../bold";
import { CookieDuotoneIcon } from "../duotone";
import { CookieFillIcon } from "../fill";
import { CookieLightIcon } from "../light";
import { CookieRegularIcon } from "../regular";
import { CookieThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

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
