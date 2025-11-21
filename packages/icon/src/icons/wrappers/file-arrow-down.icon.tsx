import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { FileArrowDownBoldIcon } from "../bold";
import { FileArrowDownDuotoneIcon } from "../duotone";
import { FileArrowDownFillIcon } from "../fill";
import { FileArrowDownLightIcon } from "../light";
import { FileArrowDownRegularIcon } from "../regular";
import { FileArrowDownThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const FileArrowDownIcon = memo(function FileArrowDown(
  props: IconWrapperProps
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
