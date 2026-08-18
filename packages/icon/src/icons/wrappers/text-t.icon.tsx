import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { TextTBoldIcon } from "../bold/text-t-bold.icon";
import { TextTDuotoneIcon } from "../duotone/text-t-duotone.icon";
import { TextTFillIcon } from "../fill/text-t-fill.icon";
import { TextTLightIcon } from "../light/text-t-light.icon";
import { TextTRegularIcon } from "../regular/text-t-regular.icon";
import { TextTThinIcon } from "../thin/text-t-thin.icon";

export const TextTIcon = memo(function TextT(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TextTBoldIcon,
      duotone: TextTDuotoneIcon,
      fill: TextTFillIcon,
      light: TextTLightIcon,
      regular: TextTRegularIcon,
      thin: TextTThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
