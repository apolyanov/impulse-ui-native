import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { SmileyStickerBold } from "../bold";
import { SmileyStickerDuotone } from "../duotone";
import { SmileyStickerFill } from "../fill";
import { SmileyStickerLight } from "../light";
import { SmileyStickerRegular } from "../regular";
import { SmileyStickerThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const SmileySticker = memo(function SmileySticker(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SmileyStickerBold,
      duotone: SmileyStickerDuotone,
      fill: SmileyStickerFill,
      light: SmileyStickerLight,
      regular: SmileyStickerRegular,
      thin: SmileyStickerThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
