import HyperText from "@/components/ui/hyper-text";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <main className="flex flex-col min-h-[calc(100vh-64px-64px)] w-full max-w-screen-md mx-auto p-2 items-center justify-center">
      <h1 className="hidden">Who Owns You?</h1>
      <HyperText className="text-6xl font-black select-none" text="Who Owns You?" duration={3000} retriggerOnMouseEnter={false} />
      <Input placeholder="Coming soon..." />
    </main>
  );
}
