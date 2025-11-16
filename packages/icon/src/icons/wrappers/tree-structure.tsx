import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { TreeStructureBold } from "../bold";
import { TreeStructureDuotone } from "../duotone";
import { TreeStructureFill } from "../fill";
import { TreeStructureLight } from "../light";
import { TreeStructureRegular } from "../regular";
import { TreeStructureThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const TreeStructure = memo(function TreeStructure(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TreeStructureBold,
      duotone: TreeStructureDuotone,
      fill: TreeStructureFill,
      light: TreeStructureLight,
      regular: TreeStructureRegular,
      thin: TreeStructureThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
