import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { FileDashedBoldIcon } from "../bold/file-dashed-bold.icon";
import { FileDashedDuotoneIcon } from "../duotone/file-dashed-duotone.icon";
import { FileDashedFillIcon } from "../fill/file-dashed-fill.icon";
import { FileDashedLightIcon } from "../light/file-dashed-light.icon";
import { FileDashedRegularIcon } from "../regular/file-dashed-regular.icon";
import { FileDashedThinIcon } from "../thin/file-dashed-thin.icon";

export const FileDashedIcon = memo(function FileDashed(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FileDashedBoldIcon,
      duotone: FileDashedDuotoneIcon,
      fill: FileDashedFillIcon,
      light: FileDashedLightIcon,
      regular: FileDashedRegularIcon,
      thin: FileDashedThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
