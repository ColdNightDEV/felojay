"use client";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {
  const Text = [
    {
      id: "1",
      value:
        "mushroom farming could take care of your family's needs with a weekly income of 100,000",
    },
    {
      id: "2",
      value:
        "Cucumber farming could pay your house rent by making 200,000 per month",
    },
  ];

  return (
    <main>
      <Header />
      <Hero text={Text} />
    </main>
  );
}
