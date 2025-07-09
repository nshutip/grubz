import type { Route } from "./+types/home";
import { GrubzLandingPage } from "../pages/landing_page/landing_page"

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Grubz" },
    { name: "description", content: "Welcome to Grubz!" },
  ];
}

export default function Home() {
  return <GrubzLandingPage />;
}
