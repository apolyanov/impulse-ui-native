import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ListNumbersBoldIcon } from "../bold";
import { ListNumbersDuotoneIcon } from "../duotone";
import { ListNumbersFillIcon } from "../fill";
import { ListNumbersLightIcon } from "../light";
import { ListNumbersRegularIcon } from "../regular";
import { ListNumbersThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ListNumbersIcon = memo(function ListNumbers(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ListNumbersBoldIcon,
      duotone: ListNumbersDuotoneIcon,
      fill: ListNumbersFillIcon,
      light: ListNumbersLightIcon,
      regular: ListNumbersRegularIcon,
      thin: ListNumbersThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
