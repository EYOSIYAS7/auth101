import { auth } from "@/auth";
import { json } from "stream/consumers";
import AuthButtonServer from "./AuthButton.server";
export default async function Home() {
  const session = await auth();
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">
          Welcome {JSON.stringify(session)}
        </h1>
        <p className="text-lg mb-4">
          This is a simple homepage built with Next.js and Tailwind CSS.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className=" p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-3">About Us</h2>
            <p>Learn more about our mission and values.</p>
          </div>
          <div className=" p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-3">Our Services</h2>
            <p>Discover what we can offer you.</p>
          </div>
        </div>
      </div>
      <AuthButtonServer />
    </main>
  );
}
