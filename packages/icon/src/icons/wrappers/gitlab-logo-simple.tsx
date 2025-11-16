import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { GitlabLogoSimpleBold } from "../bold";
import { GitlabLogoSimpleDuotone } from "../duotone";
import { GitlabLogoSimpleFill } from "../fill";
import { GitlabLogoSimpleLight } from "../light";
import { GitlabLogoSimpleRegular } from "../regular";
import { GitlabLogoSimpleThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const GitlabLogoSimple = memo(function GitlabLogoSimple(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: GitlabLogoSimpleBold,
      duotone: GitlabLogoSimpleDuotone,
      fill: GitlabLogoSimpleFill,
      light: GitlabLogoSimpleLight,
      regular: GitlabLogoSimpleRegular,
      thin: GitlabLogoSimpleThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
