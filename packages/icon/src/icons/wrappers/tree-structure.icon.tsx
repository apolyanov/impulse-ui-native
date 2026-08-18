import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { TreeStructureBoldIcon } from "../bold/tree-structure-bold.icon";
import { TreeStructureDuotoneIcon } from "../duotone/tree-structure-duotone.icon";
import { TreeStructureFillIcon } from "../fill/tree-structure-fill.icon";
import { TreeStructureLightIcon } from "../light/tree-structure-light.icon";
import { TreeStructureRegularIcon } from "../regular/tree-structure-regular.icon";
import { TreeStructureThinIcon } from "../thin/tree-structure-thin.icon";

export const TreeStructureIcon = memo(function TreeStructure(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TreeStructureBoldIcon,
      duotone: TreeStructureDuotoneIcon,
      fill: TreeStructureFillIcon,
      light: TreeStructureLightIcon,
      regular: TreeStructureRegularIcon,
      thin: TreeStructureThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
