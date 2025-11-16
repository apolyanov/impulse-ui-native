import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { SnapchatLogoBold } from "../bold";
import { SnapchatLogoDuotone } from "../duotone";
import { SnapchatLogoFill } from "../fill";
import { SnapchatLogoLight } from "../light";
import { SnapchatLogoRegular } from "../regular";
import { SnapchatLogoThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const SnapchatLogo = memo(function SnapchatLogo(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SnapchatLogoBold,
      duotone: SnapchatLogoDuotone,
      fill: SnapchatLogoFill,
      light: SnapchatLogoLight,
      regular: SnapchatLogoRegular,
      thin: SnapchatLogoThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
