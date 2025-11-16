import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { DribbbleLogoBold } from "../bold";
import { DribbbleLogoDuotone } from "../duotone";
import { DribbbleLogoFill } from "../fill";
import { DribbbleLogoLight } from "../light";
import { DribbbleLogoRegular } from "../regular";
import { DribbbleLogoThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const DribbbleLogo = memo(function DribbbleLogo(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: DribbbleLogoBold,
      duotone: DribbbleLogoDuotone,
      fill: DribbbleLogoFill,
      light: DribbbleLogoLight,
      regular: DribbbleLogoRegular,
      thin: DribbbleLogoThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
