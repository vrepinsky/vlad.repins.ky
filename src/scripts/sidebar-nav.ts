const isTypingTarget = (target: EventTarget | null): boolean => {
  if (!(target instanceof HTMLElement)) return false;

  const tagName = target.tagName.toLowerCase();

  return (
    target.isContentEditable ||
    tagName === "input" ||
    tagName === "textarea" ||
    tagName === "select"
  );
};

const initSidebarKeybindings = () => {
  const sidebarLinks = Array.from(
    document.querySelectorAll<HTMLAnchorElement>("[data-sidebar-link]"),
  );

  const linkMap = new Map<string, HTMLAnchorElement>();

  sidebarLinks.forEach((link) => {
    const keybinding = link.dataset.keybinding?.toLowerCase();

    if (keybinding) {
      linkMap.set(keybinding, link);
    }
  });

  if (document.body.dataset.sidebarKeybindingsBound === "true") return;

  document.body.dataset.sidebarKeybindingsBound = "true";

  document.addEventListener("keydown", (event) => {
    if (
      event.defaultPrevented ||
      event.metaKey ||
      event.ctrlKey ||
      event.altKey ||
      event.shiftKey ||
      isTypingTarget(event.target)
    ) {
      return;
    }

    const link = linkMap.get(event.key.toLowerCase());

    if (!link) return;

    event.preventDefault();
    window.location.assign(link.href);
  });
};

initSidebarKeybindings();
