import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { SmileyStickerBoldIcon } from "../bold/smiley-sticker-bold.icon";
import { SmileyStickerDuotoneIcon } from "../duotone/smiley-sticker-duotone.icon";
import { SmileyStickerFillIcon } from "../fill/smiley-sticker-fill.icon";
import { SmileyStickerLightIcon } from "../light/smiley-sticker-light.icon";
import { SmileyStickerRegularIcon } from "../regular/smiley-sticker-regular.icon";
import { SmileyStickerThinIcon } from "../thin/smiley-sticker-thin.icon";

export const SmileyStickerIcon = memo(function SmileySticker(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SmileyStickerBoldIcon,
      duotone: SmileyStickerDuotoneIcon,
      fill: SmileyStickerFillIcon,
      light: SmileyStickerLightIcon,
      regular: SmileyStickerRegularIcon,
      thin: SmileyStickerThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
