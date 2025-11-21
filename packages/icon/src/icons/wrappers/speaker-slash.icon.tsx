import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { SpeakerSlashBoldIcon } from "../bold";
import { SpeakerSlashDuotoneIcon } from "../duotone";
import { SpeakerSlashFillIcon } from "../fill";
import { SpeakerSlashLightIcon } from "../light";
import { SpeakerSlashRegularIcon } from "../regular";
import { SpeakerSlashThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const SpeakerSlashIcon = memo(function SpeakerSlash(
  props: IconWrapperProps
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
