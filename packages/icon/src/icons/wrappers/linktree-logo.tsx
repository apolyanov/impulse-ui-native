import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { LinktreeLogoBold } from "../bold";
import { LinktreeLogoDuotone } from "../duotone";
import { LinktreeLogoFill } from "../fill";
import { LinktreeLogoLight } from "../light";
import { LinktreeLogoRegular } from "../regular";
import { LinktreeLogoThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const LinktreeLogo = memo(function LinktreeLogo(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: LinktreeLogoBold,
      duotone: LinktreeLogoDuotone,
      fill: LinktreeLogoFill,
      light: LinktreeLogoLight,
      regular: LinktreeLogoRegular,
      thin: LinktreeLogoThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
