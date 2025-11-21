import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { ArticleNyTimesBoldIcon } from "../bold";
        import { ArticleNyTimesDuotoneIcon } from "../duotone";
        import { ArticleNyTimesFillIcon } from "../fill";
        import { ArticleNyTimesLightIcon } from "../light";
        import { ArticleNyTimesRegularIcon } from "../regular";
        import { ArticleNyTimesThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const ArticleNyTimesIcon = memo(function ArticleNyTimes(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: ArticleNyTimesBoldIcon,
            duotone: ArticleNyTimesDuotoneIcon,
            fill: ArticleNyTimesFillIcon,
            light: ArticleNyTimesLightIcon,
            regular: ArticleNyTimesRegularIcon,
            thin: ArticleNyTimesThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
