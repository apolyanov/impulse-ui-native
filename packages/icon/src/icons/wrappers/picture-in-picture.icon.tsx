import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { PictureInPictureBoldIcon } from "../bold/picture-in-picture-bold.icon";
import { PictureInPictureDuotoneIcon } from "../duotone/picture-in-picture-duotone.icon";
import { PictureInPictureFillIcon } from "../fill/picture-in-picture-fill.icon";
import { PictureInPictureLightIcon } from "../light/picture-in-picture-light.icon";
import { PictureInPictureRegularIcon } from "../regular/picture-in-picture-regular.icon";
import { PictureInPictureThinIcon } from "../thin/picture-in-picture-thin.icon";

export const PictureInPictureIcon = memo(function PictureInPicture(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PictureInPictureBoldIcon,
      duotone: PictureInPictureDuotoneIcon,
      fill: PictureInPictureFillIcon,
      light: PictureInPictureLightIcon,
      regular: PictureInPictureRegularIcon,
      thin: PictureInPictureThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
