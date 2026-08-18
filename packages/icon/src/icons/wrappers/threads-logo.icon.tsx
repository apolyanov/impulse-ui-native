import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ThreadsLogoBoldIcon } from "../bold/threads-logo-bold.icon";
import { ThreadsLogoDuotoneIcon } from "../duotone/threads-logo-duotone.icon";
import { ThreadsLogoFillIcon } from "../fill/threads-logo-fill.icon";
import { ThreadsLogoLightIcon } from "../light/threads-logo-light.icon";
import { ThreadsLogoRegularIcon } from "../regular/threads-logo-regular.icon";
import { ThreadsLogoThinIcon } from "../thin/threads-logo-thin.icon";

export const ThreadsLogoIcon = memo(function ThreadsLogo(
  props: IconWrapperProps,
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
