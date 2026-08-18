import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { AmbulanceBoldIcon } from "../bold/ambulance-bold.icon";
import { AmbulanceDuotoneIcon } from "../duotone/ambulance-duotone.icon";
import { AmbulanceFillIcon } from "../fill/ambulance-fill.icon";
import { AmbulanceLightIcon } from "../light/ambulance-light.icon";
import { AmbulanceRegularIcon } from "../regular/ambulance-regular.icon";
import { AmbulanceThinIcon } from "../thin/ambulance-thin.icon";

export const AmbulanceIcon = memo(function Ambulance(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: AmbulanceBoldIcon,
      duotone: AmbulanceDuotoneIcon,
      fill: AmbulanceFillIcon,
      light: AmbulanceLightIcon,
      regular: AmbulanceRegularIcon,
      thin: AmbulanceThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
