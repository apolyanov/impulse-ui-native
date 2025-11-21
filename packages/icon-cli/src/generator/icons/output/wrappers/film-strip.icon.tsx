import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { FilmStripBoldIcon } from "../bold";
        import { FilmStripDuotoneIcon } from "../duotone";
        import { FilmStripFillIcon } from "../fill";
        import { FilmStripLightIcon } from "../light";
        import { FilmStripRegularIcon } from "../regular";
        import { FilmStripThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const FilmStripIcon = memo(function FilmStrip(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: FilmStripBoldIcon,
            duotone: FilmStripDuotoneIcon,
            fill: FilmStripFillIcon,
            light: FilmStripLightIcon,
            regular: FilmStripRegularIcon,
            thin: FilmStripThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
