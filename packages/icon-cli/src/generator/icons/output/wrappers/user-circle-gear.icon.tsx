import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { UserCircleGearBoldIcon } from "../bold";
        import { UserCircleGearDuotoneIcon } from "../duotone";
        import { UserCircleGearFillIcon } from "../fill";
        import { UserCircleGearLightIcon } from "../light";
        import { UserCircleGearRegularIcon } from "../regular";
        import { UserCircleGearThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const UserCircleGearIcon = memo(function UserCircleGear(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: UserCircleGearBoldIcon,
            duotone: UserCircleGearDuotoneIcon,
            fill: UserCircleGearFillIcon,
            light: UserCircleGearLightIcon,
            regular: UserCircleGearRegularIcon,
            thin: UserCircleGearThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
