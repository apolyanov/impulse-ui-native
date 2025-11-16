import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { StickerBold } from "../bold";
import { StickerDuotone } from "../duotone";
import { StickerFill } from "../fill";
import { StickerLight } from "../light";
import { StickerRegular } from "../regular";
import { StickerThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Sticker = memo(function Sticker(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: StickerBold,
      duotone: StickerDuotone,
      fill: StickerFill,
      light: StickerLight,
      regular: StickerRegular,
      thin: StickerThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
