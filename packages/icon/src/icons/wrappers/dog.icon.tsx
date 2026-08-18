import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { DogBoldIcon } from "../bold/dog-bold.icon";
import { DogDuotoneIcon } from "../duotone/dog-duotone.icon";
import { DogFillIcon } from "../fill/dog-fill.icon";
import { DogLightIcon } from "../light/dog-light.icon";
import { DogRegularIcon } from "../regular/dog-regular.icon";
import { DogThinIcon } from "../thin/dog-thin.icon";

export const DogIcon = memo(function Dog(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: DogBoldIcon,
      duotone: DogDuotoneIcon,
      fill: DogFillIcon,
      light: DogLightIcon,
      regular: DogRegularIcon,
      thin: DogThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
