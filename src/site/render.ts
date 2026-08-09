import { document } from "@/layout/document";
import type { Route } from "@/site/routes";

export const renderPage = (route: Route): string => document(route, route.render());
