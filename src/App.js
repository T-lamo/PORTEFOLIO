import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from "@components/shared/Button"; // Le bouton qu'on a créé au début
import { Navbar } from "@components/shared/Navbar";
import { Send } from "lucide-react";
function App() {
    return (_jsxs("main", { className: "bg-background relative z-0 min-h-screen w-full", children: [_jsx(Navbar, {}), _jsxs("section", { className: "flex h-screen flex-col items-center justify-center", children: [_jsxs("h1", { className: "mb-6 text-6xl font-bold", children: ["Setup ", _jsx("span", { className: "text-primary", children: "R\u00E9ussi" })] }), _jsx(Button, { label: "Me contacter", Icon: Send, variant: "primary" })] })] }));
}
export default App;
