import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { FileArrowUpBoldIcon } from "../bold";
import { FileArrowUpDuotoneIcon } from "../duotone";
import { FileArrowUpFillIcon } from "../fill";
import { FileArrowUpLightIcon } from "../light";
import { FileArrowUpRegularIcon } from "../regular";
import { FileArrowUpThinIcon } from "../thin";

export const FileArrowUpIcon = memo(function FileArrowUp(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FileArrowUpBoldIcon,
      duotone: FileArrowUpDuotoneIcon,
      fill: FileArrowUpFillIcon,
      light: FileArrowUpLightIcon,
      regular: FileArrowUpRegularIcon,
      thin: FileArrowUpThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
