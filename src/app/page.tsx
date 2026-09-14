export const dynamic = "force-dynamic";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Farm from "@/components/Farm";
import Products from "@/components/Products";
import OrderForm from "@/components/OrderForm";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Benefits />
        <Farm />
        <Products />
        <OrderForm />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
