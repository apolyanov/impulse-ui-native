import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { MicrosoftTeamsLogoBold } from "../bold";
import { MicrosoftTeamsLogoDuotone } from "../duotone";
import { MicrosoftTeamsLogoFill } from "../fill";
import { MicrosoftTeamsLogoLight } from "../light";
import { MicrosoftTeamsLogoRegular } from "../regular";
import { MicrosoftTeamsLogoThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const MicrosoftTeamsLogo = memo(function MicrosoftTeamsLogo(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: MicrosoftTeamsLogoBold,
      duotone: MicrosoftTeamsLogoDuotone,
      fill: MicrosoftTeamsLogoFill,
      light: MicrosoftTeamsLogoLight,
      regular: MicrosoftTeamsLogoRegular,
      thin: MicrosoftTeamsLogoThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
