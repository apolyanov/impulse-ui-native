import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { FoldersBoldIcon } from "../bold";
        import { FoldersDuotoneIcon } from "../duotone";
        import { FoldersFillIcon } from "../fill";
        import { FoldersLightIcon } from "../light";
        import { FoldersRegularIcon } from "../regular";
        import { FoldersThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const FoldersIcon = memo(function Folders(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: FoldersBoldIcon,
            duotone: FoldersDuotoneIcon,
            fill: FoldersFillIcon,
            light: FoldersLightIcon,
            regular: FoldersRegularIcon,
            thin: FoldersThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
