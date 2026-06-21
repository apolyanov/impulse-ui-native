import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { MicrosoftOutlookLogoBoldIcon } from "../bold";
import { MicrosoftOutlookLogoDuotoneIcon } from "../duotone";
import { MicrosoftOutlookLogoFillIcon } from "../fill";
import { MicrosoftOutlookLogoLightIcon } from "../light";
import { MicrosoftOutlookLogoRegularIcon } from "../regular";
import { MicrosoftOutlookLogoThinIcon } from "../thin";

export const MicrosoftOutlookLogoIcon = memo(function MicrosoftOutlookLogo(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: MicrosoftOutlookLogoBoldIcon,
      duotone: MicrosoftOutlookLogoDuotoneIcon,
      fill: MicrosoftOutlookLogoFillIcon,
      light: MicrosoftOutlookLogoLightIcon,
      regular: MicrosoftOutlookLogoRegularIcon,
      thin: MicrosoftOutlookLogoThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
