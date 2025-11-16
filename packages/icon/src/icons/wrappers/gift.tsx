import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { GiftBold } from "../bold";
import { GiftDuotone } from "../duotone";
import { GiftFill } from "../fill";
import { GiftLight } from "../light";
import { GiftRegular } from "../regular";
import { GiftThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Gift = memo(function Gift(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: GiftBold,
      duotone: GiftDuotone,
      fill: GiftFill,
      light: GiftLight,
      regular: GiftRegular,
      thin: GiftThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
