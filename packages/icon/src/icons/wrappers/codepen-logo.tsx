import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CodepenLogoBold } from "../bold";
import { CodepenLogoDuotone } from "../duotone";
import { CodepenLogoFill } from "../fill";
import { CodepenLogoLight } from "../light";
import { CodepenLogoRegular } from "../regular";
import { CodepenLogoThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CodepenLogo = memo(function CodepenLogo(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CodepenLogoBold,
      duotone: CodepenLogoDuotone,
      fill: CodepenLogoFill,
      light: CodepenLogoLight,
      regular: CodepenLogoRegular,
      thin: CodepenLogoThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
