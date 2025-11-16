import { AllIconsGrid } from "./components/all-icons-grid";
import { Filters } from "./components/filters";
import { SelectedIcons } from "./components/selected-icons";

const iconsContainerStyle: React.CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: 16, // Tailwind gap-3 = 0.75rem
};

const containerStyle: React.CSSProperties = {
  margin: "0 auto",
  width: "80%",
  display: "flex",
  flexDirection: "column",
};

function App() {
  return (
    <div style={containerStyle}>
      <Filters />
      <AllIconsGrid />
      <SelectedIcons />
      <div style={iconsContainerStyle}>
        {/* {visibleIcons.map((svg) => (
          <Icon key={svg.name} color="white" svg={svg} />
        ))} */}
      </div>
    </div>
  );
}

export default App;
