import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { PencilLineBold } from "../bold";
import { PencilLineDuotone } from "../duotone";
import { PencilLineFill } from "../fill";
import { PencilLineLight } from "../light";
import { PencilLineRegular } from "../regular";
import { PencilLineThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const PencilLine = memo(function PencilLine(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PencilLineBold,
      duotone: PencilLineDuotone,
      fill: PencilLineFill,
      light: PencilLineLight,
      regular: PencilLineRegular,
      thin: PencilLineThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
