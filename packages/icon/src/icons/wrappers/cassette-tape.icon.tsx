import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CassetteTapeBoldIcon } from "../bold/cassette-tape-bold.icon";
import { CassetteTapeDuotoneIcon } from "../duotone/cassette-tape-duotone.icon";
import { CassetteTapeFillIcon } from "../fill/cassette-tape-fill.icon";
import { CassetteTapeLightIcon } from "../light/cassette-tape-light.icon";
import { CassetteTapeRegularIcon } from "../regular/cassette-tape-regular.icon";
import { CassetteTapeThinIcon } from "../thin/cassette-tape-thin.icon";

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
