import { FC } from "react";
import Routing from "./routing/Routing";
import { BrowserRouter } from "react-router-dom";

const App: FC = () => {
        return (
                <BrowserRouter
                        future={{
                                v7_relativeSplatPath: true,
                                v7_startTransition: true
                        }}
                >
                        <Routing />
                </BrowserRouter>
        );
};

export default App;
