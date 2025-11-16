import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { AmazonLogoBold } from "../bold";
import { AmazonLogoDuotone } from "../duotone";
import { AmazonLogoFill } from "../fill";
import { AmazonLogoLight } from "../light";
import { AmazonLogoRegular } from "../regular";
import { AmazonLogoThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const AmazonLogo = memo(function AmazonLogo(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: AmazonLogoBold,
      duotone: AmazonLogoDuotone,
      fill: AmazonLogoFill,
      light: AmazonLogoLight,
      regular: AmazonLogoRegular,
      thin: AmazonLogoThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
