import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ListNumbersBoldIcon } from "../bold/list-numbers-bold.icon";
import { ListNumbersDuotoneIcon } from "../duotone/list-numbers-duotone.icon";
import { ListNumbersFillIcon } from "../fill/list-numbers-fill.icon";
import { ListNumbersLightIcon } from "../light/list-numbers-light.icon";
import { ListNumbersRegularIcon } from "../regular/list-numbers-regular.icon";
import { ListNumbersThinIcon } from "../thin/list-numbers-thin.icon";

export const ListNumbersIcon = memo(function ListNumbers(
  props: IconWrapperProps,
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
