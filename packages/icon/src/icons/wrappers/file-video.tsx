import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { FileVideoBold } from "../bold";
import { FileVideoDuotone } from "../duotone";
import { FileVideoFill } from "../fill";
import { FileVideoLight } from "../light";
import { FileVideoRegular } from "../regular";
import { FileVideoThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const FileVideo = memo(function FileVideo(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FileVideoBold,
      duotone: FileVideoDuotone,
      fill: FileVideoFill,
      light: FileVideoLight,
      regular: FileVideoRegular,
      thin: FileVideoThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
