import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CodesandboxLogoBoldIcon } from "../bold/codesandbox-logo-bold.icon";
import { CodesandboxLogoDuotoneIcon } from "../duotone/codesandbox-logo-duotone.icon";
import { CodesandboxLogoFillIcon } from "../fill/codesandbox-logo-fill.icon";
import { CodesandboxLogoLightIcon } from "../light/codesandbox-logo-light.icon";
import { CodesandboxLogoRegularIcon } from "../regular/codesandbox-logo-regular.icon";
import { CodesandboxLogoThinIcon } from "../thin/codesandbox-logo-thin.icon";

export const CodesandboxLogoIcon = memo(function CodesandboxLogo(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CodesandboxLogoBoldIcon,
      duotone: CodesandboxLogoDuotoneIcon,
      fill: CodesandboxLogoFillIcon,
      light: CodesandboxLogoLightIcon,
      regular: CodesandboxLogoRegularIcon,
      thin: CodesandboxLogoThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
