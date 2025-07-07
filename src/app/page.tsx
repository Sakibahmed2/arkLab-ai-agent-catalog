import HomePage from "@/components/page/HomePage";
import ProtectedRoutes from "@/lib/ProtectedRoutes";

const App = () => {
  return (
    <main className="p-6 max-w-7xl mx-auto">
      <ProtectedRoutes>
        <HomePage />
      </ProtectedRoutes>
    </main>
  );
};

export default App;
