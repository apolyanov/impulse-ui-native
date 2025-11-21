import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { FileSvgBoldIcon } from "../bold";
import { FileSvgDuotoneIcon } from "../duotone";
import { FileSvgFillIcon } from "../fill";
import { FileSvgLightIcon } from "../light";
import { FileSvgRegularIcon } from "../regular";
import { FileSvgThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const FileSvgIcon = memo(function FileSvg(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FileSvgBoldIcon,
      duotone: FileSvgDuotoneIcon,
      fill: FileSvgFillIcon,
      light: FileSvgLightIcon,
      regular: FileSvgRegularIcon,
      thin: FileSvgThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
