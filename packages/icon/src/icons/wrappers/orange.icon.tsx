import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { OrangeBoldIcon } from "../bold";
import { OrangeDuotoneIcon } from "../duotone";
import { OrangeFillIcon } from "../fill";
import { OrangeLightIcon } from "../light";
import { OrangeRegularIcon } from "../regular";
import { OrangeThinIcon } from "../thin";

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
