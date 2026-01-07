import { useLocation } from "wouter";
import { styled } from "goober";
import { useState } from "react";
import { SidebarNavLink } from "./SidebarNavLink";
import { SidebarNavExpandable } from "./SidebarNavExpandable";

interface NavItem {
  label: string;
  path: string;
  children?: { label: string; hash: string }[];
}

const navItems: NavItem[] = [
  { label: "Home", path: "/" },
  {
    label: "CV",
    path: "/cv",
    children: [
      { label: "Work", hash: "work-experience" },
      { label: "Education", hash: "education" },
    ],
  },
  { label: "Now", path: "/now" },
  { label: "Lab", path: "/lab" },
  { label: "About", path: "/about" },
];

export const SidebarNavigation = () => {
  const [location, setLocation] = useLocation();
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const isActive = (path: string) => location === path;

  const handleParentClick = (path: string) => {
    setExpandedItem(expandedItem === path ? null : path);
    setLocation(path);
  };

  const handleChildClick = (parentPath: string, hash: string) => {
    setLocation(parentPath);
    setTimeout(() => {
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };

  const handleTopLevelClick = () => {
    setExpandedItem(null);
  };

  const navItemsElements = navItems.map((item) => (
    <NavItemContainer key={item.path}>
      {item.children && (
        <SidebarNavExpandable
          label={item.label}
          isActive={isActive(item.path)}
          isExpanded={expandedItem === item.path}
          children={item.children}
          onParentClick={() => handleParentClick(item.path)}
          onChildClick={(hash) => handleChildClick(item.path, hash)}
        />
      )}
      {!item.children && (
        <SidebarNavLink
          label={item.label}
          path={item.path}
          isActive={isActive(item.path)}
          onClick={handleTopLevelClick}
        />
      )}
    </NavItemContainer>
  ));

  return (
    <NavSection>
      <SidebarLinks>{navItemsElements}</SidebarLinks>
    </NavSection>
  );
};

const NavSection = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const SidebarLinks = styled("div")`
  display: flex;
  flex-direction: column;
`;

const NavItemContainer = styled("div")`
  display: flex;
  flex-direction: column;
`;
