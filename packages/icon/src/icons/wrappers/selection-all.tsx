import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { SelectionAllBold } from "../bold";
import { SelectionAllDuotone } from "../duotone";
import { SelectionAllFill } from "../fill";
import { SelectionAllLight } from "../light";
import { SelectionAllRegular } from "../regular";
import { SelectionAllThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const SelectionAll = memo(function SelectionAll(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SelectionAllBold,
      duotone: SelectionAllDuotone,
      fill: SelectionAllFill,
      light: SelectionAllLight,
      regular: SelectionAllRegular,
      thin: SelectionAllThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
