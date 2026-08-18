import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { FolderSimpleMinusBoldIcon } from "../bold/folder-simple-minus-bold.icon";
import { FolderSimpleMinusDuotoneIcon } from "../duotone/folder-simple-minus-duotone.icon";
import { FolderSimpleMinusFillIcon } from "../fill/folder-simple-minus-fill.icon";
import { FolderSimpleMinusLightIcon } from "../light/folder-simple-minus-light.icon";
import { FolderSimpleMinusRegularIcon } from "../regular/folder-simple-minus-regular.icon";
import { FolderSimpleMinusThinIcon } from "../thin/folder-simple-minus-thin.icon";

export const FolderSimpleMinusIcon = memo(function FolderSimpleMinus(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FolderSimpleMinusBoldIcon,
      duotone: FolderSimpleMinusDuotoneIcon,
      fill: FolderSimpleMinusFillIcon,
      light: FolderSimpleMinusLightIcon,
      regular: FolderSimpleMinusRegularIcon,
      thin: FolderSimpleMinusThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
