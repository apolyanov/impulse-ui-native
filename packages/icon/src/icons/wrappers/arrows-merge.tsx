import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ArrowsMergeBold } from "../bold";
import { ArrowsMergeDuotone } from "../duotone";
import { ArrowsMergeFill } from "../fill";
import { ArrowsMergeLight } from "../light";
import { ArrowsMergeRegular } from "../regular";
import { ArrowsMergeThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ArrowsMerge = memo(function ArrowsMerge(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowsMergeBold,
      duotone: ArrowsMergeDuotone,
      fill: ArrowsMergeFill,
      light: ArrowsMergeLight,
      regular: ArrowsMergeRegular,
      thin: ArrowsMergeThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
