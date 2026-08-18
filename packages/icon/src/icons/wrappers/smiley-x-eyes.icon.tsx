import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { SmileyXEyesBoldIcon } from "../bold/smiley-x-eyes-bold.icon";
import { SmileyXEyesDuotoneIcon } from "../duotone/smiley-x-eyes-duotone.icon";
import { SmileyXEyesFillIcon } from "../fill/smiley-x-eyes-fill.icon";
import { SmileyXEyesLightIcon } from "../light/smiley-x-eyes-light.icon";
import { SmileyXEyesRegularIcon } from "../regular/smiley-x-eyes-regular.icon";
import { SmileyXEyesThinIcon } from "../thin/smiley-x-eyes-thin.icon";

export const SmileyXEyesIcon = memo(function SmileyXEyes(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SmileyXEyesBoldIcon,
      duotone: SmileyXEyesDuotoneIcon,
      fill: SmileyXEyesFillIcon,
      light: SmileyXEyesLightIcon,
      regular: SmileyXEyesRegularIcon,
      thin: SmileyXEyesThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
