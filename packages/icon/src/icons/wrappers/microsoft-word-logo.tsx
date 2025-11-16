import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { MicrosoftWordLogoBold } from "../bold";
import { MicrosoftWordLogoDuotone } from "../duotone";
import { MicrosoftWordLogoFill } from "../fill";
import { MicrosoftWordLogoLight } from "../light";
import { MicrosoftWordLogoRegular } from "../regular";
import { MicrosoftWordLogoThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const MicrosoftWordLogo = memo(function MicrosoftWordLogo(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: MicrosoftWordLogoBold,
      duotone: MicrosoftWordLogoDuotone,
      fill: MicrosoftWordLogoFill,
      light: MicrosoftWordLogoLight,
      regular: MicrosoftWordLogoRegular,
      thin: MicrosoftWordLogoThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
