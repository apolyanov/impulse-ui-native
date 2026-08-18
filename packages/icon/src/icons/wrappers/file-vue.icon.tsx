import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { FileVueBoldIcon } from "../bold/file-vue-bold.icon";
import { FileVueDuotoneIcon } from "../duotone/file-vue-duotone.icon";
import { FileVueFillIcon } from "../fill/file-vue-fill.icon";
import { FileVueLightIcon } from "../light/file-vue-light.icon";
import { FileVueRegularIcon } from "../regular/file-vue-regular.icon";
import { FileVueThinIcon } from "../thin/file-vue-thin.icon";

export const FileVueIcon = memo(function FileVue(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FileVueBoldIcon,
      duotone: FileVueDuotoneIcon,
      fill: FileVueFillIcon,
      light: FileVueLightIcon,
      regular: FileVueRegularIcon,
      thin: FileVueThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
