import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { FileBoldIcon } from "../bold";
import { FileDuotoneIcon } from "../duotone";
import { FileFillIcon } from "../fill";
import { FileLightIcon } from "../light";
import { FileRegularIcon } from "../regular";
import { FileThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

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
