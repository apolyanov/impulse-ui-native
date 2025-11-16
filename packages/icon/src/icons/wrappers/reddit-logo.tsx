import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { RedditLogoBold } from "../bold";
import { RedditLogoDuotone } from "../duotone";
import { RedditLogoFill } from "../fill";
import { RedditLogoLight } from "../light";
import { RedditLogoRegular } from "../regular";
import { RedditLogoThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const RedditLogo = memo(function RedditLogo(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: RedditLogoBold,
      duotone: RedditLogoDuotone,
      fill: RedditLogoFill,
      light: RedditLogoLight,
      regular: RedditLogoRegular,
      thin: RedditLogoThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
