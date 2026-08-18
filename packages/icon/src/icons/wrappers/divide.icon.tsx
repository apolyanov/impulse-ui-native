import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { DivideBoldIcon } from "../bold/divide-bold.icon";
import { DivideDuotoneIcon } from "../duotone/divide-duotone.icon";
import { DivideFillIcon } from "../fill/divide-fill.icon";
import { DivideLightIcon } from "../light/divide-light.icon";
import { DivideRegularIcon } from "../regular/divide-regular.icon";
import { DivideThinIcon } from "../thin/divide-thin.icon";

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
