import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { DropboxLogoBoldIcon } from "../bold/dropbox-logo-bold.icon";
import { DropboxLogoDuotoneIcon } from "../duotone/dropbox-logo-duotone.icon";
import { DropboxLogoFillIcon } from "../fill/dropbox-logo-fill.icon";
import { DropboxLogoLightIcon } from "../light/dropbox-logo-light.icon";
import { DropboxLogoRegularIcon } from "../regular/dropbox-logo-regular.icon";
import { DropboxLogoThinIcon } from "../thin/dropbox-logo-thin.icon";

export const DropboxLogoIcon = memo(function DropboxLogo(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: DropboxLogoBoldIcon,
      duotone: DropboxLogoDuotoneIcon,
      fill: DropboxLogoFillIcon,
      light: DropboxLogoLightIcon,
      regular: DropboxLogoRegularIcon,
      thin: DropboxLogoThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
