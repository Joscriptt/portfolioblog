"use client";

import { ThemeProvider } from "next-themes";

function Theming({ children }) {
  return (
    <ThemeProvider enableSystem attribute="class">
      {children}
    </ThemeProvider>
  );
}
export default Theming;

// create new nextjs project or go to my gitHub and use mine
// install all packages
//  don't install these

// "@editorjs/editorjs": "^2.28.1", X
// "@flaticon/flaticon-uicons": "^ X

// Like and subscribe
