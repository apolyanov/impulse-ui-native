import { useEventCallback } from "@impulse-ui-native/core";
import { useEchoListener } from "@impulse-ui-native/echo";
import {
  Layer,
  RegistrationTitle,
} from "@impulse-ui-native/layer-manager-types";
import { memo, useState } from "react";

export const LayerCenter = memo(function LayerCenter() {
  const [stack, setStack] = useState<Layer[]>([]);

  const removeById = useEventCallback((id: string) => {
    setStack((prevState) => prevState.filter((layer) => layer.id !== id));
  });

  useEchoListener("addLayer", (data) => {
    setStack((prevState) => {
      const newLayer: Layer = {
        id: data.id,
        props: data.props,
        layerProps: {
          ...data.registrationProps,
          onCloseFinished() {
            data.registrationProps.onCloseFinished?.();
            removeById(data.id);
          },
        },
        Component: data.Component,
      };

      return [...prevState, newLayer];
    });
  });

  useEchoListener("removeLayer", (data) => removeById(data.id));

  const getTitle = useEventCallback(
    <Props extends object = {}>(
      props: Props,
      title?: RegistrationTitle<Props>
    ): string | undefined => {
      if (typeof title === "function") {
        return title(props);
      }

      if (typeof title === "string") {
        return title;
      }
    }
  );

  return stack.map((layer, index) => (
    <layer.Component
      key={layer.id}
      {...layer.layerProps}
      {...layer.props}
      layer={index + 1}
      title={getTitle(layer.props, layer.layerProps.title)}
      open
    >
      <layer.layerProps.Content {...layer.props} />
    </layer.Component>
  ));
});
