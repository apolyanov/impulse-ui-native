import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { GitlabLogoBold } from "../bold";
import { GitlabLogoDuotone } from "../duotone";
import { GitlabLogoFill } from "../fill";
import { GitlabLogoLight } from "../light";
import { GitlabLogoRegular } from "../regular";
import { GitlabLogoThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const GitlabLogo = memo(function GitlabLogo(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: GitlabLogoBold,
      duotone: GitlabLogoDuotone,
      fill: GitlabLogoFill,
      light: GitlabLogoLight,
      regular: GitlabLogoRegular,
      thin: GitlabLogoThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
