import { Button } from "@/components/ui/button";

function App() {
  return (
    <div className="bg-white  border-2 border-black min-h-screen flex flex-col items-center space-y-4">
      <h1>Redux React Shadcn</h1>
      <Button variant={"destructive"}>Button</Button>

      <Button>Btn sec</Button>
    </div>
  );
}

export default App;
