import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { PatreonLogoBoldIcon } from "../bold";
import { PatreonLogoDuotoneIcon } from "../duotone";
import { PatreonLogoFillIcon } from "../fill";
import { PatreonLogoLightIcon } from "../light";
import { PatreonLogoRegularIcon } from "../regular";
import { PatreonLogoThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const PatreonLogoIcon = memo(function PatreonLogo(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PatreonLogoBoldIcon,
      duotone: PatreonLogoDuotoneIcon,
      fill: PatreonLogoFillIcon,
      light: PatreonLogoLightIcon,
      regular: PatreonLogoRegularIcon,
      thin: PatreonLogoThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
