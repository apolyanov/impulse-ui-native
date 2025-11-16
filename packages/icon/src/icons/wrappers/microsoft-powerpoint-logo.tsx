import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { MicrosoftPowerpointLogoBold } from "../bold";
import { MicrosoftPowerpointLogoDuotone } from "../duotone";
import { MicrosoftPowerpointLogoFill } from "../fill";
import { MicrosoftPowerpointLogoLight } from "../light";
import { MicrosoftPowerpointLogoRegular } from "../regular";
import { MicrosoftPowerpointLogoThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const MicrosoftPowerpointLogo = memo(function MicrosoftPowerpointLogo(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: MicrosoftPowerpointLogoBold,
      duotone: MicrosoftPowerpointLogoDuotone,
      fill: MicrosoftPowerpointLogoFill,
      light: MicrosoftPowerpointLogoLight,
      regular: MicrosoftPowerpointLogoRegular,
      thin: MicrosoftPowerpointLogoThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
