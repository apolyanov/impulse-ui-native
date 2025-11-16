import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { TextSubscriptBold } from "../bold";
import { TextSubscriptDuotone } from "../duotone";
import { TextSubscriptFill } from "../fill";
import { TextSubscriptLight } from "../light";
import { TextSubscriptRegular } from "../regular";
import { TextSubscriptThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const TextSubscript = memo(function TextSubscript(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TextSubscriptBold,
      duotone: TextSubscriptDuotone,
      fill: TextSubscriptFill,
      light: TextSubscriptLight,
      regular: TextSubscriptRegular,
      thin: TextSubscriptThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
