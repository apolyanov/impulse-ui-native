import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { FileArrowUpBold } from "../bold";
import { FileArrowUpDuotone } from "../duotone";
import { FileArrowUpFill } from "../fill";
import { FileArrowUpLight } from "../light";
import { FileArrowUpRegular } from "../regular";
import { FileArrowUpThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const FileArrowUp = memo(function FileArrowUp(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FileArrowUpBold,
      duotone: FileArrowUpDuotone,
      fill: FileArrowUpFill,
      light: FileArrowUpLight,
      regular: FileArrowUpRegular,
      thin: FileArrowUpThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
