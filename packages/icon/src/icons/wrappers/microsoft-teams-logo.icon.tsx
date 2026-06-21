import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { MicrosoftTeamsLogoBoldIcon } from "../bold";
import { MicrosoftTeamsLogoDuotoneIcon } from "../duotone";
import { MicrosoftTeamsLogoFillIcon } from "../fill";
import { MicrosoftTeamsLogoLightIcon } from "../light";
import { MicrosoftTeamsLogoRegularIcon } from "../regular";
import { MicrosoftTeamsLogoThinIcon } from "../thin";

export const MicrosoftTeamsLogoIcon = memo(function MicrosoftTeamsLogo(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: MicrosoftTeamsLogoBoldIcon,
      duotone: MicrosoftTeamsLogoDuotoneIcon,
      fill: MicrosoftTeamsLogoFillIcon,
      light: MicrosoftTeamsLogoLightIcon,
      regular: MicrosoftTeamsLogoRegularIcon,
      thin: MicrosoftTeamsLogoThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
