import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { PatreonLogoBold } from "../bold";
import { PatreonLogoDuotone } from "../duotone";
import { PatreonLogoFill } from "../fill";
import { PatreonLogoLight } from "../light";
import { PatreonLogoRegular } from "../regular";
import { PatreonLogoThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const PatreonLogo = memo(function PatreonLogo(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PatreonLogoBold,
      duotone: PatreonLogoDuotone,
      fill: PatreonLogoFill,
      light: PatreonLogoLight,
      regular: PatreonLogoRegular,
      thin: PatreonLogoThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
