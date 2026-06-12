import { useNavigate } from "react-router-dom";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Button } from "../components/ui/Buttons";
const brainAnimation = new URL("../assets/brain.lottie", import.meta.url).href;

const features = [
  {
    title: "Capture everything",
    description: "Save YouTube and Twitter content instantly for later reference.",
  },
  {
    title: "Organize your knowledge",
    description: "Filter and manage your saved content with ease.",
  },
  {
    title: "Share with others",
    description: "Publish your brain with a single shareable link.",
  },
];

export function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-indigo-950 text-white">
      <div className="mx-auto max-w-screen-xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-indigo-200 backdrop-blur-sm">
                Your Second Brain</p>
              <h1 className="text-5xl font-bold leading-tight sm:text-6xl">Your Second Brain for the Internet</h1>
              <p className="max-w-2xl text-lg text-slate-200">Save, organize and access your knowledge in one place.</p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button varient="primary" size="lg" text="Get Started" onClick={() => navigate("/signup")} />
              <Button varient="secondary" size="lg" text="Sign In" onClick={() => navigate("/signin")} />
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {features.map(feature => (
                <div key={feature.title} className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                  <p className="text-lg font-semibold text-white">{feature.title}</p>
                  <p className="mt-2 text-sm text-slate-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex min-h-[420px] items-center justify-center overflow-hidden rounded-[40px] bg-white/5 p-6 shadow-2xl ring-1 ring-white/10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(192,132,252,0.35),_transparent_35%),_radial-gradient(circle_at_bottom_left,_rgba(59,130,246,0.2),_transparent_30%)]" />
            <div className="relative h-full w-full rounded-[32px] bg-slate-950/80 p-4">
              <DotLottieReact src={brainAnimation} loop autoplay className="h-full w-full" />
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 bg-slate-950/90 py-10">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <h2 className="text-xl font-semibold text-white">Organize smarter</h2>
              <p className="mt-3 text-sm text-slate-300">A modern workspace for curating your most important content from across the web.</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-white">Share quickly</h2>
              <p className="mt-3 text-sm text-slate-300">Create a shareable brain link so others can view what you saved.</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-white">Access anywhere</h2>
              <p className="mt-3 text-sm text-slate-300">Responsive design built for desktop and mobile browsing.</p>
            </div>
          </div>
        </div>
      </div>

      <footer className="border-t border-white/10 bg-slate-950/95 py-8">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Second Brain. Built for your modern knowledge flow.
        </div>
      </footer>
    </div>
  );
}
