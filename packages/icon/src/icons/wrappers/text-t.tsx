import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { TextTBold } from "../bold";
import { TextTDuotone } from "../duotone";
import { TextTFill } from "../fill";
import { TextTLight } from "../light";
import { TextTRegular } from "../regular";
import { TextTThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const TextT = memo(function TextT(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TextTBold,
      duotone: TextTDuotone,
      fill: TextTFill,
      light: TextTLight,
      regular: TextTRegular,
      thin: TextTThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
