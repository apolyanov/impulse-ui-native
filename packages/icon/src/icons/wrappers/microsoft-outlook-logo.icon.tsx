import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { MicrosoftOutlookLogoBoldIcon } from "../bold/microsoft-outlook-logo-bold.icon";
import { MicrosoftOutlookLogoDuotoneIcon } from "../duotone/microsoft-outlook-logo-duotone.icon";
import { MicrosoftOutlookLogoFillIcon } from "../fill/microsoft-outlook-logo-fill.icon";
import { MicrosoftOutlookLogoLightIcon } from "../light/microsoft-outlook-logo-light.icon";
import { MicrosoftOutlookLogoRegularIcon } from "../regular/microsoft-outlook-logo-regular.icon";
import { MicrosoftOutlookLogoThinIcon } from "../thin/microsoft-outlook-logo-thin.icon";

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
