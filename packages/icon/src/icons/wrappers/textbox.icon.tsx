import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { TextboxBoldIcon } from "../bold/textbox-bold.icon";
import { TextboxDuotoneIcon } from "../duotone/textbox-duotone.icon";
import { TextboxFillIcon } from "../fill/textbox-fill.icon";
import { TextboxLightIcon } from "../light/textbox-light.icon";
import { TextboxRegularIcon } from "../regular/textbox-regular.icon";
import { TextboxThinIcon } from "../thin/textbox-thin.icon";

export const TextboxIcon = memo(function Textbox(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TextboxBoldIcon,
      duotone: TextboxDuotoneIcon,
      fill: TextboxFillIcon,
      light: TextboxLightIcon,
      regular: TextboxRegularIcon,
      thin: TextboxThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
