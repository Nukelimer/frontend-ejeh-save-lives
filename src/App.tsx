import { FC } from "react";
import Routing from "./routing/Routing";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "./components/ui/sonner";
const App: FC = () => {
        return (
                <BrowserRouter
                        future={{
                                v7_relativeSplatPath: true,
                                v7_startTransition: true
                        }}
                >
                        <Toaster />
                        <Routing />
                </BrowserRouter>
        );
};

export default App;
