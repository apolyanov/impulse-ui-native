import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { SpeakerSimpleNoneBoldIcon } from "../bold/speaker-simple-none-bold.icon";
import { SpeakerSimpleNoneDuotoneIcon } from "../duotone/speaker-simple-none-duotone.icon";
import { SpeakerSimpleNoneFillIcon } from "../fill/speaker-simple-none-fill.icon";
import { SpeakerSimpleNoneLightIcon } from "../light/speaker-simple-none-light.icon";
import { SpeakerSimpleNoneRegularIcon } from "../regular/speaker-simple-none-regular.icon";
import { SpeakerSimpleNoneThinIcon } from "../thin/speaker-simple-none-thin.icon";

export const SpeakerSimpleNoneIcon = memo(function SpeakerSimpleNone(
  props: IconWrapperProps,
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
