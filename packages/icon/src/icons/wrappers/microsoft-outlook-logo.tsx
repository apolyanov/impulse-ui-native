import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { MicrosoftOutlookLogoBold } from "../bold";
import { MicrosoftOutlookLogoDuotone } from "../duotone";
import { MicrosoftOutlookLogoFill } from "../fill";
import { MicrosoftOutlookLogoLight } from "../light";
import { MicrosoftOutlookLogoRegular } from "../regular";
import { MicrosoftOutlookLogoThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const MicrosoftOutlookLogo = memo(function MicrosoftOutlookLogo(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: MicrosoftOutlookLogoBold,
      duotone: MicrosoftOutlookLogoDuotone,
      fill: MicrosoftOutlookLogoFill,
      light: MicrosoftOutlookLogoLight,
      regular: MicrosoftOutlookLogoRegular,
      thin: MicrosoftOutlookLogoThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
