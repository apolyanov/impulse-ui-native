import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { AppleLogoBold } from "../bold";
import { AppleLogoDuotone } from "../duotone";
import { AppleLogoFill } from "../fill";
import { AppleLogoLight } from "../light";
import { AppleLogoRegular } from "../regular";
import { AppleLogoThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const AppleLogo = memo(function AppleLogo(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: AppleLogoBold,
      duotone: AppleLogoDuotone,
      fill: AppleLogoFill,
      light: AppleLogoLight,
      regular: AppleLogoRegular,
      thin: AppleLogoThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
