import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { YarnBold } from "../bold";
import { YarnDuotone } from "../duotone";
import { YarnFill } from "../fill";
import { YarnLight } from "../light";
import { YarnRegular } from "../regular";
import { YarnThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Yarn = memo(function Yarn(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: YarnBold,
      duotone: YarnDuotone,
      fill: YarnFill,
      light: YarnLight,
      regular: YarnRegular,
      thin: YarnThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
