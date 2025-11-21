import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { TreeEvergreenBoldIcon } from "../bold";
import { TreeEvergreenDuotoneIcon } from "../duotone";
import { TreeEvergreenFillIcon } from "../fill";
import { TreeEvergreenLightIcon } from "../light";
import { TreeEvergreenRegularIcon } from "../regular";
import { TreeEvergreenThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const TreeEvergreenIcon = memo(function TreeEvergreen(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TreeEvergreenBoldIcon,
      duotone: TreeEvergreenDuotoneIcon,
      fill: TreeEvergreenFillIcon,
      light: TreeEvergreenLightIcon,
      regular: TreeEvergreenRegularIcon,
      thin: TreeEvergreenThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
