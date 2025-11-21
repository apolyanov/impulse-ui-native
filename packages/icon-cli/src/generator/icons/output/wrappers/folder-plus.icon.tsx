import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { FolderPlusBoldIcon } from "../bold";
        import { FolderPlusDuotoneIcon } from "../duotone";
        import { FolderPlusFillIcon } from "../fill";
        import { FolderPlusLightIcon } from "../light";
        import { FolderPlusRegularIcon } from "../regular";
        import { FolderPlusThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const FolderPlusIcon = memo(function FolderPlus(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: FolderPlusBoldIcon,
            duotone: FolderPlusDuotoneIcon,
            fill: FolderPlusFillIcon,
            light: FolderPlusLightIcon,
            regular: FolderPlusRegularIcon,
            thin: FolderPlusThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
