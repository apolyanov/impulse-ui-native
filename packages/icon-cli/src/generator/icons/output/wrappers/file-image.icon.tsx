import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { FileImageBoldIcon } from "../bold";
        import { FileImageDuotoneIcon } from "../duotone";
        import { FileImageFillIcon } from "../fill";
        import { FileImageLightIcon } from "../light";
        import { FileImageRegularIcon } from "../regular";
        import { FileImageThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const FileImageIcon = memo(function FileImage(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: FileImageBoldIcon,
            duotone: FileImageDuotoneIcon,
            fill: FileImageFillIcon,
            light: FileImageLightIcon,
            regular: FileImageRegularIcon,
            thin: FileImageThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
