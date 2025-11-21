import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { UserRectangleBoldIcon } from "../bold";
        import { UserRectangleDuotoneIcon } from "../duotone";
        import { UserRectangleFillIcon } from "../fill";
        import { UserRectangleLightIcon } from "../light";
        import { UserRectangleRegularIcon } from "../regular";
        import { UserRectangleThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const UserRectangleIcon = memo(function UserRectangle(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: UserRectangleBoldIcon,
            duotone: UserRectangleDuotoneIcon,
            fill: UserRectangleFillIcon,
            light: UserRectangleLightIcon,
            regular: UserRectangleRegularIcon,
            thin: UserRectangleThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
