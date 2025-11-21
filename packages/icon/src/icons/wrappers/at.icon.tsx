import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { AtBoldIcon } from "../bold";
import { AtDuotoneIcon } from "../duotone";
import { AtFillIcon } from "../fill";
import { AtLightIcon } from "../light";
import { AtRegularIcon } from "../regular";
import { AtThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

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
