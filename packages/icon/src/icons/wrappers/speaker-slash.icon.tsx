import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { SpeakerSlashBoldIcon } from "../bold/speaker-slash-bold.icon";
import { SpeakerSlashDuotoneIcon } from "../duotone/speaker-slash-duotone.icon";
import { SpeakerSlashFillIcon } from "../fill/speaker-slash-fill.icon";
import { SpeakerSlashLightIcon } from "../light/speaker-slash-light.icon";
import { SpeakerSlashRegularIcon } from "../regular/speaker-slash-regular.icon";
import { SpeakerSlashThinIcon } from "../thin/speaker-slash-thin.icon";

export const SpeakerSlashIcon = memo(function SpeakerSlash(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SpeakerSlashBoldIcon,
      duotone: SpeakerSlashDuotoneIcon,
      fill: SpeakerSlashFillIcon,
      light: SpeakerSlashLightIcon,
      regular: SpeakerSlashRegularIcon,
      thin: SpeakerSlashThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
