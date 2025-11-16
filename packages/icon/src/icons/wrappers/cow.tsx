import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CowBold } from "../bold";
import { CowDuotone } from "../duotone";
import { CowFill } from "../fill";
import { CowLight } from "../light";
import { CowRegular } from "../regular";
import { CowThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Cow = memo(function Cow(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CowBold,
      duotone: CowDuotone,
      fill: CowFill,
      light: CowLight,
      regular: CowRegular,
      thin: CowThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
