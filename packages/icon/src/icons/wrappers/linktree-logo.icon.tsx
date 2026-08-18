import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { LinktreeLogoBoldIcon } from "../bold/linktree-logo-bold.icon";
import { LinktreeLogoDuotoneIcon } from "../duotone/linktree-logo-duotone.icon";
import { LinktreeLogoFillIcon } from "../fill/linktree-logo-fill.icon";
import { LinktreeLogoLightIcon } from "../light/linktree-logo-light.icon";
import { LinktreeLogoRegularIcon } from "../regular/linktree-logo-regular.icon";
import { LinktreeLogoThinIcon } from "../thin/linktree-logo-thin.icon";

export const LinktreeLogoIcon = memo(function LinktreeLogo(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: LinktreeLogoBoldIcon,
      duotone: LinktreeLogoDuotoneIcon,
      fill: LinktreeLogoFillIcon,
      light: LinktreeLogoLightIcon,
      regular: LinktreeLogoRegularIcon,
      thin: LinktreeLogoThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
