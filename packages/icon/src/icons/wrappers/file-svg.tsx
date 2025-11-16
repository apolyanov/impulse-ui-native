import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { FileSvgBold } from "../bold";
import { FileSvgDuotone } from "../duotone";
import { FileSvgFill } from "../fill";
import { FileSvgLight } from "../light";
import { FileSvgRegular } from "../regular";
import { FileSvgThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const FileSvg = memo(function FileSvg(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FileSvgBold,
      duotone: FileSvgDuotone,
      fill: FileSvgFill,
      light: FileSvgLight,
      regular: FileSvgRegular,
      thin: FileSvgThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
