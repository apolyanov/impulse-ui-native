import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { GameControllerBoldIcon } from "../bold";
        import { GameControllerDuotoneIcon } from "../duotone";
        import { GameControllerFillIcon } from "../fill";
        import { GameControllerLightIcon } from "../light";
        import { GameControllerRegularIcon } from "../regular";
        import { GameControllerThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const GameControllerIcon = memo(function GameController(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: GameControllerBoldIcon,
            duotone: GameControllerDuotoneIcon,
            fill: GameControllerFillIcon,
            light: GameControllerLightIcon,
            regular: GameControllerRegularIcon,
            thin: GameControllerThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
