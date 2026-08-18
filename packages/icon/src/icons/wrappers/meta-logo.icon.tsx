import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { MetaLogoBoldIcon } from "../bold/meta-logo-bold.icon";
import { MetaLogoDuotoneIcon } from "../duotone/meta-logo-duotone.icon";
import { MetaLogoFillIcon } from "../fill/meta-logo-fill.icon";
import { MetaLogoLightIcon } from "../light/meta-logo-light.icon";
import { MetaLogoRegularIcon } from "../regular/meta-logo-regular.icon";
import { MetaLogoThinIcon } from "../thin/meta-logo-thin.icon";

export const MetaLogoIcon = memo(function MetaLogo(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: MetaLogoBoldIcon,
      duotone: MetaLogoDuotoneIcon,
      fill: MetaLogoFillIcon,
      light: MetaLogoLightIcon,
      regular: MetaLogoRegularIcon,
      thin: MetaLogoThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
