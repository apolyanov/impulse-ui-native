import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { MicrosoftPowerpointLogoBoldIcon } from "../bold";
import { MicrosoftPowerpointLogoDuotoneIcon } from "../duotone";
import { MicrosoftPowerpointLogoFillIcon } from "../fill";
import { MicrosoftPowerpointLogoLightIcon } from "../light";
import { MicrosoftPowerpointLogoRegularIcon } from "../regular";
import { MicrosoftPowerpointLogoThinIcon } from "../thin";

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
