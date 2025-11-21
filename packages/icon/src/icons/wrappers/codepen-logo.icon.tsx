import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CodepenLogoBoldIcon } from "../bold";
import { CodepenLogoDuotoneIcon } from "../duotone";
import { CodepenLogoFillIcon } from "../fill";
import { CodepenLogoLightIcon } from "../light";
import { CodepenLogoRegularIcon } from "../regular";
import { CodepenLogoThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CodepenLogoIcon = memo(function CodepenLogo(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CodepenLogoBoldIcon,
      duotone: CodepenLogoDuotoneIcon,
      fill: CodepenLogoFillIcon,
      light: CodepenLogoLightIcon,
      regular: CodepenLogoRegularIcon,
      thin: CodepenLogoThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
