import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ListDashesBoldIcon } from "../bold/list-dashes-bold.icon";
import { ListDashesDuotoneIcon } from "../duotone/list-dashes-duotone.icon";
import { ListDashesFillIcon } from "../fill/list-dashes-fill.icon";
import { ListDashesLightIcon } from "../light/list-dashes-light.icon";
import { ListDashesRegularIcon } from "../regular/list-dashes-regular.icon";
import { ListDashesThinIcon } from "../thin/list-dashes-thin.icon";

export const ListDashesIcon = memo(function ListDashes(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ListDashesBoldIcon,
      duotone: ListDashesDuotoneIcon,
      fill: ListDashesFillIcon,
      light: ListDashesLightIcon,
      regular: ListDashesRegularIcon,
      thin: ListDashesThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
