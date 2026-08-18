import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { LastfmLogoBoldIcon } from "../bold/lastfm-logo-bold.icon";
import { LastfmLogoDuotoneIcon } from "../duotone/lastfm-logo-duotone.icon";
import { LastfmLogoFillIcon } from "../fill/lastfm-logo-fill.icon";
import { LastfmLogoLightIcon } from "../light/lastfm-logo-light.icon";
import { LastfmLogoRegularIcon } from "../regular/lastfm-logo-regular.icon";
import { LastfmLogoThinIcon } from "../thin/lastfm-logo-thin.icon";

export const LastfmLogoIcon = memo(function LastfmLogo(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: LastfmLogoBoldIcon,
      duotone: LastfmLogoDuotoneIcon,
      fill: LastfmLogoFillIcon,
      light: LastfmLogoLightIcon,
      regular: LastfmLogoRegularIcon,
      thin: LastfmLogoThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
