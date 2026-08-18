import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { FalloutShelterBoldIcon } from "../bold/fallout-shelter-bold.icon";
import { FalloutShelterDuotoneIcon } from "../duotone/fallout-shelter-duotone.icon";
import { FalloutShelterFillIcon } from "../fill/fallout-shelter-fill.icon";
import { FalloutShelterLightIcon } from "../light/fallout-shelter-light.icon";
import { FalloutShelterRegularIcon } from "../regular/fallout-shelter-regular.icon";
import { FalloutShelterThinIcon } from "../thin/fallout-shelter-thin.icon";

export const FalloutShelterIcon = memo(function FalloutShelter(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FalloutShelterBoldIcon,
      duotone: FalloutShelterDuotoneIcon,
      fill: FalloutShelterFillIcon,
      light: FalloutShelterLightIcon,
      regular: FalloutShelterRegularIcon,
      thin: FalloutShelterThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
