import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { VoicemailBold } from "../bold";
import { VoicemailDuotone } from "../duotone";
import { VoicemailFill } from "../fill";
import { VoicemailLight } from "../light";
import { VoicemailRegular } from "../regular";
import { VoicemailThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Voicemail = memo(function Voicemail(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: VoicemailBold,
      duotone: VoicemailDuotone,
      fill: VoicemailFill,
      light: VoicemailLight,
      regular: VoicemailRegular,
      thin: VoicemailThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
