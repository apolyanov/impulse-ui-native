import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { RadioButtonBoldIcon } from "../bold/radio-button-bold.icon";
import { RadioButtonDuotoneIcon } from "../duotone/radio-button-duotone.icon";
import { RadioButtonFillIcon } from "../fill/radio-button-fill.icon";
import { RadioButtonLightIcon } from "../light/radio-button-light.icon";
import { RadioButtonRegularIcon } from "../regular/radio-button-regular.icon";
import { RadioButtonThinIcon } from "../thin/radio-button-thin.icon";

export const RadioButtonIcon = memo(function RadioButton(
  props: IconWrapperProps,
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
