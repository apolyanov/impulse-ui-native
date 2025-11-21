import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { UserSquareBoldIcon } from "../bold";
        import { UserSquareDuotoneIcon } from "../duotone";
        import { UserSquareFillIcon } from "../fill";
        import { UserSquareLightIcon } from "../light";
        import { UserSquareRegularIcon } from "../regular";
        import { UserSquareThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const UserSquareIcon = memo(function UserSquare(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: UserSquareBoldIcon,
            duotone: UserSquareDuotoneIcon,
            fill: UserSquareFillIcon,
            light: UserSquareLightIcon,
            regular: UserSquareRegularIcon,
            thin: UserSquareThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
