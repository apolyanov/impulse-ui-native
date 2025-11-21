import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ListChecksBoldIcon } from "../bold";
import { ListChecksDuotoneIcon } from "../duotone";
import { ListChecksFillIcon } from "../fill";
import { ListChecksLightIcon } from "../light";
import { ListChecksRegularIcon } from "../regular";
import { ListChecksThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ListChecksIcon = memo(function ListChecks(
  props: IconWrapperProps
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
