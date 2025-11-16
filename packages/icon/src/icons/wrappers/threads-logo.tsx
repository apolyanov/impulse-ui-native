import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ThreadsLogoBold } from "../bold";
import { ThreadsLogoDuotone } from "../duotone";
import { ThreadsLogoFill } from "../fill";
import { ThreadsLogoLight } from "../light";
import { ThreadsLogoRegular } from "../regular";
import { ThreadsLogoThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ThreadsLogo = memo(function ThreadsLogo(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ThreadsLogoBold,
      duotone: ThreadsLogoDuotone,
      fill: ThreadsLogoFill,
      light: ThreadsLogoLight,
      regular: ThreadsLogoRegular,
      thin: ThreadsLogoThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
