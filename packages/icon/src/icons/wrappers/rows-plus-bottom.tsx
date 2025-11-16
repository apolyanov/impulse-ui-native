import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { RowsPlusBottomBold } from "../bold";
import { RowsPlusBottomDuotone } from "../duotone";
import { RowsPlusBottomFill } from "../fill";
import { RowsPlusBottomLight } from "../light";
import { RowsPlusBottomRegular } from "../regular";
import { RowsPlusBottomThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const RowsPlusBottom = memo(function RowsPlusBottom(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: RowsPlusBottomBold,
      duotone: RowsPlusBottomDuotone,
      fill: RowsPlusBottomFill,
      light: RowsPlusBottomLight,
      regular: RowsPlusBottomRegular,
      thin: RowsPlusBottomThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
