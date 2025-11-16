import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { FileAudioBold } from "../bold";
import { FileAudioDuotone } from "../duotone";
import { FileAudioFill } from "../fill";
import { FileAudioLight } from "../light";
import { FileAudioRegular } from "../regular";
import { FileAudioThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const FileAudio = memo(function FileAudio(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FileAudioBold,
      duotone: FileAudioDuotone,
      fill: FileAudioFill,
      light: FileAudioLight,
      regular: FileAudioRegular,
      thin: FileAudioThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
