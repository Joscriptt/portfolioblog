import View from "@/app/ui/dashboard/View/page";
import Left from "@/app/dashboard/Left/page";
import Theming from "@/components/providers/Theme";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
        <Theming>
          <div className="max-w-[78rem] mx-auto ">
            <div className=" gap-4 flex md:mt-5    flex-col md:flex-row  ">
              <Left />

              {children}
              <View />
            </div>
          </div>
        </Theming>
      </body>
    </html>
  );
}
