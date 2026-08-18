import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { NumberOneBoldIcon } from "../bold/number-one-bold.icon";
import { NumberOneDuotoneIcon } from "../duotone/number-one-duotone.icon";
import { NumberOneFillIcon } from "../fill/number-one-fill.icon";
import { NumberOneLightIcon } from "../light/number-one-light.icon";
import { NumberOneRegularIcon } from "../regular/number-one-regular.icon";
import { NumberOneThinIcon } from "../thin/number-one-thin.icon";

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
