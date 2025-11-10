import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../../../../components/ui/breadcrumb";

const breadcrumbItems = [
  { label: "Home", href: "#", isCurrentPage: false },
  { label: "Hospital Information System", href: "#", isCurrentPage: true },
];

export const NavigationSection = () => {
  return (
    <nav className="w-full bg-gray-50 border-b border-border py-4 px-[66.5px]">
      <Breadcrumb>
        <BreadcrumbList>
          {breadcrumbItems.map((item, index) => (
            <React.Fragment key={index}>
              <BreadcrumbItem>
                {item.isCurrentPage ? (
                  <BreadcrumbPage className="[font-family:'Inter',Helvetica] font-normal text-[#1d2838] text-sm">
                    {item.label}
                  </BreadcrumbPage>
                ) : (
                  <BreadcrumbLink
                    href={item.href}
                    className="[font-family:'Inter',Helvetica] font-medium text-blue-600 text-base"
                  >
                    {item.label}
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
              {index < breadcrumbItems.length - 1 && (
                <BreadcrumbSeparator className="[font-family:'Inter',Helvetica] font-normal text-[#99a1ae] text-sm">
                  /
                </BreadcrumbSeparator>
              )}
            </React.Fragment>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    </nav>
  );
};
