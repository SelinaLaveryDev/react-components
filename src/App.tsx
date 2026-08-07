import Button from "./components/Button";

function App() {
  return (
    <div className="p-10 flex flex-col gap-4">
      <h1 className="text-2xl font-bold mb-4">Component Playground</h1>

      <div className="flex gap-3">
        <Button label="Primary" variant="primary" />
        <Button label="Secondary" variant="secondary" />
        <Button label="Danger" variant="danger" />
      </div>

      <div className="flex gap-3 items-center">
        <Button label="Small" size="sm" />
        <Button label="Medium" size="md" />
        <Button label="Large" size="lg" />
      </div>

      <div>
        <Button label="Disabled" disabled />
      </div>
    </div>
  );
}

export default App;
