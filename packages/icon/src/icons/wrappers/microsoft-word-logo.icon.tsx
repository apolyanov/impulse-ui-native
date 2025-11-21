import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { MicrosoftWordLogoBoldIcon } from "../bold";
import { MicrosoftWordLogoDuotoneIcon } from "../duotone";
import { MicrosoftWordLogoFillIcon } from "../fill";
import { MicrosoftWordLogoLightIcon } from "../light";
import { MicrosoftWordLogoRegularIcon } from "../regular";
import { MicrosoftWordLogoThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const MicrosoftWordLogoIcon = memo(function MicrosoftWordLogo(
  props: IconWrapperProps
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
