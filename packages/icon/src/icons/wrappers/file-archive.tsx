import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { FileArchiveBold } from "../bold";
import { FileArchiveDuotone } from "../duotone";
import { FileArchiveFill } from "../fill";
import { FileArchiveLight } from "../light";
import { FileArchiveRegular } from "../regular";
import { FileArchiveThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const FileArchive = memo(function FileArchive(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FileArchiveBold,
      duotone: FileArchiveDuotone,
      fill: FileArchiveFill,
      light: FileArchiveLight,
      regular: FileArchiveRegular,
      thin: FileArchiveThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
