import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { MatrixLogoBoldIcon } from "../bold/matrix-logo-bold.icon";
import { MatrixLogoDuotoneIcon } from "../duotone/matrix-logo-duotone.icon";
import { MatrixLogoFillIcon } from "../fill/matrix-logo-fill.icon";
import { MatrixLogoLightIcon } from "../light/matrix-logo-light.icon";
import { MatrixLogoRegularIcon } from "../regular/matrix-logo-regular.icon";
import { MatrixLogoThinIcon } from "../thin/matrix-logo-thin.icon";

export const MatrixLogoIcon = memo(function MatrixLogo(
  props: IconWrapperProps,
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
