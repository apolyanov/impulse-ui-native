import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ReadCvLogoBold } from "../bold";
import { ReadCvLogoDuotone } from "../duotone";
import { ReadCvLogoFill } from "../fill";
import { ReadCvLogoLight } from "../light";
import { ReadCvLogoRegular } from "../regular";
import { ReadCvLogoThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ReadCvLogo = memo(function ReadCvLogo(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ReadCvLogoBold,
      duotone: ReadCvLogoDuotone,
      fill: ReadCvLogoFill,
      light: ReadCvLogoLight,
      regular: ReadCvLogoRegular,
      thin: ReadCvLogoThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
