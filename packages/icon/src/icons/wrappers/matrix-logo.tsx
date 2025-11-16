import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { MatrixLogoBold } from "../bold";
import { MatrixLogoDuotone } from "../duotone";
import { MatrixLogoFill } from "../fill";
import { MatrixLogoLight } from "../light";
import { MatrixLogoRegular } from "../regular";
import { MatrixLogoThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const MatrixLogo = memo(function MatrixLogo(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: MatrixLogoBold,
      duotone: MatrixLogoDuotone,
      fill: MatrixLogoFill,
      light: MatrixLogoLight,
      regular: MatrixLogoRegular,
      thin: MatrixLogoThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
