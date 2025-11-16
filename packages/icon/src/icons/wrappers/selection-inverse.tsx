import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { SelectionInverseBold } from "../bold";
import { SelectionInverseDuotone } from "../duotone";
import { SelectionInverseFill } from "../fill";
import { SelectionInverseLight } from "../light";
import { SelectionInverseRegular } from "../regular";
import { SelectionInverseThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const SelectionInverse = memo(function SelectionInverse(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SelectionInverseBold,
      duotone: SelectionInverseDuotone,
      fill: SelectionInverseFill,
      light: SelectionInverseLight,
      regular: SelectionInverseRegular,
      thin: SelectionInverseThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
