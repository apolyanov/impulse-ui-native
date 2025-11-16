import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { NumberFourBold } from "../bold";
import { NumberFourDuotone } from "../duotone";
import { NumberFourFill } from "../fill";
import { NumberFourLight } from "../light";
import { NumberFourRegular } from "../regular";
import { NumberFourThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const NumberFour = memo(function NumberFour(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: NumberFourBold,
      duotone: NumberFourDuotone,
      fill: NumberFourFill,
      light: NumberFourLight,
      regular: NumberFourRegular,
      thin: NumberFourThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
