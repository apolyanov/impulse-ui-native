import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ListBold } from "../bold";
import { ListDuotone } from "../duotone";
import { ListFill } from "../fill";
import { ListLight } from "../light";
import { ListRegular } from "../regular";
import { ListThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const List = memo(function List(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ListBold,
      duotone: ListDuotone,
      fill: ListFill,
      light: ListLight,
      regular: ListRegular,
      thin: ListThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
