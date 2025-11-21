import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { NumberOneBoldIcon } from "../bold";
import { NumberOneDuotoneIcon } from "../duotone";
import { NumberOneFillIcon } from "../fill";
import { NumberOneLightIcon } from "../light";
import { NumberOneRegularIcon } from "../regular";
import { NumberOneThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const NumberOneIcon = memo(function NumberOne(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: NumberOneBoldIcon,
      duotone: NumberOneDuotoneIcon,
      fill: NumberOneFillIcon,
      light: NumberOneLightIcon,
      regular: NumberOneRegularIcon,
      thin: NumberOneThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
