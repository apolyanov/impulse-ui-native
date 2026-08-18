import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ListBoldIcon } from "../bold/list-bold.icon";
import { ListDuotoneIcon } from "../duotone/list-duotone.icon";
import { ListFillIcon } from "../fill/list-fill.icon";
import { ListLightIcon } from "../light/list-light.icon";
import { ListRegularIcon } from "../regular/list-regular.icon";
import { ListThinIcon } from "../thin/list-thin.icon";

export const ListIcon = memo(function List(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ListBoldIcon,
      duotone: ListDuotoneIcon,
      fill: ListFillIcon,
      light: ListLightIcon,
      regular: ListRegularIcon,
      thin: ListThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
