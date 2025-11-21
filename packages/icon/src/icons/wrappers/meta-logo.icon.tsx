import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { MetaLogoBoldIcon } from "../bold";
import { MetaLogoDuotoneIcon } from "../duotone";
import { MetaLogoFillIcon } from "../fill";
import { MetaLogoLightIcon } from "../light";
import { MetaLogoRegularIcon } from "../regular";
import { MetaLogoThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

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
