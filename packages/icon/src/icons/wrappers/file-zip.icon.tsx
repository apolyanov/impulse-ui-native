import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { FileZipBoldIcon } from "../bold";
import { FileZipDuotoneIcon } from "../duotone";
import { FileZipFillIcon } from "../fill";
import { FileZipLightIcon } from "../light";
import { FileZipRegularIcon } from "../regular";
import { FileZipThinIcon } from "../thin";

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
