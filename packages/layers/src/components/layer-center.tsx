import { memo, useState } from "react";

import { useEventCallback } from "@impulse-ui-native/core";
import { useEchoListener } from "@impulse-ui-native/echo";
import { Layer } from "@impulse-ui-native/types";

import { resolveTitle } from "../utils";

type LayerState = Layer & {
  open: boolean;
};

export const LayerCenter = memo(function LayerCenter() {
  const [stack, setStack] = useState<LayerState[]>([]);

  const removeById = useEventCallback((id: string) => {
    setStack((prevState) => prevState.filter((layer) => layer.id !== id));
  });

  const closeById = useEventCallback((id: string) => {
    setStack((prevState) =>
      prevState.map((layer) => {
        if (layer.id !== id) {
          return layer;
        }

        return {
          ...layer,
          open: false,
        };
      }),
    );
  });

  useEchoListener("addLayer", (data) => {
    setStack((prevState) => {
      const unique = data.registrationProps.unique;
      const newLayerId = data.id;

      const exists = prevState.some((layer) => layer.id === newLayerId);

      if (unique && exists) {
        return prevState;
      }

      const newLayer: LayerState = {
        id: newLayerId,
        props: data.props,
        open: true,
        layerProps: {
          ...data.registrationProps,
          onCloseFinished() {
            data.registrationProps.onCloseFinished?.();
            removeById(newLayerId);
          },
        },
        LayerComponent: data.Content,
      };

      return [...prevState, newLayer];
    });
  });

  useEchoListener("removeLayer", (data) => {
    closeById(data.id);
  });

  return stack.map((layer) => (
    <layer.LayerComponent
      {...layer.layerProps}
      key={layer.id}
      id={layer.id}
      title={resolveTitle(layer.props, layer.layerProps.title)}
      open={layer.open}
    >
      <layer.layerProps.Content {...layer.props} />
    </layer.LayerComponent>
  ));
});
