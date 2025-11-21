import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { TextHTwoBoldIcon } from "../bold";
import { TextHTwoDuotoneIcon } from "../duotone";
import { TextHTwoFillIcon } from "../fill";
import { TextHTwoLightIcon } from "../light";
import { TextHTwoRegularIcon } from "../regular";
import { TextHTwoThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const TextHTwoIcon = memo(function TextHTwo(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TextHTwoBoldIcon,
      duotone: TextHTwoDuotoneIcon,
      fill: TextHTwoFillIcon,
      light: TextHTwoLightIcon,
      regular: TextHTwoRegularIcon,
      thin: TextHTwoThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
