import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { BookUserBoldIcon } from "../bold";
        import { BookUserDuotoneIcon } from "../duotone";
        import { BookUserFillIcon } from "../fill";
        import { BookUserLightIcon } from "../light";
        import { BookUserRegularIcon } from "../regular";
        import { BookUserThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const BookUserIcon = memo(function BookUser(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: BookUserBoldIcon,
            duotone: BookUserDuotoneIcon,
            fill: BookUserFillIcon,
            light: BookUserLightIcon,
            regular: BookUserRegularIcon,
            thin: BookUserThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
