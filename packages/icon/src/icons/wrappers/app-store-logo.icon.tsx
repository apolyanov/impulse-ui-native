import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { AppStoreLogoBoldIcon } from "../bold/app-store-logo-bold.icon";
import { AppStoreLogoDuotoneIcon } from "../duotone/app-store-logo-duotone.icon";
import { AppStoreLogoFillIcon } from "../fill/app-store-logo-fill.icon";
import { AppStoreLogoLightIcon } from "../light/app-store-logo-light.icon";
import { AppStoreLogoRegularIcon } from "../regular/app-store-logo-regular.icon";
import { AppStoreLogoThinIcon } from "../thin/app-store-logo-thin.icon";

export const AppStoreLogoIcon = memo(function AppStoreLogo(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: AppStoreLogoBoldIcon,
      duotone: AppStoreLogoDuotoneIcon,
      fill: AppStoreLogoFillIcon,
      light: AppStoreLogoLightIcon,
      regular: AppStoreLogoRegularIcon,
      thin: AppStoreLogoThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
