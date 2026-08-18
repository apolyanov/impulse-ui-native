import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CarProfileBoldIcon } from "../bold/car-profile-bold.icon";
import { CarProfileDuotoneIcon } from "../duotone/car-profile-duotone.icon";
import { CarProfileFillIcon } from "../fill/car-profile-fill.icon";
import { CarProfileLightIcon } from "../light/car-profile-light.icon";
import { CarProfileRegularIcon } from "../regular/car-profile-regular.icon";
import { CarProfileThinIcon } from "../thin/car-profile-thin.icon";

export const CarProfileIcon = memo(function CarProfile(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CarProfileBoldIcon,
      duotone: CarProfileDuotoneIcon,
      fill: CarProfileFillIcon,
      light: CarProfileLightIcon,
      regular: CarProfileRegularIcon,
      thin: CarProfileThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
