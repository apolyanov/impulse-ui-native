import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { TrashSimpleBold } from "../bold";
import { TrashSimpleDuotone } from "../duotone";
import { TrashSimpleFill } from "../fill";
import { TrashSimpleLight } from "../light";
import { TrashSimpleRegular } from "../regular";
import { TrashSimpleThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const TrashSimple = memo(function TrashSimple(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TrashSimpleBold,
      duotone: TrashSimpleDuotone,
      fill: TrashSimpleFill,
      light: TrashSimpleLight,
      regular: TrashSimpleRegular,
      thin: TrashSimpleThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
