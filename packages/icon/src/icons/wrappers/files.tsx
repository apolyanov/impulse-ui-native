import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { FilesBold } from "../bold";
import { FilesDuotone } from "../duotone";
import { FilesFill } from "../fill";
import { FilesLight } from "../light";
import { FilesRegular } from "../regular";
import { FilesThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Files = memo(function Files(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FilesBold,
      duotone: FilesDuotone,
      fill: FilesFill,
      light: FilesLight,
      regular: FilesRegular,
      thin: FilesThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
