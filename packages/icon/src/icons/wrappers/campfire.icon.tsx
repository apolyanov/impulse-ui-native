import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CampfireBoldIcon } from "../bold/campfire-bold.icon";
import { CampfireDuotoneIcon } from "../duotone/campfire-duotone.icon";
import { CampfireFillIcon } from "../fill/campfire-fill.icon";
import { CampfireLightIcon } from "../light/campfire-light.icon";
import { CampfireRegularIcon } from "../regular/campfire-regular.icon";
import { CampfireThinIcon } from "../thin/campfire-thin.icon";

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
