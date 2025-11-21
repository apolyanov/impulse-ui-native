import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { PipeWrenchBoldIcon } from "../bold";
import { PipeWrenchDuotoneIcon } from "../duotone";
import { PipeWrenchFillIcon } from "../fill";
import { PipeWrenchLightIcon } from "../light";
import { PipeWrenchRegularIcon } from "../regular";
import { PipeWrenchThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const PipeWrenchIcon = memo(function PipeWrench(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PipeWrenchBoldIcon,
      duotone: PipeWrenchDuotoneIcon,
      fill: PipeWrenchFillIcon,
      light: PipeWrenchLightIcon,
      regular: PipeWrenchRegularIcon,
      thin: PipeWrenchThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
