import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { GiftBoldIcon } from "../bold/gift-bold.icon";
import { GiftDuotoneIcon } from "../duotone/gift-duotone.icon";
import { GiftFillIcon } from "../fill/gift-fill.icon";
import { GiftLightIcon } from "../light/gift-light.icon";
import { GiftRegularIcon } from "../regular/gift-regular.icon";
import { GiftThinIcon } from "../thin/gift-thin.icon";

export const GiftIcon = memo(function Gift(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: GiftBoldIcon,
      duotone: GiftDuotoneIcon,
      fill: GiftFillIcon,
      light: GiftLightIcon,
      regular: GiftRegularIcon,
      thin: GiftThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
