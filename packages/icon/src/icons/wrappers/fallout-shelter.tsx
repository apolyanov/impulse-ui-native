import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { FalloutShelterBold } from "../bold";
import { FalloutShelterDuotone } from "../duotone";
import { FalloutShelterFill } from "../fill";
import { FalloutShelterLight } from "../light";
import { FalloutShelterRegular } from "../regular";
import { FalloutShelterThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const FalloutShelter = memo(function FalloutShelter(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FalloutShelterBold,
      duotone: FalloutShelterDuotone,
      fill: FalloutShelterFill,
      light: FalloutShelterLight,
      regular: FalloutShelterRegular,
      thin: FalloutShelterThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
