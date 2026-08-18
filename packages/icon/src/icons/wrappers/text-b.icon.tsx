import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { TextBBoldIcon } from "../bold/text-b-bold.icon";
import { TextBDuotoneIcon } from "../duotone/text-b-duotone.icon";
import { TextBFillIcon } from "../fill/text-b-fill.icon";
import { TextBLightIcon } from "../light/text-b-light.icon";
import { TextBRegularIcon } from "../regular/text-b-regular.icon";
import { TextBThinIcon } from "../thin/text-b-thin.icon";

export const TextBIcon = memo(function TextB(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TextBBoldIcon,
      duotone: TextBDuotoneIcon,
      fill: TextBFillIcon,
      light: TextBLightIcon,
      regular: TextBRegularIcon,
      thin: TextBThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
