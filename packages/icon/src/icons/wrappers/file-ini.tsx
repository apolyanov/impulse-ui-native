import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { FileIniBold } from "../bold";
import { FileIniDuotone } from "../duotone";
import { FileIniFill } from "../fill";
import { FileIniLight } from "../light";
import { FileIniRegular } from "../regular";
import { FileIniThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const FileIni = memo(function FileIni(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FileIniBold,
      duotone: FileIniDuotone,
      fill: FileIniFill,
      light: FileIniLight,
      regular: FileIniRegular,
      thin: FileIniThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
