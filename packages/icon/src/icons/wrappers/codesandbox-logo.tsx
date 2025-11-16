import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CodesandboxLogoBold } from "../bold";
import { CodesandboxLogoDuotone } from "../duotone";
import { CodesandboxLogoFill } from "../fill";
import { CodesandboxLogoLight } from "../light";
import { CodesandboxLogoRegular } from "../regular";
import { CodesandboxLogoThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CodesandboxLogo = memo(function CodesandboxLogo(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CodesandboxLogoBold,
      duotone: CodesandboxLogoDuotone,
      fill: CodesandboxLogoFill,
      light: CodesandboxLogoLight,
      regular: CodesandboxLogoRegular,
      thin: CodesandboxLogoThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
