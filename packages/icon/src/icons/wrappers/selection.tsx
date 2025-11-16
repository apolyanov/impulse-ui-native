import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { SelectionBold } from "../bold";
import { SelectionDuotone } from "../duotone";
import { SelectionFill } from "../fill";
import { SelectionLight } from "../light";
import { SelectionRegular } from "../regular";
import { SelectionThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Selection = memo(function Selection(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SelectionBold,
      duotone: SelectionDuotone,
      fill: SelectionFill,
      light: SelectionLight,
      regular: SelectionRegular,
      thin: SelectionThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
