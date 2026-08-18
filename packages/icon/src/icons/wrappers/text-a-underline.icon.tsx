import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { TextAUnderlineBoldIcon } from "../bold/text-a-underline-bold.icon";
import { TextAUnderlineDuotoneIcon } from "../duotone/text-a-underline-duotone.icon";
import { TextAUnderlineFillIcon } from "../fill/text-a-underline-fill.icon";
import { TextAUnderlineLightIcon } from "../light/text-a-underline-light.icon";
import { TextAUnderlineRegularIcon } from "../regular/text-a-underline-regular.icon";
import { TextAUnderlineThinIcon } from "../thin/text-a-underline-thin.icon";

export const TextAUnderlineIcon = memo(function TextAUnderline(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TextAUnderlineBoldIcon,
      duotone: TextAUnderlineDuotoneIcon,
      fill: TextAUnderlineFillIcon,
      light: TextAUnderlineLightIcon,
      regular: TextAUnderlineRegularIcon,
      thin: TextAUnderlineThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
