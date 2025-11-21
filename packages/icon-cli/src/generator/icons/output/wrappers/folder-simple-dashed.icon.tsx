import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { FolderSimpleDashedBoldIcon } from "../bold";
        import { FolderSimpleDashedDuotoneIcon } from "../duotone";
        import { FolderSimpleDashedFillIcon } from "../fill";
        import { FolderSimpleDashedLightIcon } from "../light";
        import { FolderSimpleDashedRegularIcon } from "../regular";
        import { FolderSimpleDashedThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const FolderSimpleDashedIcon = memo(function FolderSimpleDashed(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: FolderSimpleDashedBoldIcon,
            duotone: FolderSimpleDashedDuotoneIcon,
            fill: FolderSimpleDashedFillIcon,
            light: FolderSimpleDashedLightIcon,
            regular: FolderSimpleDashedRegularIcon,
            thin: FolderSimpleDashedThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
