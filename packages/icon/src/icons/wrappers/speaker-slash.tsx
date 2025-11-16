import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { SpeakerSlashBold } from "../bold";
import { SpeakerSlashDuotone } from "../duotone";
import { SpeakerSlashFill } from "../fill";
import { SpeakerSlashLight } from "../light";
import { SpeakerSlashRegular } from "../regular";
import { SpeakerSlashThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const SpeakerSlash = memo(function SpeakerSlash(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SpeakerSlashBold,
      duotone: SpeakerSlashDuotone,
      fill: SpeakerSlashFill,
      light: SpeakerSlashLight,
      regular: SpeakerSlashRegular,
      thin: SpeakerSlashThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
