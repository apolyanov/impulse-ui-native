import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { AppStoreLogoBold } from "../bold";
import { AppStoreLogoDuotone } from "../duotone";
import { AppStoreLogoFill } from "../fill";
import { AppStoreLogoLight } from "../light";
import { AppStoreLogoRegular } from "../regular";
import { AppStoreLogoThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const AppStoreLogo = memo(function AppStoreLogo(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: AppStoreLogoBold,
      duotone: AppStoreLogoDuotone,
      fill: AppStoreLogoFill,
      light: AppStoreLogoLight,
      regular: AppStoreLogoRegular,
      thin: AppStoreLogoThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
