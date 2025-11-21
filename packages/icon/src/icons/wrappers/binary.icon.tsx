import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { BinaryBoldIcon } from "../bold";
import { BinaryDuotoneIcon } from "../duotone";
import { BinaryFillIcon } from "../fill";
import { BinaryLightIcon } from "../light";
import { BinaryRegularIcon } from "../regular";
import { BinaryThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const BinaryIcon = memo(function Binary(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BinaryBoldIcon,
      duotone: BinaryDuotoneIcon,
      fill: BinaryFillIcon,
      light: BinaryLightIcon,
      regular: BinaryRegularIcon,
      thin: BinaryThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
