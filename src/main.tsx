import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import EditorMenu from "./EditorMenu";

// biome-ignore lint/style/noNonNullAssertion: <explanation>
createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<EditorMenu />
	</StrictMode>,
);
