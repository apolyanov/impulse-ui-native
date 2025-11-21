import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { RowsBoldIcon } from "../bold";
import { RowsDuotoneIcon } from "../duotone";
import { RowsFillIcon } from "../fill";
import { RowsLightIcon } from "../light";
import { RowsRegularIcon } from "../regular";
import { RowsThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

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
