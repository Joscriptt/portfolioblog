import "./globals.css";
import Theming from "@/components/providers/Theme";
import Dashboard from "@/app/dashboard/layout";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#171717]">
        <Theming>
          {/* <Dashboard /> */}
          {children}
        </Theming>
      </body>
    </html>
  );
}
