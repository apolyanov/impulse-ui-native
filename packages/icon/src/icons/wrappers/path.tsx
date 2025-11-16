import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { PathBold } from "../bold";
import { PathDuotone } from "../duotone";
import { PathFill } from "../fill";
import { PathLight } from "../light";
import { PathRegular } from "../regular";
import { PathThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Path = memo(function Path(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PathBold,
      duotone: PathDuotone,
      fill: PathFill,
      light: PathLight,
      regular: PathRegular,
      thin: PathThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
