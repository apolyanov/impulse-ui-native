import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { UsersBoldIcon } from "../bold";
        import { UsersDuotoneIcon } from "../duotone";
        import { UsersFillIcon } from "../fill";
        import { UsersLightIcon } from "../light";
        import { UsersRegularIcon } from "../regular";
        import { UsersThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const UsersIcon = memo(function Users(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: UsersBoldIcon,
            duotone: UsersDuotoneIcon,
            fill: UsersFillIcon,
            light: UsersLightIcon,
            regular: UsersRegularIcon,
            thin: UsersThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
