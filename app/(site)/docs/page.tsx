import SidebarLink from "@/components/Docs/SidebarLink";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Atoms core page",
  description: "This is core team page for atoms",
  // other metadata
};

export default function DocsPage() {
  return (
    <>
      <section className="pb-16 pt-24 md:pb-20 md:pt-28 lg:pb-24 lg:pt-32">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-1/4">
              <div className="sticky top-[74px] rounded-lg border border-white p-4 shadow-solid-4  transition-all  dark:border-strokedark dark:bg-blacksection">
                <ul className="space-y-2">
                  <SidebarLink />
                </ul>
              </div>
            </div>

            <div className="w-full px-4 lg:w-3/4">
              <div className="blog-details blog-details-docs shadow-three dark:bg-gray-dark rounded-sm bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
                <h1>Welcome to Atoms Core</h1>

                <p className="text-body-color dark:text-body-color-dark text-base">
                  This is the major page where the info you can get about core team members and other major internal issues....
                </p>
                <p className="text-body-color dark:text-body-color-dark text-base">
                  Please visit:{" "}
                  <b>
                    <a href="atomsgroup">
                      atoms groups link
                    </a>
                  </b>{" "}
                  to check out our real work and services
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
