import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { FileArchiveBoldIcon } from "../bold/file-archive-bold.icon";
import { FileArchiveDuotoneIcon } from "../duotone/file-archive-duotone.icon";
import { FileArchiveFillIcon } from "../fill/file-archive-fill.icon";
import { FileArchiveLightIcon } from "../light/file-archive-light.icon";
import { FileArchiveRegularIcon } from "../regular/file-archive-regular.icon";
import { FileArchiveThinIcon } from "../thin/file-archive-thin.icon";

export const FileArchiveIcon = memo(function FileArchive(
  props: IconWrapperProps,
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
