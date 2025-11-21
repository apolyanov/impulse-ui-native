import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { PathBoldIcon } from "../bold";
        import { PathDuotoneIcon } from "../duotone";
        import { PathFillIcon } from "../fill";
        import { PathLightIcon } from "../light";
        import { PathRegularIcon } from "../regular";
        import { PathThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const PathIcon = memo(function Path(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: PathBoldIcon,
            duotone: PathDuotoneIcon,
            fill: PathFillIcon,
            light: PathLightIcon,
            regular: PathRegularIcon,
            thin: PathThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
