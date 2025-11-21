import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ListPlusBoldIcon } from "../bold";
import { ListPlusDuotoneIcon } from "../duotone";
import { ListPlusFillIcon } from "../fill";
import { ListPlusLightIcon } from "../light";
import { ListPlusRegularIcon } from "../regular";
import { ListPlusThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ListPlusIcon = memo(function ListPlus(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ListPlusBoldIcon,
      duotone: ListPlusDuotoneIcon,
      fill: ListPlusFillIcon,
      light: ListPlusLightIcon,
      regular: ListPlusRegularIcon,
      thin: ListPlusThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
