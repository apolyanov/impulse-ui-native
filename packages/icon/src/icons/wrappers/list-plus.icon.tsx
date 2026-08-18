import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ListPlusBoldIcon } from "../bold/list-plus-bold.icon";
import { ListPlusDuotoneIcon } from "../duotone/list-plus-duotone.icon";
import { ListPlusFillIcon } from "../fill/list-plus-fill.icon";
import { ListPlusLightIcon } from "../light/list-plus-light.icon";
import { ListPlusRegularIcon } from "../regular/list-plus-regular.icon";
import { ListPlusThinIcon } from "../thin/list-plus-thin.icon";

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
