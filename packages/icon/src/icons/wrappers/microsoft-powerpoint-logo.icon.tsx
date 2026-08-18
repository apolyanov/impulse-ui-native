import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { MicrosoftPowerpointLogoBoldIcon } from "../bold/microsoft-powerpoint-logo-bold.icon";
import { MicrosoftPowerpointLogoDuotoneIcon } from "../duotone/microsoft-powerpoint-logo-duotone.icon";
import { MicrosoftPowerpointLogoFillIcon } from "../fill/microsoft-powerpoint-logo-fill.icon";
import { MicrosoftPowerpointLogoLightIcon } from "../light/microsoft-powerpoint-logo-light.icon";
import { MicrosoftPowerpointLogoRegularIcon } from "../regular/microsoft-powerpoint-logo-regular.icon";
import { MicrosoftPowerpointLogoThinIcon } from "../thin/microsoft-powerpoint-logo-thin.icon";

export const MicrosoftPowerpointLogoIcon = memo(
  function MicrosoftPowerpointLogo(props: IconWrapperProps) {
    const Icon = useMemo(() => {
      const icons: Record<IconVariant, ComponentType<SvgProps>> = {
        bold: MicrosoftPowerpointLogoBoldIcon,
        duotone: MicrosoftPowerpointLogoDuotoneIcon,
        fill: MicrosoftPowerpointLogoFillIcon,
        light: MicrosoftPowerpointLogoLightIcon,
        regular: MicrosoftPowerpointLogoRegularIcon,
        thin: MicrosoftPowerpointLogoThinIcon,
      };

      return icons[props.variant ?? "regular"];
    }, [props.variant]);

    return <Icon {...props} />;
  },
);
