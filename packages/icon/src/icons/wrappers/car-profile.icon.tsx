import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CarProfileBoldIcon } from "../bold";
import { CarProfileDuotoneIcon } from "../duotone";
import { CarProfileFillIcon } from "../fill";
import { CarProfileLightIcon } from "../light";
import { CarProfileRegularIcon } from "../regular";
import { CarProfileThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CarProfileIcon = memo(function CarProfile(
  props: IconWrapperProps
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
