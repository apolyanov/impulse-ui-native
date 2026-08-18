import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { StickerBoldIcon } from "../bold/sticker-bold.icon";
import { StickerDuotoneIcon } from "../duotone/sticker-duotone.icon";
import { StickerFillIcon } from "../fill/sticker-fill.icon";
import { StickerLightIcon } from "../light/sticker-light.icon";
import { StickerRegularIcon } from "../regular/sticker-regular.icon";
import { StickerThinIcon } from "../thin/sticker-thin.icon";

export const StickerIcon = memo(function Sticker(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: StickerBoldIcon,
      duotone: StickerDuotoneIcon,
      fill: StickerFillIcon,
      light: StickerLightIcon,
      regular: StickerRegularIcon,
      thin: StickerThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
