import ReactDOM, {render} from "react-dom";
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import {createRoot} from "react-dom/client";
import ThemeProvider from "./theme/ThemeProvider";

const rootElement = document.getElementById('root');
if(!rootElement) throw new Error('Failed to find the root element');
const root = createRoot(rootElement);

root.render(
    <BrowserRouter>
        <ThemeProvider>
            <App />,
        </ThemeProvider>,
    </BrowserRouter>
)
