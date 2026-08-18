import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ListChecksBoldIcon } from "../bold/list-checks-bold.icon";
import { ListChecksDuotoneIcon } from "../duotone/list-checks-duotone.icon";
import { ListChecksFillIcon } from "../fill/list-checks-fill.icon";
import { ListChecksLightIcon } from "../light/list-checks-light.icon";
import { ListChecksRegularIcon } from "../regular/list-checks-regular.icon";
import { ListChecksThinIcon } from "../thin/list-checks-thin.icon";

export const ListChecksIcon = memo(function ListChecks(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ListChecksBoldIcon,
      duotone: ListChecksDuotoneIcon,
      fill: ListChecksFillIcon,
      light: ListChecksLightIcon,
      regular: ListChecksRegularIcon,
      thin: ListChecksThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
