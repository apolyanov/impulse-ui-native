import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { SpeakerSimpleNoneBoldIcon } from "../bold";
import { SpeakerSimpleNoneDuotoneIcon } from "../duotone";
import { SpeakerSimpleNoneFillIcon } from "../fill";
import { SpeakerSimpleNoneLightIcon } from "../light";
import { SpeakerSimpleNoneRegularIcon } from "../regular";
import { SpeakerSimpleNoneThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const SpeakerSimpleNoneIcon = memo(function SpeakerSimpleNone(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SpeakerSimpleNoneBoldIcon,
      duotone: SpeakerSimpleNoneDuotoneIcon,
      fill: SpeakerSimpleNoneFillIcon,
      light: SpeakerSimpleNoneLightIcon,
      regular: SpeakerSimpleNoneRegularIcon,
      thin: SpeakerSimpleNoneThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
