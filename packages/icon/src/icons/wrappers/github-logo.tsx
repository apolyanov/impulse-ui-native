import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { GithubLogoBold } from "../bold";
import { GithubLogoDuotone } from "../duotone";
import { GithubLogoFill } from "../fill";
import { GithubLogoLight } from "../light";
import { GithubLogoRegular } from "../regular";
import { GithubLogoThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const GithubLogo = memo(function GithubLogo(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: GithubLogoBold,
      duotone: GithubLogoDuotone,
      fill: GithubLogoFill,
      light: GithubLogoLight,
      regular: GithubLogoRegular,
      thin: GithubLogoThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
