import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { UserCirclePlusBoldIcon } from "../bold";
        import { UserCirclePlusDuotoneIcon } from "../duotone";
        import { UserCirclePlusFillIcon } from "../fill";
        import { UserCirclePlusLightIcon } from "../light";
        import { UserCirclePlusRegularIcon } from "../regular";
        import { UserCirclePlusThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const UserCirclePlusIcon = memo(function UserCirclePlus(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: UserCirclePlusBoldIcon,
            duotone: UserCirclePlusDuotoneIcon,
            fill: UserCirclePlusFillIcon,
            light: UserCirclePlusLightIcon,
            regular: UserCirclePlusRegularIcon,
            thin: UserCirclePlusThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
