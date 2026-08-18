import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { BabyCarriageBoldIcon } from "../bold/baby-carriage-bold.icon";
import { BabyCarriageDuotoneIcon } from "../duotone/baby-carriage-duotone.icon";
import { BabyCarriageFillIcon } from "../fill/baby-carriage-fill.icon";
import { BabyCarriageLightIcon } from "../light/baby-carriage-light.icon";
import { BabyCarriageRegularIcon } from "../regular/baby-carriage-regular.icon";
import { BabyCarriageThinIcon } from "../thin/baby-carriage-thin.icon";

export const BabyCarriageIcon = memo(function BabyCarriage(
  props: IconWrapperProps,
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
