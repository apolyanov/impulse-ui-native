import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { RowsBoldIcon } from "../bold/rows-bold.icon";
import { RowsDuotoneIcon } from "../duotone/rows-duotone.icon";
import { RowsFillIcon } from "../fill/rows-fill.icon";
import { RowsLightIcon } from "../light/rows-light.icon";
import { RowsRegularIcon } from "../regular/rows-regular.icon";
import { RowsThinIcon } from "../thin/rows-thin.icon";

export const RowsIcon = memo(function Rows(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: RowsBoldIcon,
      duotone: RowsDuotoneIcon,
      fill: RowsFillIcon,
      light: RowsLightIcon,
      regular: RowsRegularIcon,
      thin: RowsThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
