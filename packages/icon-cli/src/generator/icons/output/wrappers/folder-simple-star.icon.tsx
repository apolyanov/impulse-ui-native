import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { FolderSimpleStarBoldIcon } from "../bold";
        import { FolderSimpleStarDuotoneIcon } from "../duotone";
        import { FolderSimpleStarFillIcon } from "../fill";
        import { FolderSimpleStarLightIcon } from "../light";
        import { FolderSimpleStarRegularIcon } from "../regular";
        import { FolderSimpleStarThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const FolderSimpleStarIcon = memo(function FolderSimpleStar(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: FolderSimpleStarBoldIcon,
            duotone: FolderSimpleStarDuotoneIcon,
            fill: FolderSimpleStarFillIcon,
            light: FolderSimpleStarLightIcon,
            regular: FolderSimpleStarRegularIcon,
            thin: FolderSimpleStarThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
