import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { BookBookmarkBoldIcon } from "../bold";
        import { BookBookmarkDuotoneIcon } from "../duotone";
        import { BookBookmarkFillIcon } from "../fill";
        import { BookBookmarkLightIcon } from "../light";
        import { BookBookmarkRegularIcon } from "../regular";
        import { BookBookmarkThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const BookBookmarkIcon = memo(function BookBookmark(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: BookBookmarkBoldIcon,
            duotone: BookBookmarkDuotoneIcon,
            fill: BookBookmarkFillIcon,
            light: BookBookmarkLightIcon,
            regular: BookBookmarkRegularIcon,
            thin: BookBookmarkThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
