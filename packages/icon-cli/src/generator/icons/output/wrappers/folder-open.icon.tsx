import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { FolderOpenBoldIcon } from "../bold";
        import { FolderOpenDuotoneIcon } from "../duotone";
        import { FolderOpenFillIcon } from "../fill";
        import { FolderOpenLightIcon } from "../light";
        import { FolderOpenRegularIcon } from "../regular";
        import { FolderOpenThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const FolderOpenIcon = memo(function FolderOpen(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: FolderOpenBoldIcon,
            duotone: FolderOpenDuotoneIcon,
            fill: FolderOpenFillIcon,
            light: FolderOpenLightIcon,
            regular: FolderOpenRegularIcon,
            thin: FolderOpenThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
