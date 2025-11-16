import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { SpeakerSimpleXBold } from "../bold";
import { SpeakerSimpleXDuotone } from "../duotone";
import { SpeakerSimpleXFill } from "../fill";
import { SpeakerSimpleXLight } from "../light";
import { SpeakerSimpleXRegular } from "../regular";
import { SpeakerSimpleXThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const SpeakerSimpleX = memo(function SpeakerSimpleX(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SpeakerSimpleXBold,
      duotone: SpeakerSimpleXDuotone,
      fill: SpeakerSimpleXFill,
      light: SpeakerSimpleXLight,
      regular: SpeakerSimpleXRegular,
      thin: SpeakerSimpleXThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
