import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { FileIniBoldIcon } from "../bold/file-ini-bold.icon";
import { FileIniDuotoneIcon } from "../duotone/file-ini-duotone.icon";
import { FileIniFillIcon } from "../fill/file-ini-fill.icon";
import { FileIniLightIcon } from "../light/file-ini-light.icon";
import { FileIniRegularIcon } from "../regular/file-ini-regular.icon";
import { FileIniThinIcon } from "../thin/file-ini-thin.icon";

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
