"use client";

import Link from "next/link";
import React from "react";
import { PiArrowLeftThin } from "react-icons/pi";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";

function page() {
  return (
    <motion.div
      className="text-neutral-50 "
      initial={{ y: 100, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.8,
          delay: 0.9,
          type: "spring",
          stiffness: 200,
        },
      }}
    >
      <div className="sticky top-5 ">
        <div className=" ">
          <div className="-mt-6   ">
            <div className="bg-neutral-700/25 backdrop-blur-md h-10  w-full rounded-xl flex items-center gap-x-7 ">
              <Link href={"/dashboard"}>
                <div className="bg-neutral-700/50 h-8 w-8 rounded-full flex items-center justify-center ml-3">
                  <div className="bg-neutral-300 rounded-full h-5 w-5 flex items-center justify-center">
                    <PiArrowLeftThin className="text-black text-lg" />
                  </div>
                </div>
              </Link>

              <Link href={"/"}>
                <button className="text-xs bg-neutral-700/25 p-1 w-16 h-6 rounded-md">
                  Home
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="  mt-9 w-full p-5 border border-neutral-700   rounded-2xl h-full bg-[#1C1C1C] ">
        <motion.h1
          initial={{ x: 100, opacity: 0, filter: "blur(4px)" }}
          animate={{
            x: 0,
            opacity: 1,
            filter: "blur(0px)",
            transition: {
              duration: 0.8,
              delay: 0.9,
              type: "spring",
              stiffness: 200,
            },
          }}
          transition={{ delay: 0.4 }}
          className="text-3xl font-RubikExtraBold text-center "
        >
          How to write type-safe CSS Modules
        </motion.h1>
        <div className="flex items-center gap-x-2 justify-center my-4 font-RubikRegular">
          <p className="bg-[#282828] w-fit text-neutral-300 rounded-md px-2 h-5 flex items-center justify-center text-[10px] ">
            TypeScript
          </p>
          <div className="w-1 h-1 rounded-full bg-neutral-400" />
          <span className="text-xs">Sunday, July 22, 2023</span>
        </div>

        <div className="my-11 font-RubikMedium">
          <Image
            width={1000}
            height={1000}
            className="rounded-lg h-56 w-full object-cover"
            src="/pic.jpg"
            alt=""
          />

          <p className="my-7">
            One of the benefits of using TypeScript is that it significantly
            reduces the occurrence of specific bugs, like typos; it even makes
            it easier to access prototype methods and perform refactoring. Bugs
            caught at compile time make for more uptime, happier customers, and
            less on-call stress for developers.
          </p>

          <p className="my-7">
            With TypeScript, it’s easy to type our application’s business logic
            and control flows, but what if we could make our CSS classes safe
            too? Having the correct CSS class names in place ensures that the
            intended styles are applied to a given component, preventing the
            styles from being misplaced due to typography errors.
          </p>

          <p className="my-7">
            In this article, we’ll discuss what CSS Modules are, explore their
            developer experience shortcomings, and learn how to address them by
            using automation with TypeScript. Let’s get started!
          </p>

          <div className="my-9">
            <Image
              height={1000}
              width={1000}
              className="rounded-lg h-56 w-full object-cover"
              src="/pic.jpg"
              alt=""
            />
          </div>

          <h2 className="text-2xl font-RubikExtraBold">
            What are CSS Modules?
          </h2>

          <p className="my-4">
            CSS Modules provide an approach to writing modular and scoped CSS
            styles in modern web apps. These styles are specific to your
            application’s particular component or module. You can write CSS
            Modules by using regular CSS.
          </p>

          <p className="my-4">
            At build time, with Vite or other similar tools, the CSS Modules
            generate unique class names for each class defined in the CSS files.
            The generated class names are then used in JavaScript to refer to
            the CSS, thereby making the CSS modular and reusable without class
            name conflicts or unnecessary duplications.
          </p>

          <h2 className="text-2xl font-RubikExtraBold my-5">
            Adding CSS Modules to your project
          </h2>

          <p>
            If you want to use CSS Modules in your next TypeScript app, you have
            several options. Modern build tools like Vite and Snowpack support
            CSS Modules out of the box, but you may need to include some minor
            configurations if you’re using webpack. Once the build setup is
            done, you can add CSS files with the module.css extension following
            the CSS Modules convention:
          </p>

          <h2 className="text-2xl font-RubikExtraBold my-5">
            Developer experience improvements
          </h2>

          <p>
            CSS Modules are a great tool, but since class names are generated at
            runtime and change between builds, it’s hard to use them in a
            type-safe way. You could manually create types for each CSS Module
            using TypeScript definition files, but updating them is tedious.
            Let’s suppose that a class name is added or removed from the CSS
            Module. In that case, the types must be manually updated, otherwise,
            the type safety won’t work as expected.
          </p>

          <h2 className="text-2xl font-RubikExtraBold my-5">
            Automatic typings
          </h2>

          <p>
            In this case, the automation solution is straightforward. We’ll
            generate the types automatically instead of manually, and we’ll
            provide a script to verify that the generated types are up-to-date
            to avoid incorrect CSS Module typings leaking into the compilation
            step.
          </p>

          <h2 className="text-2xl font-RubikExtraBold my-5">Conclusion:</h2>

          <p>
            Working within the TypeScript ecosystem has great potential, but,
            when leaning too much on manual processes, it’s easy to blow trust
            in the type-system or generate unnecessary friction. CSS Modules are
            great, and with a little bit of extra configuration, its easy to add
            type safety to the generated classes. You should automate the boring
            stuff so that your team can focus on building a great products
            instead. I hope you enjoyed this article, and be sure to leave a
            comment below if you have questions. Happy coding!
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default page;
