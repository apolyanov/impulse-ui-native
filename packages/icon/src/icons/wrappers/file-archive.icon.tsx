import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { FileArchiveBoldIcon } from "../bold";
import { FileArchiveDuotoneIcon } from "../duotone";
import { FileArchiveFillIcon } from "../fill";
import { FileArchiveLightIcon } from "../light";
import { FileArchiveRegularIcon } from "../regular";
import { FileArchiveThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const FileArchiveIcon = memo(function FileArchive(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FileArchiveBoldIcon,
      duotone: FileArchiveDuotoneIcon,
      fill: FileArchiveFillIcon,
      light: FileArchiveLightIcon,
      regular: FileArchiveRegularIcon,
      thin: FileArchiveThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
