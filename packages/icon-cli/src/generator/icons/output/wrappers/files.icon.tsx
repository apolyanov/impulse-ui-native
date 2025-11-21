import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { FilesBoldIcon } from "../bold";
        import { FilesDuotoneIcon } from "../duotone";
        import { FilesFillIcon } from "../fill";
        import { FilesLightIcon } from "../light";
        import { FilesRegularIcon } from "../regular";
        import { FilesThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const FilesIcon = memo(function Files(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: FilesBoldIcon,
            duotone: FilesDuotoneIcon,
            fill: FilesFillIcon,
            light: FilesLightIcon,
            regular: FilesRegularIcon,
            thin: FilesThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
