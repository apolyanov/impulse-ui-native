import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { GoodreadsLogoBold } from "../bold";
import { GoodreadsLogoDuotone } from "../duotone";
import { GoodreadsLogoFill } from "../fill";
import { GoodreadsLogoLight } from "../light";
import { GoodreadsLogoRegular } from "../regular";
import { GoodreadsLogoThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const GoodreadsLogo = memo(function GoodreadsLogo(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: GoodreadsLogoBold,
      duotone: GoodreadsLogoDuotone,
      fill: GoodreadsLogoFill,
      light: GoodreadsLogoLight,
      regular: GoodreadsLogoRegular,
      thin: GoodreadsLogoThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
