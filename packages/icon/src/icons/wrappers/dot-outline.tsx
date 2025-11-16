import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { DotOutlineBold } from "../bold";
import { DotOutlineDuotone } from "../duotone";
import { DotOutlineFill } from "../fill";
import { DotOutlineLight } from "../light";
import { DotOutlineRegular } from "../regular";
import { DotOutlineThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const DotOutline = memo(function DotOutline(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: DotOutlineBold,
      duotone: DotOutlineDuotone,
      fill: DotOutlineFill,
      light: DotOutlineLight,
      regular: DotOutlineRegular,
      thin: DotOutlineThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
