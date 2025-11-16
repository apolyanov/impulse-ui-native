import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { DropboxLogoBold } from "../bold";
import { DropboxLogoDuotone } from "../duotone";
import { DropboxLogoFill } from "../fill";
import { DropboxLogoLight } from "../light";
import { DropboxLogoRegular } from "../regular";
import { DropboxLogoThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const DropboxLogo = memo(function DropboxLogo(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: DropboxLogoBold,
      duotone: DropboxLogoDuotone,
      fill: DropboxLogoFill,
      light: DropboxLogoLight,
      regular: DropboxLogoRegular,
      thin: DropboxLogoThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
