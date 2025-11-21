import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { SelectionPlusBoldIcon } from "../bold";
import { SelectionPlusDuotoneIcon } from "../duotone";
import { SelectionPlusFillIcon } from "../fill";
import { SelectionPlusLightIcon } from "../light";
import { SelectionPlusRegularIcon } from "../regular";
import { SelectionPlusThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const SelectionPlusIcon = memo(function SelectionPlus(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SelectionPlusBoldIcon,
      duotone: SelectionPlusDuotoneIcon,
      fill: SelectionPlusFillIcon,
      light: SelectionPlusLightIcon,
      regular: SelectionPlusRegularIcon,
      thin: SelectionPlusThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
