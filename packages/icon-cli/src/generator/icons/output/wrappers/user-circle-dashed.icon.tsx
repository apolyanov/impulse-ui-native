import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { UserCircleDashedBoldIcon } from "../bold";
        import { UserCircleDashedDuotoneIcon } from "../duotone";
        import { UserCircleDashedFillIcon } from "../fill";
        import { UserCircleDashedLightIcon } from "../light";
        import { UserCircleDashedRegularIcon } from "../regular";
        import { UserCircleDashedThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const UserCircleDashedIcon = memo(function UserCircleDashed(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: UserCircleDashedBoldIcon,
            duotone: UserCircleDashedDuotoneIcon,
            fill: UserCircleDashedFillIcon,
            light: UserCircleDashedLightIcon,
            regular: UserCircleDashedRegularIcon,
            thin: UserCircleDashedThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
