import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { TextUnderlineBoldIcon } from "../bold/text-underline-bold.icon";
import { TextUnderlineDuotoneIcon } from "../duotone/text-underline-duotone.icon";
import { TextUnderlineFillIcon } from "../fill/text-underline-fill.icon";
import { TextUnderlineLightIcon } from "../light/text-underline-light.icon";
import { TextUnderlineRegularIcon } from "../regular/text-underline-regular.icon";
import { TextUnderlineThinIcon } from "../thin/text-underline-thin.icon";

export const TextUnderlineIcon = memo(function TextUnderline(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TextUnderlineBoldIcon,
      duotone: TextUnderlineDuotoneIcon,
      fill: TextUnderlineFillIcon,
      light: TextUnderlineLightIcon,
      regular: TextUnderlineRegularIcon,
      thin: TextUnderlineThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
