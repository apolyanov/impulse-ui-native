import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { SkypeLogoBoldIcon } from "../bold/skype-logo-bold.icon";
import { SkypeLogoDuotoneIcon } from "../duotone/skype-logo-duotone.icon";
import { SkypeLogoFillIcon } from "../fill/skype-logo-fill.icon";
import { SkypeLogoLightIcon } from "../light/skype-logo-light.icon";
import { SkypeLogoRegularIcon } from "../regular/skype-logo-regular.icon";
import { SkypeLogoThinIcon } from "../thin/skype-logo-thin.icon";

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
