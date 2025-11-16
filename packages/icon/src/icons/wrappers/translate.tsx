import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { TranslateBold } from "../bold";
import { TranslateDuotone } from "../duotone";
import { TranslateFill } from "../fill";
import { TranslateLight } from "../light";
import { TranslateRegular } from "../regular";
import { TranslateThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Translate = memo(function Translate(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TranslateBold,
      duotone: TranslateDuotone,
      fill: TranslateFill,
      light: TranslateLight,
      regular: TranslateRegular,
      thin: TranslateThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
