import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { FileAudioBoldIcon } from "../bold/file-audio-bold.icon";
import { FileAudioDuotoneIcon } from "../duotone/file-audio-duotone.icon";
import { FileAudioFillIcon } from "../fill/file-audio-fill.icon";
import { FileAudioLightIcon } from "../light/file-audio-light.icon";
import { FileAudioRegularIcon } from "../regular/file-audio-regular.icon";
import { FileAudioThinIcon } from "../thin/file-audio-thin.icon";

export const FileAudioIcon = memo(function FileAudio(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FileAudioBoldIcon,
      duotone: FileAudioDuotoneIcon,
      fill: FileAudioFillIcon,
      light: FileAudioLightIcon,
      regular: FileAudioRegularIcon,
      thin: FileAudioThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
