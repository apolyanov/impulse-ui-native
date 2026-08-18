import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { NotePencilBoldIcon } from "../bold/note-pencil-bold.icon";
import { NotePencilDuotoneIcon } from "../duotone/note-pencil-duotone.icon";
import { NotePencilFillIcon } from "../fill/note-pencil-fill.icon";
import { NotePencilLightIcon } from "../light/note-pencil-light.icon";
import { NotePencilRegularIcon } from "../regular/note-pencil-regular.icon";
import { NotePencilThinIcon } from "../thin/note-pencil-thin.icon";

export const NotePencilIcon = memo(function NotePencil(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: NotePencilBoldIcon,
      duotone: NotePencilDuotoneIcon,
      fill: NotePencilFillIcon,
      light: NotePencilLightIcon,
      regular: NotePencilRegularIcon,
      thin: NotePencilThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
