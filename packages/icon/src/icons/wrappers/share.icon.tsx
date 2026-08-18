import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ShareBoldIcon } from "../bold/share-bold.icon";
import { ShareDuotoneIcon } from "../duotone/share-duotone.icon";
import { ShareFillIcon } from "../fill/share-fill.icon";
import { ShareLightIcon } from "../light/share-light.icon";
import { ShareRegularIcon } from "../regular/share-regular.icon";
import { ShareThinIcon } from "../thin/share-thin.icon";

export const ShareIcon = memo(function Share(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ShareBoldIcon,
      duotone: ShareDuotoneIcon,
      fill: ShareFillIcon,
      light: ShareLightIcon,
      regular: ShareRegularIcon,
      thin: ShareThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
