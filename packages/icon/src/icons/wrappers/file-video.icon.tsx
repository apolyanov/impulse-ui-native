import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { FileVideoBoldIcon } from "../bold/file-video-bold.icon";
import { FileVideoDuotoneIcon } from "../duotone/file-video-duotone.icon";
import { FileVideoFillIcon } from "../fill/file-video-fill.icon";
import { FileVideoLightIcon } from "../light/file-video-light.icon";
import { FileVideoRegularIcon } from "../regular/file-video-regular.icon";
import { FileVideoThinIcon } from "../thin/file-video-thin.icon";

export const FileVideoIcon = memo(function FileVideo(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FileVideoBoldIcon,
      duotone: FileVideoDuotoneIcon,
      fill: FileVideoFillIcon,
      light: FileVideoLightIcon,
      regular: FileVideoRegularIcon,
      thin: FileVideoThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
