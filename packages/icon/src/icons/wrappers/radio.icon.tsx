import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { RadioBoldIcon } from "../bold/radio-bold.icon";
import { RadioDuotoneIcon } from "../duotone/radio-duotone.icon";
import { RadioFillIcon } from "../fill/radio-fill.icon";
import { RadioLightIcon } from "../light/radio-light.icon";
import { RadioRegularIcon } from "../regular/radio-regular.icon";
import { RadioThinIcon } from "../thin/radio-thin.icon";

export const RadioIcon = memo(function Radio(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: RadioBoldIcon,
      duotone: RadioDuotoneIcon,
      fill: RadioFillIcon,
      light: RadioLightIcon,
      regular: RadioRegularIcon,
      thin: RadioThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
