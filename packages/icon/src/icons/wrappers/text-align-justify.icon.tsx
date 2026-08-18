import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { TextAlignJustifyBoldIcon } from "../bold/text-align-justify-bold.icon";
import { TextAlignJustifyDuotoneIcon } from "../duotone/text-align-justify-duotone.icon";
import { TextAlignJustifyFillIcon } from "../fill/text-align-justify-fill.icon";
import { TextAlignJustifyLightIcon } from "../light/text-align-justify-light.icon";
import { TextAlignJustifyRegularIcon } from "../regular/text-align-justify-regular.icon";
import { TextAlignJustifyThinIcon } from "../thin/text-align-justify-thin.icon";

export const TextAlignJustifyIcon = memo(function TextAlignJustify(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TextAlignJustifyBoldIcon,
      duotone: TextAlignJustifyDuotoneIcon,
      fill: TextAlignJustifyFillIcon,
      light: TextAlignJustifyLightIcon,
      regular: TextAlignJustifyRegularIcon,
      thin: TextAlignJustifyThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
