import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { TreeEvergreenBold } from "../bold";
import { TreeEvergreenDuotone } from "../duotone";
import { TreeEvergreenFill } from "../fill";
import { TreeEvergreenLight } from "../light";
import { TreeEvergreenRegular } from "../regular";
import { TreeEvergreenThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const TreeEvergreen = memo(function TreeEvergreen(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TreeEvergreenBold,
      duotone: TreeEvergreenDuotone,
      fill: TreeEvergreenFill,
      light: TreeEvergreenLight,
      regular: TreeEvergreenRegular,
      thin: TreeEvergreenThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
