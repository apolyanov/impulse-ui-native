import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { SmileyStickerBoldIcon } from "../bold";
import { SmileyStickerDuotoneIcon } from "../duotone";
import { SmileyStickerFillIcon } from "../fill";
import { SmileyStickerLightIcon } from "../light";
import { SmileyStickerRegularIcon } from "../regular";
import { SmileyStickerThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const SmileyStickerIcon = memo(function SmileySticker(
  props: IconWrapperProps
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
