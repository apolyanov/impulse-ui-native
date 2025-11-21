import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { BabyCarriageBoldIcon } from "../bold";
import { BabyCarriageDuotoneIcon } from "../duotone";
import { BabyCarriageFillIcon } from "../fill";
import { BabyCarriageLightIcon } from "../light";
import { BabyCarriageRegularIcon } from "../regular";
import { BabyCarriageThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const BabyCarriageIcon = memo(function BabyCarriage(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BabyCarriageBoldIcon,
      duotone: BabyCarriageDuotoneIcon,
      fill: BabyCarriageFillIcon,
      light: BabyCarriageLightIcon,
      regular: BabyCarriageRegularIcon,
      thin: BabyCarriageThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
