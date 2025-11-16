import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { PipeWrenchBold } from "../bold";
import { PipeWrenchDuotone } from "../duotone";
import { PipeWrenchFill } from "../fill";
import { PipeWrenchLight } from "../light";
import { PipeWrenchRegular } from "../regular";
import { PipeWrenchThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const PipeWrench = memo(function PipeWrench(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PipeWrenchBold,
      duotone: PipeWrenchDuotone,
      fill: PipeWrenchFill,
      light: PipeWrenchLight,
      regular: PipeWrenchRegular,
      thin: PipeWrenchThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
