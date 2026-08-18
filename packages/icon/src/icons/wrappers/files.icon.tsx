import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { FilesBoldIcon } from "../bold/files-bold.icon";
import { FilesDuotoneIcon } from "../duotone/files-duotone.icon";
import { FilesFillIcon } from "../fill/files-fill.icon";
import { FilesLightIcon } from "../light/files-light.icon";
import { FilesRegularIcon } from "../regular/files-regular.icon";
import { FilesThinIcon } from "../thin/files-thin.icon";

export const FilesIcon = memo(function Files(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FilesBoldIcon,
      duotone: FilesDuotoneIcon,
      fill: FilesFillIcon,
      light: FilesLightIcon,
      regular: FilesRegularIcon,
      thin: FilesThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
