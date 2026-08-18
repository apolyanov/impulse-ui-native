import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { FileZipBoldIcon } from "../bold/file-zip-bold.icon";
import { FileZipDuotoneIcon } from "../duotone/file-zip-duotone.icon";
import { FileZipFillIcon } from "../fill/file-zip-fill.icon";
import { FileZipLightIcon } from "../light/file-zip-light.icon";
import { FileZipRegularIcon } from "../regular/file-zip-regular.icon";
import { FileZipThinIcon } from "../thin/file-zip-thin.icon";

export const FileZipIcon = memo(function FileZip(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FileZipBoldIcon,
      duotone: FileZipDuotoneIcon,
      fill: FileZipFillIcon,
      light: FileZipLightIcon,
      regular: FileZipRegularIcon,
      thin: FileZipThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
