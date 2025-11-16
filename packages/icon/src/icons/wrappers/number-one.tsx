import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { NumberOneBold } from "../bold";
import { NumberOneDuotone } from "../duotone";
import { NumberOneFill } from "../fill";
import { NumberOneLight } from "../light";
import { NumberOneRegular } from "../regular";
import { NumberOneThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const NumberOne = memo(function NumberOne(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: NumberOneBold,
      duotone: NumberOneDuotone,
      fill: NumberOneFill,
      light: NumberOneLight,
      regular: NumberOneRegular,
      thin: NumberOneThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
