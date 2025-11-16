import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { FileBold } from "../bold";
import { FileDuotone } from "../duotone";
import { FileFill } from "../fill";
import { FileLight } from "../light";
import { FileRegular } from "../regular";
import { FileThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const File = memo(function File(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FileBold,
      duotone: FileDuotone,
      fill: FileFill,
      light: FileLight,
      regular: FileRegular,
      thin: FileThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
