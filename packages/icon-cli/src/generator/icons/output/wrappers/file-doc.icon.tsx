import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { FileDocBoldIcon } from "../bold";
        import { FileDocDuotoneIcon } from "../duotone";
        import { FileDocFillIcon } from "../fill";
        import { FileDocLightIcon } from "../light";
        import { FileDocRegularIcon } from "../regular";
        import { FileDocThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const FileDocIcon = memo(function FileDoc(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: FileDocBoldIcon,
            duotone: FileDocDuotoneIcon,
            fill: FileDocFillIcon,
            light: FileDocLightIcon,
            regular: FileDocRegularIcon,
            thin: FileDocThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
