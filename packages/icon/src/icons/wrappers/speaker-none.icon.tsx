import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { SpeakerNoneBoldIcon } from "../bold/speaker-none-bold.icon";
import { SpeakerNoneDuotoneIcon } from "../duotone/speaker-none-duotone.icon";
import { SpeakerNoneFillIcon } from "../fill/speaker-none-fill.icon";
import { SpeakerNoneLightIcon } from "../light/speaker-none-light.icon";
import { SpeakerNoneRegularIcon } from "../regular/speaker-none-regular.icon";
import { SpeakerNoneThinIcon } from "../thin/speaker-none-thin.icon";

export const SpeakerNoneIcon = memo(function SpeakerNone(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SpeakerNoneBoldIcon,
      duotone: SpeakerNoneDuotoneIcon,
      fill: SpeakerNoneFillIcon,
      light: SpeakerNoneLightIcon,
      regular: SpeakerNoneRegularIcon,
      thin: SpeakerNoneThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
