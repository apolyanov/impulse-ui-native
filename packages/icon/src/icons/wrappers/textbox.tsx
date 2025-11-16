import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { TextboxBold } from "../bold";
import { TextboxDuotone } from "../duotone";
import { TextboxFill } from "../fill";
import { TextboxLight } from "../light";
import { TextboxRegular } from "../regular";
import { TextboxThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Textbox = memo(function Textbox(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TextboxBold,
      duotone: TextboxDuotone,
      fill: TextboxFill,
      light: TextboxLight,
      regular: TextboxRegular,
      thin: TextboxThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
