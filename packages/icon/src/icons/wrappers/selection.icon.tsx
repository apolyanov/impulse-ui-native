import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { SelectionBoldIcon } from "../bold";
import { SelectionDuotoneIcon } from "../duotone";
import { SelectionFillIcon } from "../fill";
import { SelectionLightIcon } from "../light";
import { SelectionRegularIcon } from "../regular";
import { SelectionThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const SelectionIcon = memo(function Selection(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SelectionBoldIcon,
      duotone: SelectionDuotoneIcon,
      fill: SelectionFillIcon,
      light: SelectionLightIcon,
      regular: SelectionRegularIcon,
      thin: SelectionThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
