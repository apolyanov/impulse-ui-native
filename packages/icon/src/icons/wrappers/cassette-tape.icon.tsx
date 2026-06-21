import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CassetteTapeBoldIcon } from "../bold";
import { CassetteTapeDuotoneIcon } from "../duotone";
import { CassetteTapeFillIcon } from "../fill";
import { CassetteTapeLightIcon } from "../light";
import { CassetteTapeRegularIcon } from "../regular";
import { CassetteTapeThinIcon } from "../thin";

export const CassetteTapeIcon = memo(function CassetteTape(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CassetteTapeBoldIcon,
      duotone: CassetteTapeDuotoneIcon,
      fill: CassetteTapeFillIcon,
      light: CassetteTapeLightIcon,
      regular: CassetteTapeRegularIcon,
      thin: CassetteTapeThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
