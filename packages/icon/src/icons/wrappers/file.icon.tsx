import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { FileBoldIcon } from "../bold/file-bold.icon";
import { FileDuotoneIcon } from "../duotone/file-duotone.icon";
import { FileFillIcon } from "../fill/file-fill.icon";
import { FileLightIcon } from "../light/file-light.icon";
import { FileRegularIcon } from "../regular/file-regular.icon";
import { FileThinIcon } from "../thin/file-thin.icon";

export const FileIcon = memo(function File(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FileBoldIcon,
      duotone: FileDuotoneIcon,
      fill: FileFillIcon,
      light: FileLightIcon,
      regular: FileRegularIcon,
      thin: FileThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
