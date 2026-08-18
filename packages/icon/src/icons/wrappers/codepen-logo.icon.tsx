import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CodepenLogoBoldIcon } from "../bold/codepen-logo-bold.icon";
import { CodepenLogoDuotoneIcon } from "../duotone/codepen-logo-duotone.icon";
import { CodepenLogoFillIcon } from "../fill/codepen-logo-fill.icon";
import { CodepenLogoLightIcon } from "../light/codepen-logo-light.icon";
import { CodepenLogoRegularIcon } from "../regular/codepen-logo-regular.icon";
import { CodepenLogoThinIcon } from "../thin/codepen-logo-thin.icon";

export const CodepenLogoIcon = memo(function CodepenLogo(
  props: IconWrapperProps,
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
