import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { MicrosoftWordLogoBoldIcon } from "../bold/microsoft-word-logo-bold.icon";
import { MicrosoftWordLogoDuotoneIcon } from "../duotone/microsoft-word-logo-duotone.icon";
import { MicrosoftWordLogoFillIcon } from "../fill/microsoft-word-logo-fill.icon";
import { MicrosoftWordLogoLightIcon } from "../light/microsoft-word-logo-light.icon";
import { MicrosoftWordLogoRegularIcon } from "../regular/microsoft-word-logo-regular.icon";
import { MicrosoftWordLogoThinIcon } from "../thin/microsoft-word-logo-thin.icon";

export const MicrosoftWordLogoIcon = memo(function MicrosoftWordLogo(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: MicrosoftWordLogoBoldIcon,
      duotone: MicrosoftWordLogoDuotoneIcon,
      fill: MicrosoftWordLogoFillIcon,
      light: MicrosoftWordLogoLightIcon,
      regular: MicrosoftWordLogoRegularIcon,
      thin: MicrosoftWordLogoThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
