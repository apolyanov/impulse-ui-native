import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { FileMdBoldIcon } from "../bold/file-md-bold.icon";
import { FileMdDuotoneIcon } from "../duotone/file-md-duotone.icon";
import { FileMdFillIcon } from "../fill/file-md-fill.icon";
import { FileMdLightIcon } from "../light/file-md-light.icon";
import { FileMdRegularIcon } from "../regular/file-md-regular.icon";
import { FileMdThinIcon } from "../thin/file-md-thin.icon";

export const FileMdIcon = memo(function FileMd(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FileMdBoldIcon,
      duotone: FileMdDuotoneIcon,
      fill: FileMdFillIcon,
      light: FileMdLightIcon,
      regular: FileMdRegularIcon,
      thin: FileMdThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
