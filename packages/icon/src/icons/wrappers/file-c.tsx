import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { FileCBold } from "../bold";
import { FileCDuotone } from "../duotone";
import { FileCFill } from "../fill";
import { FileCLight } from "../light";
import { FileCRegular } from "../regular";
import { FileCThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const FileC = memo(function FileC(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FileCBold,
      duotone: FileCDuotone,
      fill: FileCFill,
      light: FileCLight,
      regular: FileCRegular,
      thin: FileCThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
