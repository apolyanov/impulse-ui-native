import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { DiscBold } from "../bold";
import { DiscDuotone } from "../duotone";
import { DiscFill } from "../fill";
import { DiscLight } from "../light";
import { DiscRegular } from "../regular";
import { DiscThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Disc = memo(function Disc(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: DiscBold,
      duotone: DiscDuotone,
      fill: DiscFill,
      light: DiscLight,
      regular: DiscRegular,
      thin: DiscThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
