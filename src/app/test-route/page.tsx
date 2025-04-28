import { auth } from "@/auth";

export default async function TestRoutePage() {
  const session = await auth();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Test Route</h1>
      {session?.user ? (
        <p className="text-lg text-green-600">Welcome, {session.user.name}!</p>
      ) : (
        <p className="text-lg text-red-600">You are not logged in.</p>
      )}
    </div>
  );
}
