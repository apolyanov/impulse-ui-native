import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { RadioBold } from "../bold";
import { RadioDuotone } from "../duotone";
import { RadioFill } from "../fill";
import { RadioLight } from "../light";
import { RadioRegular } from "../regular";
import { RadioThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Radio = memo(function Radio(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: RadioBold,
      duotone: RadioDuotone,
      fill: RadioFill,
      light: RadioLight,
      regular: RadioRegular,
      thin: RadioThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
