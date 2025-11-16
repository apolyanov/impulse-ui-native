import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { WechatLogoBold } from "../bold";
import { WechatLogoDuotone } from "../duotone";
import { WechatLogoFill } from "../fill";
import { WechatLogoLight } from "../light";
import { WechatLogoRegular } from "../regular";
import { WechatLogoThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const WechatLogo = memo(function WechatLogo(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: WechatLogoBold,
      duotone: WechatLogoDuotone,
      fill: WechatLogoFill,
      light: WechatLogoLight,
      regular: WechatLogoRegular,
      thin: WechatLogoThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
