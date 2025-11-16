import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CopyleftBold } from "../bold";
import { CopyleftDuotone } from "../duotone";
import { CopyleftFill } from "../fill";
import { CopyleftLight } from "../light";
import { CopyleftRegular } from "../regular";
import { CopyleftThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Copyleft = memo(function Copyleft(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CopyleftBold,
      duotone: CopyleftDuotone,
      fill: CopyleftFill,
      light: CopyleftLight,
      regular: CopyleftRegular,
      thin: CopyleftThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
