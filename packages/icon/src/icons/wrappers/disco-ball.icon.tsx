import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { DiscoBallBoldIcon } from "../bold/disco-ball-bold.icon";
import { DiscoBallDuotoneIcon } from "../duotone/disco-ball-duotone.icon";
import { DiscoBallFillIcon } from "../fill/disco-ball-fill.icon";
import { DiscoBallLightIcon } from "../light/disco-ball-light.icon";
import { DiscoBallRegularIcon } from "../regular/disco-ball-regular.icon";
import { DiscoBallThinIcon } from "../thin/disco-ball-thin.icon";

export const DiscoBallIcon = memo(function DiscoBall(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: DiscoBallBoldIcon,
      duotone: DiscoBallDuotoneIcon,
      fill: DiscoBallFillIcon,
      light: DiscoBallLightIcon,
      regular: DiscoBallRegularIcon,
      thin: DiscoBallThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
