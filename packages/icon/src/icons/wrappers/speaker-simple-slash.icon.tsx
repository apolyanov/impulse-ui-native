import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { SpeakerSimpleSlashBoldIcon } from "../bold";
import { SpeakerSimpleSlashDuotoneIcon } from "../duotone";
import { SpeakerSimpleSlashFillIcon } from "../fill";
import { SpeakerSimpleSlashLightIcon } from "../light";
import { SpeakerSimpleSlashRegularIcon } from "../regular";
import { SpeakerSimpleSlashThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const SpeakerSimpleSlashIcon = memo(function SpeakerSimpleSlash(
  props: IconWrapperProps
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
