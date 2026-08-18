import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CloudMoonBoldIcon } from "../bold/cloud-moon-bold.icon";
import { CloudMoonDuotoneIcon } from "../duotone/cloud-moon-duotone.icon";
import { CloudMoonFillIcon } from "../fill/cloud-moon-fill.icon";
import { CloudMoonLightIcon } from "../light/cloud-moon-light.icon";
import { CloudMoonRegularIcon } from "../regular/cloud-moon-regular.icon";
import { CloudMoonThinIcon } from "../thin/cloud-moon-thin.icon";

export const CloudMoonIcon = memo(function CloudMoon(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CloudMoonBoldIcon,
      duotone: CloudMoonDuotoneIcon,
      fill: CloudMoonFillIcon,
      light: CloudMoonLightIcon,
      regular: CloudMoonRegularIcon,
      thin: CloudMoonThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
