import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { WechatLogoBoldIcon } from "../bold/wechat-logo-bold.icon";
import { WechatLogoDuotoneIcon } from "../duotone/wechat-logo-duotone.icon";
import { WechatLogoFillIcon } from "../fill/wechat-logo-fill.icon";
import { WechatLogoLightIcon } from "../light/wechat-logo-light.icon";
import { WechatLogoRegularIcon } from "../regular/wechat-logo-regular.icon";
import { WechatLogoThinIcon } from "../thin/wechat-logo-thin.icon";

export const WechatLogoIcon = memo(function WechatLogo(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: WechatLogoBoldIcon,
      duotone: WechatLogoDuotoneIcon,
      fill: WechatLogoFillIcon,
      light: WechatLogoLightIcon,
      regular: WechatLogoRegularIcon,
      thin: WechatLogoThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
