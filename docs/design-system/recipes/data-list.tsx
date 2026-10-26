import { useMemo, useState } from "react";

import { DataView } from "@impulse-ui-native/data-state";
import { FlatList } from "@impulse-ui-native/flat-list";
import { List } from "@impulse-ui-native/list";
import { Pagination } from "@impulse-ui-native/pagination";
import { Button, Typography, View } from "@impulse-ui-native/primitives";
import { ScrollView } from "@impulse-ui-native/scroll-view";

import { RecipeLoader } from "./recipe-loader";

export function DataListRecipe() {
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [empty, setEmpty] = useState(false);
  const items = useMemo(
    () =>
      empty
        ? []
        : [
            { id: "one", title: `Project ${(page - 1) * 2 + 1}` },
            { id: "two", title: `Project ${(page - 1) * 2 + 2}` },
          ],
    [empty, page],
  );
  const errorDetails = useMemo(
    () => ({
      text: "Could not load projects.",
      primaryActionLabel: "Retry",
      onPressPrimaryAction: () => setLoading(false),
    }),
    [],
  );
  const emptyDetails = useMemo(
    () => ({
      text: "No projects yet.",
      primaryActionLabel: "Show projects",
      onPressPrimaryAction: () => setEmpty(false),
    }),
    [],
  );

  return (
    <View gap={16}>
      <View flexDirection="row" gap={8}>
        <Button variant="outlined" onPress={() => setLoading(!loading)}>
          Toggle loading
        </Button>
        <Button variant="outlined" onPress={() => setEmpty(!empty)}>
          Toggle empty
        </Button>
      </View>
      <DataView
        loading={loading}
        error={null}
        isEmpty={!items.length}
        LoadingComponent={RecipeLoader}
        errorViewProps={errorDetails}
        emptyViewProps={emptyDetails}
      >
        <View height={160}>
          <FlatList
            data={items}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <List.Item>
                <List.Content>
                  <Typography.Body>{item.title}</Typography.Body>
                </List.Content>
              </List.Item>
            )}
          />
        </View>
      </DataView>
      <Pagination page={page} onPageChange={setPage} pageCount={5} compact />
      <ScrollView horizontal>
        <Typography.Caption>
          Measured scrolling is separate from virtualized FlatList rows.
        </Typography.Caption>
      </ScrollView>
    </View>
  );
}
