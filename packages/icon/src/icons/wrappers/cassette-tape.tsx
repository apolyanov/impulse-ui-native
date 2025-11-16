import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CassetteTapeBold } from "../bold";
import { CassetteTapeDuotone } from "../duotone";
import { CassetteTapeFill } from "../fill";
import { CassetteTapeLight } from "../light";
import { CassetteTapeRegular } from "../regular";
import { CassetteTapeThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CassetteTape = memo(function CassetteTape(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CassetteTapeBold,
      duotone: CassetteTapeDuotone,
      fill: CassetteTapeFill,
      light: CassetteTapeLight,
      regular: CassetteTapeRegular,
      thin: CassetteTapeThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
