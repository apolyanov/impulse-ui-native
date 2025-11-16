import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { PencilSimpleLineBold } from "../bold";
import { PencilSimpleLineDuotone } from "../duotone";
import { PencilSimpleLineFill } from "../fill";
import { PencilSimpleLineLight } from "../light";
import { PencilSimpleLineRegular } from "../regular";
import { PencilSimpleLineThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const PencilSimpleLine = memo(function PencilSimpleLine(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PencilSimpleLineBold,
      duotone: PencilSimpleLineDuotone,
      fill: PencilSimpleLineFill,
      light: PencilSimpleLineLight,
      regular: PencilSimpleLineRegular,
      thin: PencilSimpleLineThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
