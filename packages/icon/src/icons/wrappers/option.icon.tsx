import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { OptionBoldIcon } from "../bold/option-bold.icon";
import { OptionDuotoneIcon } from "../duotone/option-duotone.icon";
import { OptionFillIcon } from "../fill/option-fill.icon";
import { OptionLightIcon } from "../light/option-light.icon";
import { OptionRegularIcon } from "../regular/option-regular.icon";
import { OptionThinIcon } from "../thin/option-thin.icon";

export const OptionIcon = memo(function Option(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: OptionBoldIcon,
      duotone: OptionDuotoneIcon,
      fill: OptionFillIcon,
      light: OptionLightIcon,
      regular: OptionRegularIcon,
      thin: OptionThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
