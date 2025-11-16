import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { MediumLogoBold } from "../bold";
import { MediumLogoDuotone } from "../duotone";
import { MediumLogoFill } from "../fill";
import { MediumLogoLight } from "../light";
import { MediumLogoRegular } from "../regular";
import { MediumLogoThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const MediumLogo = memo(function MediumLogo(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: MediumLogoBold,
      duotone: MediumLogoDuotone,
      fill: MediumLogoFill,
      light: MediumLogoLight,
      regular: MediumLogoRegular,
      thin: MediumLogoThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
