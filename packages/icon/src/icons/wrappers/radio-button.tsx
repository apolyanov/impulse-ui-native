import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { RadioButtonBold } from "../bold";
import { RadioButtonDuotone } from "../duotone";
import { RadioButtonFill } from "../fill";
import { RadioButtonLight } from "../light";
import { RadioButtonRegular } from "../regular";
import { RadioButtonThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const RadioButton = memo(function RadioButton(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: RadioButtonBold,
      duotone: RadioButtonDuotone,
      fill: RadioButtonFill,
      light: RadioButtonLight,
      regular: RadioButtonRegular,
      thin: RadioButtonThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
