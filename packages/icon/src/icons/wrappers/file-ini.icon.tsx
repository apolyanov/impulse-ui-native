import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { FileIniBoldIcon } from "../bold";
import { FileIniDuotoneIcon } from "../duotone";
import { FileIniFillIcon } from "../fill";
import { FileIniLightIcon } from "../light";
import { FileIniRegularIcon } from "../regular";
import { FileIniThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const FileIniIcon = memo(function FileIni(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FileIniBoldIcon,
      duotone: FileIniDuotoneIcon,
      fill: FileIniFillIcon,
      light: FileIniLightIcon,
      regular: FileIniRegularIcon,
      thin: FileIniThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
