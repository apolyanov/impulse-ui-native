import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ListNumbersBold } from "../bold";
import { ListNumbersDuotone } from "../duotone";
import { ListNumbersFill } from "../fill";
import { ListNumbersLight } from "../light";
import { ListNumbersRegular } from "../regular";
import { ListNumbersThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ListNumbers = memo(function ListNumbers(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ListNumbersBold,
      duotone: ListNumbersDuotone,
      fill: ListNumbersFill,
      light: ListNumbersLight,
      regular: ListNumbersRegular,
      thin: ListNumbersThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
