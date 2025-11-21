import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { FileJsxBoldIcon } from "../bold";
        import { FileJsxDuotoneIcon } from "../duotone";
        import { FileJsxFillIcon } from "../fill";
        import { FileJsxLightIcon } from "../light";
        import { FileJsxRegularIcon } from "../regular";
        import { FileJsxThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const FileJsxIcon = memo(function FileJsx(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: FileJsxBoldIcon,
            duotone: FileJsxDuotoneIcon,
            fill: FileJsxFillIcon,
            light: FileJsxLightIcon,
            regular: FileJsxRegularIcon,
            thin: FileJsxThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
