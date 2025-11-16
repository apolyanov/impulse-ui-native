import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ListPlusBold } from "../bold";
import { ListPlusDuotone } from "../duotone";
import { ListPlusFill } from "../fill";
import { ListPlusLight } from "../light";
import { ListPlusRegular } from "../regular";
import { ListPlusThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ListPlus = memo(function ListPlus(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ListPlusBold,
      duotone: ListPlusDuotone,
      fill: ListPlusFill,
      light: ListPlusLight,
      regular: ListPlusRegular,
      thin: ListPlusThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
