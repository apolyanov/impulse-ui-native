import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { GithubLogoBoldIcon } from "../bold/github-logo-bold.icon";
import { GithubLogoDuotoneIcon } from "../duotone/github-logo-duotone.icon";
import { GithubLogoFillIcon } from "../fill/github-logo-fill.icon";
import { GithubLogoLightIcon } from "../light/github-logo-light.icon";
import { GithubLogoRegularIcon } from "../regular/github-logo-regular.icon";
import { GithubLogoThinIcon } from "../thin/github-logo-thin.icon";

export const GithubLogoIcon = memo(function GithubLogo(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: GithubLogoBoldIcon,
      duotone: GithubLogoDuotoneIcon,
      fill: GithubLogoFillIcon,
      light: GithubLogoLightIcon,
      regular: GithubLogoRegularIcon,
      thin: GithubLogoThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
