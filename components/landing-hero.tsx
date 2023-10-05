import Link from "next/link";
import TypewriterComponent from "typewriter-effect";
import { getAuthSession } from "@/lib/auth";
import { redirect } from "next/navigation";

export const LandingHero = async () => {

  const session = await getAuthSession();
  if (!session?.user) {
    return redirect("/gallery");
  }

  return (
    <div className="font-bold py-36 text-center space-y-5">
      <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold ">
        <h1>The Best AI Tool for</h1>
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
          <TypewriterComponent
            options={{
              strings: [
                "Creating Courses",
                "Generating Content",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>

      <div className="text-sm md:text-xl font-light text-zinc-400">
        AI Learning is a tool that helps you create courses and generate content
        using AI.
      </div>

      <div>
        {/* <Link href={isSignedIn ? "/gallery" : "/sign-up"}>
          <Button
            variant="default"
            className="md:text-lg p-4 md:p-6 rounded-full font-semibold"
          >
            Start Generating For Free
          </Button>
        </Link> */}
      </div>
      <div className="text-zinc-400 text-xs md:text-sm font-normal">
        No credit card required.
      </div>
    </div>
  );
};
