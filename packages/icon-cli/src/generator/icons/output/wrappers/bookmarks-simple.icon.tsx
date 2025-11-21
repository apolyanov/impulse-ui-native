import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { BookmarksSimpleBoldIcon } from "../bold";
        import { BookmarksSimpleDuotoneIcon } from "../duotone";
        import { BookmarksSimpleFillIcon } from "../fill";
        import { BookmarksSimpleLightIcon } from "../light";
        import { BookmarksSimpleRegularIcon } from "../regular";
        import { BookmarksSimpleThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const BookmarksSimpleIcon = memo(function BookmarksSimple(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: BookmarksSimpleBoldIcon,
            duotone: BookmarksSimpleDuotoneIcon,
            fill: BookmarksSimpleFillIcon,
            light: BookmarksSimpleLightIcon,
            regular: BookmarksSimpleRegularIcon,
            thin: BookmarksSimpleThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
