import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CopySimpleBold } from "../bold";
import { CopySimpleDuotone } from "../duotone";
import { CopySimpleFill } from "../fill";
import { CopySimpleLight } from "../light";
import { CopySimpleRegular } from "../regular";
import { CopySimpleThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CopySimple = memo(function CopySimple(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CopySimpleBold,
      duotone: CopySimpleDuotone,
      fill: CopySimpleFill,
      light: CopySimpleLight,
      regular: CopySimpleRegular,
      thin: CopySimpleThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
