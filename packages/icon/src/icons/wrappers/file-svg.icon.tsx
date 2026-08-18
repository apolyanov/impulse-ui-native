import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { FileSvgBoldIcon } from "../bold/file-svg-bold.icon";
import { FileSvgDuotoneIcon } from "../duotone/file-svg-duotone.icon";
import { FileSvgFillIcon } from "../fill/file-svg-fill.icon";
import { FileSvgLightIcon } from "../light/file-svg-light.icon";
import { FileSvgRegularIcon } from "../regular/file-svg-regular.icon";
import { FileSvgThinIcon } from "../thin/file-svg-thin.icon";

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
