import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { EyesBold } from "../bold";
import { EyesDuotone } from "../duotone";
import { EyesFill } from "../fill";
import { EyesLight } from "../light";
import { EyesRegular } from "../regular";
import { EyesThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Eyes = memo(function Eyes(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: EyesBold,
      duotone: EyesDuotone,
      fill: EyesFill,
      light: EyesLight,
      regular: EyesRegular,
      thin: EyesThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
