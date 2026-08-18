import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ToiletBoldIcon } from "../bold/toilet-bold.icon";
import { ToiletDuotoneIcon } from "../duotone/toilet-duotone.icon";
import { ToiletFillIcon } from "../fill/toilet-fill.icon";
import { ToiletLightIcon } from "../light/toilet-light.icon";
import { ToiletRegularIcon } from "../regular/toilet-regular.icon";
import { ToiletThinIcon } from "../thin/toilet-thin.icon";

export const ToiletIcon = memo(function Toilet(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ToiletBoldIcon,
      duotone: ToiletDuotoneIcon,
      fill: ToiletFillIcon,
      light: ToiletLightIcon,
      regular: ToiletRegularIcon,
      thin: ToiletThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
