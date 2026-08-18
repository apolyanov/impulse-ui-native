import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { BinaryBoldIcon } from "../bold/binary-bold.icon";
import { BinaryDuotoneIcon } from "../duotone/binary-duotone.icon";
import { BinaryFillIcon } from "../fill/binary-fill.icon";
import { BinaryLightIcon } from "../light/binary-light.icon";
import { BinaryRegularIcon } from "../regular/binary-regular.icon";
import { BinaryThinIcon } from "../thin/binary-thin.icon";

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
