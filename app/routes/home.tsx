import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { GrubzLandingPage } from "../landing_page/landing_page5"

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Grubz" },
    { name: "description", content: "Welcome to Grubz!" },
  ];
}

export default function Home() {
  return <GrubzLandingPage />;
}
