import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { RadioButtonBoldIcon } from "../bold";
import { RadioButtonDuotoneIcon } from "../duotone";
import { RadioButtonFillIcon } from "../fill";
import { RadioButtonLightIcon } from "../light";
import { RadioButtonRegularIcon } from "../regular";
import { RadioButtonThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const RadioButtonIcon = memo(function RadioButton(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: RadioButtonBoldIcon,
      duotone: RadioButtonDuotoneIcon,
      fill: RadioButtonFillIcon,
      light: RadioButtonLightIcon,
      regular: RadioButtonRegularIcon,
      thin: RadioButtonThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
