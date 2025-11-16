import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { SpeakerSimpleSlashBold } from "../bold";
import { SpeakerSimpleSlashDuotone } from "../duotone";
import { SpeakerSimpleSlashFill } from "../fill";
import { SpeakerSimpleSlashLight } from "../light";
import { SpeakerSimpleSlashRegular } from "../regular";
import { SpeakerSimpleSlashThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const SpeakerSimpleSlash = memo(function SpeakerSimpleSlash(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SpeakerSimpleSlashBold,
      duotone: SpeakerSimpleSlashDuotone,
      fill: SpeakerSimpleSlashFill,
      light: SpeakerSimpleSlashLight,
      regular: SpeakerSimpleSlashRegular,
      thin: SpeakerSimpleSlashThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
