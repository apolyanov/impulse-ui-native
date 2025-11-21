import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { DivideBoldIcon } from "../bold";
import { DivideDuotoneIcon } from "../duotone";
import { DivideFillIcon } from "../fill";
import { DivideLightIcon } from "../light";
import { DivideRegularIcon } from "../regular";
import { DivideThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const DivideIcon = memo(function Divide(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: DivideBoldIcon,
      duotone: DivideDuotoneIcon,
      fill: DivideFillIcon,
      light: DivideLightIcon,
      regular: DivideRegularIcon,
      thin: DivideThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
