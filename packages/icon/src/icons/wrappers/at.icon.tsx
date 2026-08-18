import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { AtBoldIcon } from "../bold/at-bold.icon";
import { AtDuotoneIcon } from "../duotone/at-duotone.icon";
import { AtFillIcon } from "../fill/at-fill.icon";
import { AtLightIcon } from "../light/at-light.icon";
import { AtRegularIcon } from "../regular/at-regular.icon";
import { AtThinIcon } from "../thin/at-thin.icon";

export const AtIcon = memo(function At(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: AtBoldIcon,
      duotone: AtDuotoneIcon,
      fill: AtFillIcon,
      light: AtLightIcon,
      regular: AtRegularIcon,
      thin: AtThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
