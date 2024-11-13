"use client";

import { emailSubmitAction } from "@/actions/emailSubmit";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

export default function ContactForm() {
  const { toast } = useToast();

  const handleEmailSubmit = async (formData: FormData) => {
    const email = formData.get("email") as string;
    try {
      await emailSubmitAction(email);
      toast({
        title: "Success!",
        description: "Thank you for your interest. We'll be in touch soon!",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="get-started" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">
          Ready to Bring Your Non-Profit On-Chain?
        </h2>
        <p className="text-xl mb-8">
          Join Citizen DAO today and revolutionize how your non-profit operates
          in both the digital and physical world.
        </p>
        <form
          action={handleEmailSubmit}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 border border-gray-300 rounded-md focus:ring-[#6370ff] focus:border-[#6370ff] flex-grow"
            required
          />
          <Button
            type="submit"
            className="px-6 py-2 bg-[#6370ff] text-white rounded-md hover:bg-[#4f5cff] transition duration-150 ease-in-out"
          >
            Get Started
          </Button>
        </form>
      </div>
    </section>
  );
}
