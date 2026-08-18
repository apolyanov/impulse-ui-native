import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { GitlabLogoBoldIcon } from "../bold/gitlab-logo-bold.icon";
import { GitlabLogoDuotoneIcon } from "../duotone/gitlab-logo-duotone.icon";
import { GitlabLogoFillIcon } from "../fill/gitlab-logo-fill.icon";
import { GitlabLogoLightIcon } from "../light/gitlab-logo-light.icon";
import { GitlabLogoRegularIcon } from "../regular/gitlab-logo-regular.icon";
import { GitlabLogoThinIcon } from "../thin/gitlab-logo-thin.icon";

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
