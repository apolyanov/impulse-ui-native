import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CampfireBoldIcon } from "../bold";
import { CampfireDuotoneIcon } from "../duotone";
import { CampfireFillIcon } from "../fill";
import { CampfireLightIcon } from "../light";
import { CampfireRegularIcon } from "../regular";
import { CampfireThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CampfireIcon = memo(function Campfire(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CampfireBoldIcon,
      duotone: CampfireDuotoneIcon,
      fill: CampfireFillIcon,
      light: CampfireLightIcon,
      regular: CampfireRegularIcon,
      thin: CampfireThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
