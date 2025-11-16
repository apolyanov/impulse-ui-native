import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CarProfileBold } from "../bold";
import { CarProfileDuotone } from "../duotone";
import { CarProfileFill } from "../fill";
import { CarProfileLight } from "../light";
import { CarProfileRegular } from "../regular";
import { CarProfileThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CarProfile = memo(function CarProfile(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CarProfileBold,
      duotone: CarProfileDuotone,
      fill: CarProfileFill,
      light: CarProfileLight,
      regular: CarProfileRegular,
      thin: CarProfileThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
