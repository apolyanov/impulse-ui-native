import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { TextBBold } from "../bold";
import { TextBDuotone } from "../duotone";
import { TextBFill } from "../fill";
import { TextBLight } from "../light";
import { TextBRegular } from "../regular";
import { TextBThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const TextB = memo(function TextB(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TextBBold,
      duotone: TextBDuotone,
      fill: TextBFill,
      light: TextBLight,
      regular: TextBRegular,
      thin: TextBThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
