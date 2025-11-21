import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { FileVideoBoldIcon } from "../bold";
        import { FileVideoDuotoneIcon } from "../duotone";
        import { FileVideoFillIcon } from "../fill";
        import { FileVideoLightIcon } from "../light";
        import { FileVideoRegularIcon } from "../regular";
        import { FileVideoThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const FileVideoIcon = memo(function FileVideo(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: FileVideoBoldIcon,
            duotone: FileVideoDuotoneIcon,
            fill: FileVideoFillIcon,
            light: FileVideoLightIcon,
            regular: FileVideoRegularIcon,
            thin: FileVideoThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
