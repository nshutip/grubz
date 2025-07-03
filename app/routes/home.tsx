import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { GrubzLandingPage } from "../landing_page/landing_page3"

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <GrubzLandingPage />;
}
