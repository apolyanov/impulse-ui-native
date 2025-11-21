import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { LinktreeLogoBoldIcon } from "../bold";
import { LinktreeLogoDuotoneIcon } from "../duotone";
import { LinktreeLogoFillIcon } from "../fill";
import { LinktreeLogoLightIcon } from "../light";
import { LinktreeLogoRegularIcon } from "../regular";
import { LinktreeLogoThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const LinktreeLogoIcon = memo(function LinktreeLogo(
  props: IconWrapperProps
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
