import {
  ChevronRight,
  CheckCircle,
  Briefcase,
  Rocket,
  Vote,
  FileDigit,
  BookOpen,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-center">
          <Image
            src="/logo.svg"
            alt="Citizen DAO Logo"
            height={128}
            width={128}
            className="mr-2"
          />
          <div className="flex flex-col">
            <h1 className="text-4xl font-semibold">Citizen DAO</h1>
            <p className="text-2xl">
              Internet native, self-sovereign digital organizations
            </p>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center max-w-2xl mx-auto text-center gap-4">
          <h1 className="text-4xl font-bold mb-6 text-[#6370ff]">
            Manage funds and take decisions together
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Run your own digital organization instantly. Attach it to your
            existing entity or start a new one. No fiscal hosts, no
            intermediaries.
          </p>
          <Link
            href={process.env.DISCORD_INVITE_LINK ?? "#"}
            className="inline-flex items-center mb-4 px-6 py-3 border border-transparent text-xl font-bold rounded-md text-white bg-[#6370ff] hover:bg-[#4f5cff] transition duration-150 ease-in-out"
          >
            Start a new organization
            <ChevronRight className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
          </Link>
          <Link
            href="/pitch.pdf"
            target="_blank"
            className="text-2xl inline-flex items-center px-6 py-3 text-xl font-bold text-[#6370ff] hover:text-[#4f5cff] hover:underline transition duration-150 ease-in-out"
          >
            Read the pitch <BookOpen className="ml-2 -mr-1 h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            How does it work?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: <Rocket className="h-12 w-12 text-[#6370ff]" />,
                title: "Start Simple",
                description: "Bring people together, start doing, no friction.",
              },
              {
                icon: <Vote className="h-12 w-12 text-[#6370ff]" />,
                title: "1 vote = 1 signature",
                description:
                  "Enable direct and transparent operations of your entity.",
              },
              {
                icon: <FileDigit className="h-12 w-12 text-[#6370ff]" />,
                title: "1 proposal = 1 transaction",
                description:
                  "Combine decisions and actions. Discuss, vote, execute.",
              },
              {
                icon: <Briefcase className="h-12 w-12 text-[#6370ff]" />,
                title: "Attach an off-chain entity",
                description:
                  "Apply for grants directly, KYC, obtain a credit card, open a traditional bank account, sign agreements, etc...",
              },
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-gray-900 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            How Citizen DAO Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex flex-col items-center text-center">
              <div className="flex flex-row justify-center items-center mb-4">
                <Image
                  src="/logo-main.svg"
                  alt="Citizen DAO Logo"
                  height={40}
                  width={20}
                  className="mr-4 rounded-md"
                />
                <h3 className="text-2xl font-semibold">Members Multi-Sig</h3>
              </div>
              <ul className="space-y-2 inline-block text-left">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-[#6370ff] mr-2 flex-shrink-0" />
                  <span>All members are part of it</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-[#6370ff] mr-2 flex-shrink-0" />
                  <span>On-chain representation of the entity</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-[#6370ff] mr-2 flex-shrink-0" />
                  <span>Holds assets and approves proposals</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-[#6370ff] mr-2 flex-shrink-0" />
                  <span>Full control over Main and Delegates</span>
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="flex flex-row justify-center items-center mb-4">
                <Image
                  src="/logo-delegate.svg"
                  alt="Citizen DAO Logo"
                  height={40}
                  width={20}
                  className="mr-4 rounded-md"
                />
                <h3 className="text-2xl font-semibold">Delegates Multi-Sig</h3>
              </div>
              <ul className="space-y-2 inline-block text-left">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-[#6370ff] mr-2 flex-shrink-0" />
                  <span>Members voted in as delegates</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-[#6370ff] mr-2 flex-shrink-0" />
                  <span>On-chain representation of the board</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-[#6370ff] mr-2 flex-shrink-0" />
                  <span>Can operate Main for external operations</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-[#6370ff] mr-2 flex-shrink-0" />
                  <span>Restricted from modifying entity structure</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#b6d7ff]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Benefits of Citizen DAO
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "Easy setup for non-profit legal entities on-chain",
              "Transparent decision-making process",
              "Seamless integration of off-chain and on-chain operations",
              "Flexible membership structure with delegated powers",
              "Clear documentation of transactions through proposals",
              "User-friendly interface for multi-sig management",
            ].map((benefit, index) => (
              <div key={index} className="flex items-start">
                <CheckCircle className="h-6 w-6 text-[#6370ff] mr-2 flex-shrink-0" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
