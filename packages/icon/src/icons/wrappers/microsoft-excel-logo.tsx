import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { MicrosoftExcelLogoBold } from "../bold";
import { MicrosoftExcelLogoDuotone } from "../duotone";
import { MicrosoftExcelLogoFill } from "../fill";
import { MicrosoftExcelLogoLight } from "../light";
import { MicrosoftExcelLogoRegular } from "../regular";
import { MicrosoftExcelLogoThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const MicrosoftExcelLogo = memo(function MicrosoftExcelLogo(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: MicrosoftExcelLogoBold,
      duotone: MicrosoftExcelLogoDuotone,
      fill: MicrosoftExcelLogoFill,
      light: MicrosoftExcelLogoLight,
      regular: MicrosoftExcelLogoRegular,
      thin: MicrosoftExcelLogoThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
