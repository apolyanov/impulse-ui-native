import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { EmptyBold } from "../bold";
import { EmptyDuotone } from "../duotone";
import { EmptyFill } from "../fill";
import { EmptyLight } from "../light";
import { EmptyRegular } from "../regular";
import { EmptyThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Empty = memo(function Empty(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: EmptyBold,
      duotone: EmptyDuotone,
      fill: EmptyFill,
      light: EmptyLight,
      regular: EmptyRegular,
      thin: EmptyThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
