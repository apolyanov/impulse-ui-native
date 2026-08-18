import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { SelectionInverseBoldIcon } from "../bold/selection-inverse-bold.icon";
import { SelectionInverseDuotoneIcon } from "../duotone/selection-inverse-duotone.icon";
import { SelectionInverseFillIcon } from "../fill/selection-inverse-fill.icon";
import { SelectionInverseLightIcon } from "../light/selection-inverse-light.icon";
import { SelectionInverseRegularIcon } from "../regular/selection-inverse-regular.icon";
import { SelectionInverseThinIcon } from "../thin/selection-inverse-thin.icon";

export const SelectionInverseIcon = memo(function SelectionInverse(
  props: IconWrapperProps,
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
