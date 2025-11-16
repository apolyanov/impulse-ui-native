import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { WindmillBold } from "../bold";
import { WindmillDuotone } from "../duotone";
import { WindmillFill } from "../fill";
import { WindmillLight } from "../light";
import { WindmillRegular } from "../regular";
import { WindmillThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Windmill = memo(function Windmill(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: WindmillBold,
      duotone: WindmillDuotone,
      fill: WindmillFill,
      light: WindmillLight,
      regular: WindmillRegular,
      thin: WindmillThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
