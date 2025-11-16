import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { AngularLogoBold } from "../bold";
import { AngularLogoDuotone } from "../duotone";
import { AngularLogoFill } from "../fill";
import { AngularLogoLight } from "../light";
import { AngularLogoRegular } from "../regular";
import { AngularLogoThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const AngularLogo = memo(function AngularLogo(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: AngularLogoBold,
      duotone: AngularLogoDuotone,
      fill: AngularLogoFill,
      light: AngularLogoLight,
      regular: AngularLogoRegular,
      thin: AngularLogoThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
