import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ShareBold } from "../bold";
import { ShareDuotone } from "../duotone";
import { ShareFill } from "../fill";
import { ShareLight } from "../light";
import { ShareRegular } from "../regular";
import { ShareThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Share = memo(function Share(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ShareBold,
      duotone: ShareDuotone,
      fill: ShareFill,
      light: ShareLight,
      regular: ShareRegular,
      thin: ShareThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
