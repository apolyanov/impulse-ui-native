import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CodaLogoBoldIcon } from "../bold/coda-logo-bold.icon";
import { CodaLogoDuotoneIcon } from "../duotone/coda-logo-duotone.icon";
import { CodaLogoFillIcon } from "../fill/coda-logo-fill.icon";
import { CodaLogoLightIcon } from "../light/coda-logo-light.icon";
import { CodaLogoRegularIcon } from "../regular/coda-logo-regular.icon";
import { CodaLogoThinIcon } from "../thin/coda-logo-thin.icon";

export const CodaLogoIcon = memo(function CodaLogo(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CodaLogoBoldIcon,
      duotone: CodaLogoDuotoneIcon,
      fill: CodaLogoFillIcon,
      light: CodaLogoLightIcon,
      regular: CodaLogoRegularIcon,
      thin: CodaLogoThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
