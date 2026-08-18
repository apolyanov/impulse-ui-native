import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { MicrosoftTeamsLogoBoldIcon } from "../bold/microsoft-teams-logo-bold.icon";
import { MicrosoftTeamsLogoDuotoneIcon } from "../duotone/microsoft-teams-logo-duotone.icon";
import { MicrosoftTeamsLogoFillIcon } from "../fill/microsoft-teams-logo-fill.icon";
import { MicrosoftTeamsLogoLightIcon } from "../light/microsoft-teams-logo-light.icon";
import { MicrosoftTeamsLogoRegularIcon } from "../regular/microsoft-teams-logo-regular.icon";
import { MicrosoftTeamsLogoThinIcon } from "../thin/microsoft-teams-logo-thin.icon";

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
