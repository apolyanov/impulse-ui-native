import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { FolderDashedBoldIcon } from "../bold";
        import { FolderDashedDuotoneIcon } from "../duotone";
        import { FolderDashedFillIcon } from "../fill";
        import { FolderDashedLightIcon } from "../light";
        import { FolderDashedRegularIcon } from "../regular";
        import { FolderDashedThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const FolderDashedIcon = memo(function FolderDashed(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: FolderDashedBoldIcon,
            duotone: FolderDashedDuotoneIcon,
            fill: FolderDashedFillIcon,
            light: FolderDashedLightIcon,
            regular: FolderDashedRegularIcon,
            thin: FolderDashedThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
