import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { FlowArrowBold } from "../bold";
import { FlowArrowDuotone } from "../duotone";
import { FlowArrowFill } from "../fill";
import { FlowArrowLight } from "../light";
import { FlowArrowRegular } from "../regular";
import { FlowArrowThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const FlowArrow = memo(function FlowArrow(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FlowArrowBold,
      duotone: FlowArrowDuotone,
      fill: FlowArrowFill,
      light: FlowArrowLight,
      regular: FlowArrowRegular,
      thin: FlowArrowThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
