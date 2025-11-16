import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { SelectionPlusBold } from "../bold";
import { SelectionPlusDuotone } from "../duotone";
import { SelectionPlusFill } from "../fill";
import { SelectionPlusLight } from "../light";
import { SelectionPlusRegular } from "../regular";
import { SelectionPlusThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const SelectionPlus = memo(function SelectionPlus(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SelectionPlusBold,
      duotone: SelectionPlusDuotone,
      fill: SelectionPlusFill,
      light: SelectionPlusLight,
      regular: SelectionPlusRegular,
      thin: SelectionPlusThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
