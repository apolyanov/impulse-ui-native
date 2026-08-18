import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { JeepBoldIcon } from "../bold/jeep-bold.icon";
import { JeepDuotoneIcon } from "../duotone/jeep-duotone.icon";
import { JeepFillIcon } from "../fill/jeep-fill.icon";
import { JeepLightIcon } from "../light/jeep-light.icon";
import { JeepRegularIcon } from "../regular/jeep-regular.icon";
import { JeepThinIcon } from "../thin/jeep-thin.icon";

export const JeepIcon = memo(function Jeep(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: JeepBoldIcon,
      duotone: JeepDuotoneIcon,
      fill: JeepFillIcon,
      light: JeepLightIcon,
      regular: JeepRegularIcon,
      thin: JeepThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
