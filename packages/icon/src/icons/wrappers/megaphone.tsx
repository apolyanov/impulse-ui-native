import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { MegaphoneBold } from "../bold";
import { MegaphoneDuotone } from "../duotone";
import { MegaphoneFill } from "../fill";
import { MegaphoneLight } from "../light";
import { MegaphoneRegular } from "../regular";
import { MegaphoneThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Megaphone = memo(function Megaphone(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: MegaphoneBold,
      duotone: MegaphoneDuotone,
      fill: MegaphoneFill,
      light: MegaphoneLight,
      regular: MegaphoneRegular,
      thin: MegaphoneThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
