import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ToiletBold } from "../bold";
import { ToiletDuotone } from "../duotone";
import { ToiletFill } from "../fill";
import { ToiletLight } from "../light";
import { ToiletRegular } from "../regular";
import { ToiletThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Toilet = memo(function Toilet(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ToiletBold,
      duotone: ToiletDuotone,
      fill: ToiletFill,
      light: ToiletLight,
      regular: ToiletRegular,
      thin: ToiletThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
