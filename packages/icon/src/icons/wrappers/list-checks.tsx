import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ListChecksBold } from "../bold";
import { ListChecksDuotone } from "../duotone";
import { ListChecksFill } from "../fill";
import { ListChecksLight } from "../light";
import { ListChecksRegular } from "../regular";
import { ListChecksThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ListChecks = memo(function ListChecks(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ListChecksBold,
      duotone: ListChecksDuotone,
      fill: ListChecksFill,
      light: ListChecksLight,
      regular: ListChecksRegular,
      thin: ListChecksThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
