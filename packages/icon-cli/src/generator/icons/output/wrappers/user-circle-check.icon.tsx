import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { UserCircleCheckBoldIcon } from "../bold";
        import { UserCircleCheckDuotoneIcon } from "../duotone";
        import { UserCircleCheckFillIcon } from "../fill";
        import { UserCircleCheckLightIcon } from "../light";
        import { UserCircleCheckRegularIcon } from "../regular";
        import { UserCircleCheckThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const UserCircleCheckIcon = memo(function UserCircleCheck(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: UserCircleCheckBoldIcon,
            duotone: UserCircleCheckDuotoneIcon,
            fill: UserCircleCheckFillIcon,
            light: UserCircleCheckLightIcon,
            regular: UserCircleCheckRegularIcon,
            thin: UserCircleCheckThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
