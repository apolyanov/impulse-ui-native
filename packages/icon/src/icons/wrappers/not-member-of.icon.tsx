import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { NotMemberOfBoldIcon } from "../bold/not-member-of-bold.icon";
import { NotMemberOfDuotoneIcon } from "../duotone/not-member-of-duotone.icon";
import { NotMemberOfFillIcon } from "../fill/not-member-of-fill.icon";
import { NotMemberOfLightIcon } from "../light/not-member-of-light.icon";
import { NotMemberOfRegularIcon } from "../regular/not-member-of-regular.icon";
import { NotMemberOfThinIcon } from "../thin/not-member-of-thin.icon";

export const NotMemberOfIcon = memo(function NotMemberOf(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: NotMemberOfBoldIcon,
      duotone: NotMemberOfDuotoneIcon,
      fill: NotMemberOfFillIcon,
      light: NotMemberOfLightIcon,
      regular: NotMemberOfRegularIcon,
      thin: NotMemberOfThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
