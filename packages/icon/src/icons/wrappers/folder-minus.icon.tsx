import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { FolderMinusBoldIcon } from "../bold/folder-minus-bold.icon";
import { FolderMinusDuotoneIcon } from "../duotone/folder-minus-duotone.icon";
import { FolderMinusFillIcon } from "../fill/folder-minus-fill.icon";
import { FolderMinusLightIcon } from "../light/folder-minus-light.icon";
import { FolderMinusRegularIcon } from "../regular/folder-minus-regular.icon";
import { FolderMinusThinIcon } from "../thin/folder-minus-thin.icon";

export const FolderMinusIcon = memo(function FolderMinus(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FolderMinusBoldIcon,
      duotone: FolderMinusDuotoneIcon,
      fill: FolderMinusFillIcon,
      light: FolderMinusLightIcon,
      regular: FolderMinusRegularIcon,
      thin: FolderMinusThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
