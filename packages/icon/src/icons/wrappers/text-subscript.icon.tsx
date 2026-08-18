import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { TextSubscriptBoldIcon } from "../bold/text-subscript-bold.icon";
import { TextSubscriptDuotoneIcon } from "../duotone/text-subscript-duotone.icon";
import { TextSubscriptFillIcon } from "../fill/text-subscript-fill.icon";
import { TextSubscriptLightIcon } from "../light/text-subscript-light.icon";
import { TextSubscriptRegularIcon } from "../regular/text-subscript-regular.icon";
import { TextSubscriptThinIcon } from "../thin/text-subscript-thin.icon";

export const TextSubscriptIcon = memo(function TextSubscript(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TextSubscriptBoldIcon,
      duotone: TextSubscriptDuotoneIcon,
      fill: TextSubscriptFillIcon,
      light: TextSubscriptLightIcon,
      regular: TextSubscriptRegularIcon,
      thin: TextSubscriptThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
