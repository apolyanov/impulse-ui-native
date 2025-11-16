import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { NotionLogoBold } from "../bold";
import { NotionLogoDuotone } from "../duotone";
import { NotionLogoFill } from "../fill";
import { NotionLogoLight } from "../light";
import { NotionLogoRegular } from "../regular";
import { NotionLogoThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const NotionLogo = memo(function NotionLogo(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: NotionLogoBold,
      duotone: NotionLogoDuotone,
      fill: NotionLogoFill,
      light: NotionLogoLight,
      regular: NotionLogoRegular,
      thin: NotionLogoThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
