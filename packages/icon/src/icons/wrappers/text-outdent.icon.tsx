import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { TextOutdentBoldIcon } from "../bold/text-outdent-bold.icon";
import { TextOutdentDuotoneIcon } from "../duotone/text-outdent-duotone.icon";
import { TextOutdentFillIcon } from "../fill/text-outdent-fill.icon";
import { TextOutdentLightIcon } from "../light/text-outdent-light.icon";
import { TextOutdentRegularIcon } from "../regular/text-outdent-regular.icon";
import { TextOutdentThinIcon } from "../thin/text-outdent-thin.icon";

export const TextOutdentIcon = memo(function TextOutdent(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TextOutdentBoldIcon,
      duotone: TextOutdentDuotoneIcon,
      fill: TextOutdentFillIcon,
      light: TextOutdentLightIcon,
      regular: TextOutdentRegularIcon,
      thin: TextOutdentThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
