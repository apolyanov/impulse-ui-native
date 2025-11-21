import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { DiscoBallBoldIcon } from "../bold";
import { DiscoBallDuotoneIcon } from "../duotone";
import { DiscoBallFillIcon } from "../fill";
import { DiscoBallLightIcon } from "../light";
import { DiscoBallRegularIcon } from "../regular";
import { DiscoBallThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

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
