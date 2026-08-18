import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { PersonSimpleTaiChiBoldIcon } from "../bold/person-simple-tai-chi-bold.icon";
import { PersonSimpleTaiChiDuotoneIcon } from "../duotone/person-simple-tai-chi-duotone.icon";
import { PersonSimpleTaiChiFillIcon } from "../fill/person-simple-tai-chi-fill.icon";
import { PersonSimpleTaiChiLightIcon } from "../light/person-simple-tai-chi-light.icon";
import { PersonSimpleTaiChiRegularIcon } from "../regular/person-simple-tai-chi-regular.icon";
import { PersonSimpleTaiChiThinIcon } from "../thin/person-simple-tai-chi-thin.icon";

export const PersonSimpleTaiChiIcon = memo(function PersonSimpleTaiChi(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PersonSimpleTaiChiBoldIcon,
      duotone: PersonSimpleTaiChiDuotoneIcon,
      fill: PersonSimpleTaiChiFillIcon,
      light: PersonSimpleTaiChiLightIcon,
      regular: PersonSimpleTaiChiRegularIcon,
      thin: PersonSimpleTaiChiThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
