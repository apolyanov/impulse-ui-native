import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { MatrixLogoBoldIcon } from "../bold";
import { MatrixLogoDuotoneIcon } from "../duotone";
import { MatrixLogoFillIcon } from "../fill";
import { MatrixLogoLightIcon } from "../light";
import { MatrixLogoRegularIcon } from "../regular";
import { MatrixLogoThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const MatrixLogoIcon = memo(function MatrixLogo(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: MatrixLogoBoldIcon,
      duotone: MatrixLogoDuotoneIcon,
      fill: MatrixLogoFillIcon,
      light: MatrixLogoLightIcon,
      regular: MatrixLogoRegularIcon,
      thin: MatrixLogoThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
