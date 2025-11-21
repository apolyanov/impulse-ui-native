import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ThreadsLogoBoldIcon } from "../bold";
import { ThreadsLogoDuotoneIcon } from "../duotone";
import { ThreadsLogoFillIcon } from "../fill";
import { ThreadsLogoLightIcon } from "../light";
import { ThreadsLogoRegularIcon } from "../regular";
import { ThreadsLogoThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ThreadsLogoIcon = memo(function ThreadsLogo(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ThreadsLogoBoldIcon,
      duotone: ThreadsLogoDuotoneIcon,
      fill: ThreadsLogoFillIcon,
      light: ThreadsLogoLightIcon,
      regular: ThreadsLogoRegularIcon,
      thin: ThreadsLogoThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
