import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { GoodreadsLogoBoldIcon } from "../bold";
import { GoodreadsLogoDuotoneIcon } from "../duotone";
import { GoodreadsLogoFillIcon } from "../fill";
import { GoodreadsLogoLightIcon } from "../light";
import { GoodreadsLogoRegularIcon } from "../regular";
import { GoodreadsLogoThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const GoodreadsLogoIcon = memo(function GoodreadsLogo(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: GoodreadsLogoBoldIcon,
      duotone: GoodreadsLogoDuotoneIcon,
      fill: GoodreadsLogoFillIcon,
      light: GoodreadsLogoLightIcon,
      regular: GoodreadsLogoRegularIcon,
      thin: GoodreadsLogoThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
