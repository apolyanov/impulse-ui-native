import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { SwordBold } from "../bold";
import { SwordDuotone } from "../duotone";
import { SwordFill } from "../fill";
import { SwordLight } from "../light";
import { SwordRegular } from "../regular";
import { SwordThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Sword = memo(function Sword(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SwordBold,
      duotone: SwordDuotone,
      fill: SwordFill,
      light: SwordLight,
      regular: SwordRegular,
      thin: SwordThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
