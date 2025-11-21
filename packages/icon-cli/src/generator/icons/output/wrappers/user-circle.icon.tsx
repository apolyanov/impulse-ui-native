import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { UserCircleBoldIcon } from "../bold";
        import { UserCircleDuotoneIcon } from "../duotone";
        import { UserCircleFillIcon } from "../fill";
        import { UserCircleLightIcon } from "../light";
        import { UserCircleRegularIcon } from "../regular";
        import { UserCircleThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const UserCircleIcon = memo(function UserCircle(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: UserCircleBoldIcon,
            duotone: UserCircleDuotoneIcon,
            fill: UserCircleFillIcon,
            light: UserCircleLightIcon,
            regular: UserCircleRegularIcon,
            thin: UserCircleThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
