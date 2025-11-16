import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { StarOfDavidBold } from "../bold";
import { StarOfDavidDuotone } from "../duotone";
import { StarOfDavidFill } from "../fill";
import { StarOfDavidLight } from "../light";
import { StarOfDavidRegular } from "../regular";
import { StarOfDavidThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const StarOfDavid = memo(function StarOfDavid(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: StarOfDavidBold,
      duotone: StarOfDavidDuotone,
      fill: StarOfDavidFill,
      light: StarOfDavidLight,
      regular: StarOfDavidRegular,
      thin: StarOfDavidThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
