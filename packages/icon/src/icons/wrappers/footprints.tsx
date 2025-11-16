import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { FootprintsBold } from "../bold";
import { FootprintsDuotone } from "../duotone";
import { FootprintsFill } from "../fill";
import { FootprintsLight } from "../light";
import { FootprintsRegular } from "../regular";
import { FootprintsThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Footprints = memo(function Footprints(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FootprintsBold,
      duotone: FootprintsDuotone,
      fill: FootprintsFill,
      light: FootprintsLight,
      regular: FootprintsRegular,
      thin: FootprintsThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
