import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { SkypeLogoBold } from "../bold";
import { SkypeLogoDuotone } from "../duotone";
import { SkypeLogoFill } from "../fill";
import { SkypeLogoLight } from "../light";
import { SkypeLogoRegular } from "../regular";
import { SkypeLogoThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const SkypeLogo = memo(function SkypeLogo(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SkypeLogoBold,
      duotone: SkypeLogoDuotone,
      fill: SkypeLogoFill,
      light: SkypeLogoLight,
      regular: SkypeLogoRegular,
      thin: SkypeLogoThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
