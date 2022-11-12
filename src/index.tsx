import ReactDOM, {render} from "react-dom";
import {BrowserRouter} from "react-router-dom";
import {createRoot} from "react-dom/client";
import {ThemeProvider} from "app/providers/ThemeProvider";
import App from "app/App";

import "./shared/config/i18n/i18n";

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
