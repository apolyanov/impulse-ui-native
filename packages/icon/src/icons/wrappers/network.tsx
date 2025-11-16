import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { NetworkBold } from "../bold";
import { NetworkDuotone } from "../duotone";
import { NetworkFill } from "../fill";
import { NetworkLight } from "../light";
import { NetworkRegular } from "../regular";
import { NetworkThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Network = memo(function Network(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: NetworkBold,
      duotone: NetworkDuotone,
      fill: NetworkFill,
      light: NetworkLight,
      regular: NetworkRegular,
      thin: NetworkThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
