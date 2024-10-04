import { Button } from "@/components/ui/button";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Hero } from "./components/Hero";
import { Logos } from "./components/Logo";
import { Features } from "./components/Features";
import { PricingTable } from "./components/Pricing";
import { redirect } from "next/navigation";

export default async function Home() {
  const { getUser } = getKindeServerSession();
  const session = await getUser();

  if (session?.id) {
    return redirect("/dashboard");
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
      <Hero />
      <Logos />
      <Features />
      <PricingTable />
      
    </div>
  );
}
