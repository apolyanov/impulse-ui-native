import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { MicrosoftExcelLogoBoldIcon } from "../bold/microsoft-excel-logo-bold.icon";
import { MicrosoftExcelLogoDuotoneIcon } from "../duotone/microsoft-excel-logo-duotone.icon";
import { MicrosoftExcelLogoFillIcon } from "../fill/microsoft-excel-logo-fill.icon";
import { MicrosoftExcelLogoLightIcon } from "../light/microsoft-excel-logo-light.icon";
import { MicrosoftExcelLogoRegularIcon } from "../regular/microsoft-excel-logo-regular.icon";
import { MicrosoftExcelLogoThinIcon } from "../thin/microsoft-excel-logo-thin.icon";

export const MicrosoftExcelLogoIcon = memo(function MicrosoftExcelLogo(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: MicrosoftExcelLogoBoldIcon,
      duotone: MicrosoftExcelLogoDuotoneIcon,
      fill: MicrosoftExcelLogoFillIcon,
      light: MicrosoftExcelLogoLightIcon,
      regular: MicrosoftExcelLogoRegularIcon,
      thin: MicrosoftExcelLogoThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
