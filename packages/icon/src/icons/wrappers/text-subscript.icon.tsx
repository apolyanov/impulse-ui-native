import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { TextSubscriptBoldIcon } from "../bold";
import { TextSubscriptDuotoneIcon } from "../duotone";
import { TextSubscriptFillIcon } from "../fill";
import { TextSubscriptLightIcon } from "../light";
import { TextSubscriptRegularIcon } from "../regular";
import { TextSubscriptThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const TextSubscriptIcon = memo(function TextSubscript(
  props: IconWrapperProps
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
