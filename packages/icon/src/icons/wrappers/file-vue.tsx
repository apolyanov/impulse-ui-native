import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { FileVueBold } from "../bold";
import { FileVueDuotone } from "../duotone";
import { FileVueFill } from "../fill";
import { FileVueLight } from "../light";
import { FileVueRegular } from "../regular";
import { FileVueThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const FileVue = memo(function FileVue(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FileVueBold,
      duotone: FileVueDuotone,
      fill: FileVueFill,
      light: FileVueLight,
      regular: FileVueRegular,
      thin: FileVueThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
