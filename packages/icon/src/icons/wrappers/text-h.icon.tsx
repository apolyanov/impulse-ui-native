import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { TextHBoldIcon } from "../bold";
import { TextHDuotoneIcon } from "../duotone";
import { TextHFillIcon } from "../fill";
import { TextHLightIcon } from "../light";
import { TextHRegularIcon } from "../regular";
import { TextHThinIcon } from "../thin";

export const TextHIcon = memo(function TextH(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TextHBoldIcon,
      duotone: TextHDuotoneIcon,
      fill: TextHFillIcon,
      light: TextHLightIcon,
      regular: TextHRegularIcon,
      thin: TextHThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
