import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { WindmillBoldIcon } from "../bold/windmill-bold.icon";
import { WindmillDuotoneIcon } from "../duotone/windmill-duotone.icon";
import { WindmillFillIcon } from "../fill/windmill-fill.icon";
import { WindmillLightIcon } from "../light/windmill-light.icon";
import { WindmillRegularIcon } from "../regular/windmill-regular.icon";
import { WindmillThinIcon } from "../thin/windmill-thin.icon";

export const WindmillIcon = memo(function Windmill(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: WindmillBoldIcon,
      duotone: WindmillDuotoneIcon,
      fill: WindmillFillIcon,
      light: WindmillLightIcon,
      regular: WindmillRegularIcon,
      thin: WindmillThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
