import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { SelectionInverseBoldIcon } from "../bold";
import { SelectionInverseDuotoneIcon } from "../duotone";
import { SelectionInverseFillIcon } from "../fill";
import { SelectionInverseLightIcon } from "../light";
import { SelectionInverseRegularIcon } from "../regular";
import { SelectionInverseThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const SelectionInverseIcon = memo(function SelectionInverse(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SelectionInverseBoldIcon,
      duotone: SelectionInverseDuotoneIcon,
      fill: SelectionInverseFillIcon,
      light: SelectionInverseLightIcon,
      regular: SelectionInverseRegularIcon,
      thin: SelectionInverseThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
