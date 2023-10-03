import AppRoutes from "./components/AppRoutes";
import { Provider } from "react-redux";
import appStore from "./store/appStore";


function App() {

  return (
    <div>
      <Provider store={appStore}>
        <AppRoutes />
      </Provider>
    </div>
  );
}

export default App;
