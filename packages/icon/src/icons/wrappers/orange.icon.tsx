import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { OrangeBoldIcon } from "../bold/orange-bold.icon";
import { OrangeDuotoneIcon } from "../duotone/orange-duotone.icon";
import { OrangeFillIcon } from "../fill/orange-fill.icon";
import { OrangeLightIcon } from "../light/orange-light.icon";
import { OrangeRegularIcon } from "../regular/orange-regular.icon";
import { OrangeThinIcon } from "../thin/orange-thin.icon";

export const OrangeIcon = memo(function Orange(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: OrangeBoldIcon,
      duotone: OrangeDuotoneIcon,
      fill: OrangeFillIcon,
      light: OrangeLightIcon,
      regular: OrangeRegularIcon,
      thin: OrangeThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
