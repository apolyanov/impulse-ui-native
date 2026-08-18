import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { VoicemailBoldIcon } from "../bold/voicemail-bold.icon";
import { VoicemailDuotoneIcon } from "../duotone/voicemail-duotone.icon";
import { VoicemailFillIcon } from "../fill/voicemail-fill.icon";
import { VoicemailLightIcon } from "../light/voicemail-light.icon";
import { VoicemailRegularIcon } from "../regular/voicemail-regular.icon";
import { VoicemailThinIcon } from "../thin/voicemail-thin.icon";

export const VoicemailIcon = memo(function Voicemail(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: VoicemailBoldIcon,
      duotone: VoicemailDuotoneIcon,
      fill: VoicemailFillIcon,
      light: VoicemailLightIcon,
      regular: VoicemailRegularIcon,
      thin: VoicemailThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
