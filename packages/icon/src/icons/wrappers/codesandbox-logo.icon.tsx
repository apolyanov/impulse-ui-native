import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CodesandboxLogoBoldIcon } from "../bold";
import { CodesandboxLogoDuotoneIcon } from "../duotone";
import { CodesandboxLogoFillIcon } from "../fill";
import { CodesandboxLogoLightIcon } from "../light";
import { CodesandboxLogoRegularIcon } from "../regular";
import { CodesandboxLogoThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CodesandboxLogoIcon = memo(function CodesandboxLogo(
  props: IconWrapperProps
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
