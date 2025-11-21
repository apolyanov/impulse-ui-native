import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { ImagesSquareBoldIcon } from "../bold";
        import { ImagesSquareDuotoneIcon } from "../duotone";
        import { ImagesSquareFillIcon } from "../fill";
        import { ImagesSquareLightIcon } from "../light";
        import { ImagesSquareRegularIcon } from "../regular";
        import { ImagesSquareThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const ImagesSquareIcon = memo(function ImagesSquare(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: ImagesSquareBoldIcon,
            duotone: ImagesSquareDuotoneIcon,
            fill: ImagesSquareFillIcon,
            light: ImagesSquareLightIcon,
            regular: ImagesSquareRegularIcon,
            thin: ImagesSquareThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
