import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { GitlabLogoBoldIcon } from "../bold";
import { GitlabLogoDuotoneIcon } from "../duotone";
import { GitlabLogoFillIcon } from "../fill";
import { GitlabLogoLightIcon } from "../light";
import { GitlabLogoRegularIcon } from "../regular";
import { GitlabLogoThinIcon } from "../thin";

export const GitlabLogoIcon = memo(function GitlabLogo(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: GitlabLogoBoldIcon,
      duotone: GitlabLogoDuotoneIcon,
      fill: GitlabLogoFillIcon,
      light: GitlabLogoLightIcon,
      regular: GitlabLogoRegularIcon,
      thin: GitlabLogoThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
