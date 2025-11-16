import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ShuffleAngularBold } from "../bold";
import { ShuffleAngularDuotone } from "../duotone";
import { ShuffleAngularFill } from "../fill";
import { ShuffleAngularLight } from "../light";
import { ShuffleAngularRegular } from "../regular";
import { ShuffleAngularThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ShuffleAngular = memo(function ShuffleAngular(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ShuffleAngularBold,
      duotone: ShuffleAngularDuotone,
      fill: ShuffleAngularFill,
      light: ShuffleAngularLight,
      regular: ShuffleAngularRegular,
      thin: ShuffleAngularThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
