import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { FolderStarBoldIcon } from "../bold";
        import { FolderStarDuotoneIcon } from "../duotone";
        import { FolderStarFillIcon } from "../fill";
        import { FolderStarLightIcon } from "../light";
        import { FolderStarRegularIcon } from "../regular";
        import { FolderStarThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const FolderStarIcon = memo(function FolderStar(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: FolderStarBoldIcon,
            duotone: FolderStarDuotoneIcon,
            fill: FolderStarFillIcon,
            light: FolderStarLightIcon,
            regular: FolderStarRegularIcon,
            thin: FolderStarThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
