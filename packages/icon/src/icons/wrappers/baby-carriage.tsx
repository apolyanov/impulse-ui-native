import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { BabyCarriageBold } from "../bold";
import { BabyCarriageDuotone } from "../duotone";
import { BabyCarriageFill } from "../fill";
import { BabyCarriageLight } from "../light";
import { BabyCarriageRegular } from "../regular";
import { BabyCarriageThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const BabyCarriage = memo(function BabyCarriage(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BabyCarriageBold,
      duotone: BabyCarriageDuotone,
      fill: BabyCarriageFill,
      light: BabyCarriageLight,
      regular: BabyCarriageRegular,
      thin: BabyCarriageThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
