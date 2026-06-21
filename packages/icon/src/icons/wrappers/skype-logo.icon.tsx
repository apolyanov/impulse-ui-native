import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { SkypeLogoBoldIcon } from "../bold";
import { SkypeLogoDuotoneIcon } from "../duotone";
import { SkypeLogoFillIcon } from "../fill";
import { SkypeLogoLightIcon } from "../light";
import { SkypeLogoRegularIcon } from "../regular";
import { SkypeLogoThinIcon } from "../thin";

export const SkypeLogoIcon = memo(function SkypeLogo(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SkypeLogoBoldIcon,
      duotone: SkypeLogoDuotoneIcon,
      fill: SkypeLogoFillIcon,
      light: SkypeLogoLightIcon,
      regular: SkypeLogoRegularIcon,
      thin: SkypeLogoThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
