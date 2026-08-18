import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { PathBoldIcon } from "../bold/path-bold.icon";
import { PathDuotoneIcon } from "../duotone/path-duotone.icon";
import { PathFillIcon } from "../fill/path-fill.icon";
import { PathLightIcon } from "../light/path-light.icon";
import { PathRegularIcon } from "../regular/path-regular.icon";
import { PathThinIcon } from "../thin/path-thin.icon";

export const PathIcon = memo(function Path(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PathBoldIcon,
      duotone: PathDuotoneIcon,
      fill: PathFillIcon,
      light: PathLightIcon,
      regular: PathRegularIcon,
      thin: PathThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
