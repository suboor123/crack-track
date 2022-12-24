export interface Menu {
  title: string;
  routeTo?: string;
  hasSubmenu: boolean;
  submenu?: Menu[];
  hasImage?: string;
}

export const MenuItems: Menu[] = [
  {
    title: "home",
    routeTo: "/",
    hasSubmenu: false,
  },
  {
    title: "interview preparation",
    hasSubmenu: true,
    submenu: [
      {
        title: "Angular",
        routeTo: "/interview-questions",
        hasSubmenu: false,
      },
      {
        title: "React",
        routeTo: "/interview-questions",
        hasSubmenu: false,
      },
      {
        title: "Node",
        routeTo: "/interview-questions",
        hasSubmenu: false,
      },
      {
        title: "Angular",
        routeTo: "/interview-questions",
        hasSubmenu: false,
      },
      {
        title: "React",
        routeTo: "/interview-questions",
        hasSubmenu: false,
      },
      {
        title: "Node",
        routeTo: "/interview-questions",
        hasSubmenu: false,
      },
    ],
  },
  {
    title: "find people",
    routeTo: "/find-people",
    hasSubmenu: false,
  },
];

export const handleMenuToggle = () => {
  const hamburgerBtn = document.getElementById("isToggle");
  const navigation = document.getElementById("navigation");
  if (hamburgerBtn?.classList.contains("open")) {
    closeMenu();
    return;
  }
  hamburgerBtn?.classList.add("open");
  navigation!.style!.display! = "block";
};

export const closeMenu = () => {
  const hamburgerBtn = document.getElementById("isToggle");
  const navigation = document.getElementById("navigation");
  if(hamburgerBtn && navigation) {
    hamburgerBtn?.classList.remove("open");
    navigation!.style!.display! = "none";
  }
};
