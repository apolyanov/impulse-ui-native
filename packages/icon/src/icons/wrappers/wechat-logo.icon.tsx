import { createIcon } from "../../hocs/create-icon.hoc";
import { WechatLogoBoldIcon } from "../bold/wechat-logo-bold.icon";
import { WechatLogoDuotoneIcon } from "../duotone/wechat-logo-duotone.icon";
import { WechatLogoFillIcon } from "../fill/wechat-logo-fill.icon";
import { WechatLogoLightIcon } from "../light/wechat-logo-light.icon";
import { WechatLogoRegularIcon } from "../regular/wechat-logo-regular.icon";
import { WechatLogoThinIcon } from "../thin/wechat-logo-thin.icon";

export const WechatLogoIcon = createIcon("WechatLogo", {
  bold: WechatLogoBoldIcon,
  duotone: WechatLogoDuotoneIcon,
  fill: WechatLogoFillIcon,
  light: WechatLogoLightIcon,
  regular: WechatLogoRegularIcon,
  thin: WechatLogoThinIcon,
});
