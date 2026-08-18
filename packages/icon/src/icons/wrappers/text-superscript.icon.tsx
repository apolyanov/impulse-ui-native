import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { TextSuperscriptBoldIcon } from "../bold/text-superscript-bold.icon";
import { TextSuperscriptDuotoneIcon } from "../duotone/text-superscript-duotone.icon";
import { TextSuperscriptFillIcon } from "../fill/text-superscript-fill.icon";
import { TextSuperscriptLightIcon } from "../light/text-superscript-light.icon";
import { TextSuperscriptRegularIcon } from "../regular/text-superscript-regular.icon";
import { TextSuperscriptThinIcon } from "../thin/text-superscript-thin.icon";

export const TextSuperscriptIcon = memo(function TextSuperscript(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TextSuperscriptBoldIcon,
      duotone: TextSuperscriptDuotoneIcon,
      fill: TextSuperscriptFillIcon,
      light: TextSuperscriptLightIcon,
      regular: TextSuperscriptRegularIcon,
      thin: TextSuperscriptThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
