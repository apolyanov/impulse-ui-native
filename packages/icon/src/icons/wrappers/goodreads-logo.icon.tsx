import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { GoodreadsLogoBoldIcon } from "../bold/goodreads-logo-bold.icon";
import { GoodreadsLogoDuotoneIcon } from "../duotone/goodreads-logo-duotone.icon";
import { GoodreadsLogoFillIcon } from "../fill/goodreads-logo-fill.icon";
import { GoodreadsLogoLightIcon } from "../light/goodreads-logo-light.icon";
import { GoodreadsLogoRegularIcon } from "../regular/goodreads-logo-regular.icon";
import { GoodreadsLogoThinIcon } from "../thin/goodreads-logo-thin.icon";

export const GoodreadsLogoIcon = memo(function GoodreadsLogo(
  props: IconWrapperProps,
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
