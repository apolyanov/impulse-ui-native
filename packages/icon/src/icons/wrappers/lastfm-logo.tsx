import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { LastfmLogoBold } from "../bold";
import { LastfmLogoDuotone } from "../duotone";
import { LastfmLogoFill } from "../fill";
import { LastfmLogoLight } from "../light";
import { LastfmLogoRegular } from "../regular";
import { LastfmLogoThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const LastfmLogo = memo(function LastfmLogo(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: LastfmLogoBold,
      duotone: LastfmLogoDuotone,
      fill: LastfmLogoFill,
      light: LastfmLogoLight,
      regular: LastfmLogoRegular,
      thin: LastfmLogoThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
