import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { SpeakerSimpleSlashBoldIcon } from "../bold/speaker-simple-slash-bold.icon";
import { SpeakerSimpleSlashDuotoneIcon } from "../duotone/speaker-simple-slash-duotone.icon";
import { SpeakerSimpleSlashFillIcon } from "../fill/speaker-simple-slash-fill.icon";
import { SpeakerSimpleSlashLightIcon } from "../light/speaker-simple-slash-light.icon";
import { SpeakerSimpleSlashRegularIcon } from "../regular/speaker-simple-slash-regular.icon";
import { SpeakerSimpleSlashThinIcon } from "../thin/speaker-simple-slash-thin.icon";

export const SpeakerSimpleSlashIcon = memo(function SpeakerSimpleSlash(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SpeakerSimpleSlashBoldIcon,
      duotone: SpeakerSimpleSlashDuotoneIcon,
      fill: SpeakerSimpleSlashFillIcon,
      light: SpeakerSimpleSlashLightIcon,
      regular: SpeakerSimpleSlashRegularIcon,
      thin: SpeakerSimpleSlashThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
