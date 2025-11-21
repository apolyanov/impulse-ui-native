import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { TextboxBoldIcon } from "../bold";
import { TextboxDuotoneIcon } from "../duotone";
import { TextboxFillIcon } from "../fill";
import { TextboxLightIcon } from "../light";
import { TextboxRegularIcon } from "../regular";
import { TextboxThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

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
