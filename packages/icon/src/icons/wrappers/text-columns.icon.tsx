import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { TextColumnsBoldIcon } from "../bold/text-columns-bold.icon";
import { TextColumnsDuotoneIcon } from "../duotone/text-columns-duotone.icon";
import { TextColumnsFillIcon } from "../fill/text-columns-fill.icon";
import { TextColumnsLightIcon } from "../light/text-columns-light.icon";
import { TextColumnsRegularIcon } from "../regular/text-columns-regular.icon";
import { TextColumnsThinIcon } from "../thin/text-columns-thin.icon";

export const TextColumnsIcon = memo(function TextColumns(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TextColumnsBoldIcon,
      duotone: TextColumnsDuotoneIcon,
      fill: TextColumnsFillIcon,
      light: TextColumnsLightIcon,
      regular: TextColumnsRegularIcon,
      thin: TextColumnsThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
