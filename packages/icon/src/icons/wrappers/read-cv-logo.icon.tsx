import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ReadCvLogoBoldIcon } from "../bold/read-cv-logo-bold.icon";
import { ReadCvLogoDuotoneIcon } from "../duotone/read-cv-logo-duotone.icon";
import { ReadCvLogoFillIcon } from "../fill/read-cv-logo-fill.icon";
import { ReadCvLogoLightIcon } from "../light/read-cv-logo-light.icon";
import { ReadCvLogoRegularIcon } from "../regular/read-cv-logo-regular.icon";
import { ReadCvLogoThinIcon } from "../thin/read-cv-logo-thin.icon";

export const ReadCvLogoIcon = memo(function ReadCvLogo(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ReadCvLogoBoldIcon,
      duotone: ReadCvLogoDuotoneIcon,
      fill: ReadCvLogoFillIcon,
      light: ReadCvLogoLightIcon,
      regular: ReadCvLogoRegularIcon,
      thin: ReadCvLogoThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
