import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { DogBold } from "../bold";
import { DogDuotone } from "../duotone";
import { DogFill } from "../fill";
import { DogLight } from "../light";
import { DogRegular } from "../regular";
import { DogThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Dog = memo(function Dog(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: DogBold,
      duotone: DogDuotone,
      fill: DogFill,
      light: DogLight,
      regular: DogRegular,
      thin: DogThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
