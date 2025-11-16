import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { FlagCheckeredBold } from "../bold";
import { FlagCheckeredDuotone } from "../duotone";
import { FlagCheckeredFill } from "../fill";
import { FlagCheckeredLight } from "../light";
import { FlagCheckeredRegular } from "../regular";
import { FlagCheckeredThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const FlagCheckered = memo(function FlagCheckered(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FlagCheckeredBold,
      duotone: FlagCheckeredDuotone,
      fill: FlagCheckeredFill,
      light: FlagCheckeredLight,
      regular: FlagCheckeredRegular,
      thin: FlagCheckeredThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
