import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { FileArrowDownBold } from "../bold";
import { FileArrowDownDuotone } from "../duotone";
import { FileArrowDownFill } from "../fill";
import { FileArrowDownLight } from "../light";
import { FileArrowDownRegular } from "../regular";
import { FileArrowDownThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const FileArrowDown = memo(function FileArrowDown(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FileArrowDownBold,
      duotone: FileArrowDownDuotone,
      fill: FileArrowDownFill,
      light: FileArrowDownLight,
      regular: FileArrowDownRegular,
      thin: FileArrowDownThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
