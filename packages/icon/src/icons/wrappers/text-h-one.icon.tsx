import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { TextHOneBoldIcon } from "../bold/text-h-one-bold.icon";
import { TextHOneDuotoneIcon } from "../duotone/text-h-one-duotone.icon";
import { TextHOneFillIcon } from "../fill/text-h-one-fill.icon";
import { TextHOneLightIcon } from "../light/text-h-one-light.icon";
import { TextHOneRegularIcon } from "../regular/text-h-one-regular.icon";
import { TextHOneThinIcon } from "../thin/text-h-one-thin.icon";

export const TextHOneIcon = memo(function TextHOne(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TextHOneBoldIcon,
      duotone: TextHOneDuotoneIcon,
      fill: TextHOneFillIcon,
      light: TextHOneLightIcon,
      regular: TextHOneRegularIcon,
      thin: TextHOneThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
