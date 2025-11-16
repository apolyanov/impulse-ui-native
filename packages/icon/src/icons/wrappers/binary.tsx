import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { BinaryBold } from "../bold";
import { BinaryDuotone } from "../duotone";
import { BinaryFill } from "../fill";
import { BinaryLight } from "../light";
import { BinaryRegular } from "../regular";
import { BinaryThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Binary = memo(function Binary(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BinaryBold,
      duotone: BinaryDuotone,
      fill: BinaryFill,
      light: BinaryLight,
      regular: BinaryRegular,
      thin: BinaryThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
