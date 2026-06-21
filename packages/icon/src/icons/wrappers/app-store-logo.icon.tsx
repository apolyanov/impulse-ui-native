import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { AppStoreLogoBoldIcon } from "../bold";
import { AppStoreLogoDuotoneIcon } from "../duotone";
import { AppStoreLogoFillIcon } from "../fill";
import { AppStoreLogoLightIcon } from "../light";
import { AppStoreLogoRegularIcon } from "../regular";
import { AppStoreLogoThinIcon } from "../thin";

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
