import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { TranslateBoldIcon } from "../bold/translate-bold.icon";
import { TranslateDuotoneIcon } from "../duotone/translate-duotone.icon";
import { TranslateFillIcon } from "../fill/translate-fill.icon";
import { TranslateLightIcon } from "../light/translate-light.icon";
import { TranslateRegularIcon } from "../regular/translate-regular.icon";
import { TranslateThinIcon } from "../thin/translate-thin.icon";

export const TranslateIcon = memo(function Translate(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TranslateBoldIcon,
      duotone: TranslateDuotoneIcon,
      fill: TranslateFillIcon,
      light: TranslateLightIcon,
      regular: TranslateRegularIcon,
      thin: TranslateThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
