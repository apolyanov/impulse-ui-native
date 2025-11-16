import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { TwitterLogoBold } from "../bold";
import { TwitterLogoDuotone } from "../duotone";
import { TwitterLogoFill } from "../fill";
import { TwitterLogoLight } from "../light";
import { TwitterLogoRegular } from "../regular";
import { TwitterLogoThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const TwitterLogo = memo(function TwitterLogo(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TwitterLogoBold,
      duotone: TwitterLogoDuotone,
      fill: TwitterLogoFill,
      light: TwitterLogoLight,
      regular: TwitterLogoRegular,
      thin: TwitterLogoThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
