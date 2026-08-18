import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { PipeWrenchBoldIcon } from "../bold/pipe-wrench-bold.icon";
import { PipeWrenchDuotoneIcon } from "../duotone/pipe-wrench-duotone.icon";
import { PipeWrenchFillIcon } from "../fill/pipe-wrench-fill.icon";
import { PipeWrenchLightIcon } from "../light/pipe-wrench-light.icon";
import { PipeWrenchRegularIcon } from "../regular/pipe-wrench-regular.icon";
import { PipeWrenchThinIcon } from "../thin/pipe-wrench-thin.icon";

export const PipeWrenchIcon = memo(function PipeWrench(
  props: IconWrapperProps,
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
