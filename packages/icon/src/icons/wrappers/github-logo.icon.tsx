import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { GithubLogoBoldIcon } from "../bold";
import { GithubLogoDuotoneIcon } from "../duotone";
import { GithubLogoFillIcon } from "../fill";
import { GithubLogoLightIcon } from "../light";
import { GithubLogoRegularIcon } from "../regular";
import { GithubLogoThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const GithubLogoIcon = memo(function GithubLogo(
  props: IconWrapperProps
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
