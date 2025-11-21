import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { FolderSimpleUserBoldIcon } from "../bold";
        import { FolderSimpleUserDuotoneIcon } from "../duotone";
        import { FolderSimpleUserFillIcon } from "../fill";
        import { FolderSimpleUserLightIcon } from "../light";
        import { FolderSimpleUserRegularIcon } from "../regular";
        import { FolderSimpleUserThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const FolderSimpleUserIcon = memo(function FolderSimpleUser(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: FolderSimpleUserBoldIcon,
            duotone: FolderSimpleUserDuotoneIcon,
            fill: FolderSimpleUserFillIcon,
            light: FolderSimpleUserLightIcon,
            regular: FolderSimpleUserRegularIcon,
            thin: FolderSimpleUserThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
