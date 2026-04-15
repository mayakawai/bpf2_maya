import { createRoot } from "react-dom/client";
import './tailwind.css';
import ResponsiveDesign from "./ResponsiveDesign"; 
import FrameworkList from "./FrameworkList ";
import FrameworkListSearchFilter from "./FrameworkListSearchFilter";

createRoot(document.getElementById("root"))
  .render(
    <div className="flex flex-col gap-10"> 
      <ResponsiveDesign />
      <hr className="border-2" />
      <FrameworkListSearchFilter />
    </div>
  );