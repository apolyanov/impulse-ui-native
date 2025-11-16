import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { PersonSimpleTaiChiBold } from "../bold";
import { PersonSimpleTaiChiDuotone } from "../duotone";
import { PersonSimpleTaiChiFill } from "../fill";
import { PersonSimpleTaiChiLight } from "../light";
import { PersonSimpleTaiChiRegular } from "../regular";
import { PersonSimpleTaiChiThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const PersonSimpleTaiChi = memo(function PersonSimpleTaiChi(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PersonSimpleTaiChiBold,
      duotone: PersonSimpleTaiChiDuotone,
      fill: PersonSimpleTaiChiFill,
      light: PersonSimpleTaiChiLight,
      regular: PersonSimpleTaiChiRegular,
      thin: PersonSimpleTaiChiThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
