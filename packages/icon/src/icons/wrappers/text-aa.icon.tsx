import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { TextAaBoldIcon } from "../bold/text-aa-bold.icon";
import { TextAaDuotoneIcon } from "../duotone/text-aa-duotone.icon";
import { TextAaFillIcon } from "../fill/text-aa-fill.icon";
import { TextAaLightIcon } from "../light/text-aa-light.icon";
import { TextAaRegularIcon } from "../regular/text-aa-regular.icon";
import { TextAaThinIcon } from "../thin/text-aa-thin.icon";

export const TextAaIcon = memo(function TextAa(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TextAaBoldIcon,
      duotone: TextAaDuotoneIcon,
      fill: TextAaFillIcon,
      light: TextAaLightIcon,
      regular: TextAaRegularIcon,
      thin: TextAaThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
