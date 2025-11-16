import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { MopedFrontBold } from "../bold";
import { MopedFrontDuotone } from "../duotone";
import { MopedFrontFill } from "../fill";
import { MopedFrontLight } from "../light";
import { MopedFrontRegular } from "../regular";
import { MopedFrontThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const MopedFront = memo(function MopedFront(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: MopedFrontBold,
      duotone: MopedFrontDuotone,
      fill: MopedFrontFill,
      light: MopedFrontLight,
      regular: MopedFrontRegular,
      thin: MopedFrontThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
