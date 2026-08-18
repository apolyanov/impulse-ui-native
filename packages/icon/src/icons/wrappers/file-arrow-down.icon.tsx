import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { FileArrowDownBoldIcon } from "../bold/file-arrow-down-bold.icon";
import { FileArrowDownDuotoneIcon } from "../duotone/file-arrow-down-duotone.icon";
import { FileArrowDownFillIcon } from "../fill/file-arrow-down-fill.icon";
import { FileArrowDownLightIcon } from "../light/file-arrow-down-light.icon";
import { FileArrowDownRegularIcon } from "../regular/file-arrow-down-regular.icon";
import { FileArrowDownThinIcon } from "../thin/file-arrow-down-thin.icon";

export const FileArrowDownIcon = memo(function FileArrowDown(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FileArrowDownBoldIcon,
      duotone: FileArrowDownDuotoneIcon,
      fill: FileArrowDownFillIcon,
      light: FileArrowDownLightIcon,
      regular: FileArrowDownRegularIcon,
      thin: FileArrowDownThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
