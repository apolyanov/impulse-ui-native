import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { HandPalmBoldIcon } from "../bold/hand-palm-bold.icon";
import { HandPalmDuotoneIcon } from "../duotone/hand-palm-duotone.icon";
import { HandPalmFillIcon } from "../fill/hand-palm-fill.icon";
import { HandPalmLightIcon } from "../light/hand-palm-light.icon";
import { HandPalmRegularIcon } from "../regular/hand-palm-regular.icon";
import { HandPalmThinIcon } from "../thin/hand-palm-thin.icon";

export const HandPalmIcon = memo(function HandPalm(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: HandPalmBoldIcon,
      duotone: HandPalmDuotoneIcon,
      fill: HandPalmFillIcon,
      light: HandPalmLightIcon,
      regular: HandPalmRegularIcon,
      thin: HandPalmThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
