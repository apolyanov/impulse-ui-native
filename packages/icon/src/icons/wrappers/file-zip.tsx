import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { FileZipBold } from "../bold";
import { FileZipDuotone } from "../duotone";
import { FileZipFill } from "../fill";
import { FileZipLight } from "../light";
import { FileZipRegular } from "../regular";
import { FileZipThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const FileZip = memo(function FileZip(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FileZipBold,
      duotone: FileZipDuotone,
      fill: FileZipFill,
      light: FileZipLight,
      regular: FileZipRegular,
      thin: FileZipThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
