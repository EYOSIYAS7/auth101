"use client";
import { signInAction, signOutAction } from "@/auth/action";
import { useSession } from "next-auth/react";

export default function AuthButtonClient() {
  const session = useSession();
  console.log("Session in AuthButtonClient:", session);

  //   return (
  //     <div className="flex items-center justify-center h-screen">
  //       {session ? (
  //         <button
  //           onClick={async () => {
  //             await signOutAction();
  //           }}
  //           className="bg-blue-500 text-white px-4 py-2 rounded"
  //         >
  //           Sign Out
  //         </button>
  //       ) : (
  //         <button
  //           onClick={async () => await signInAction()}
  //           className="bg-blue-500 text-white px-4 py-2 rounded"
  //         >
  //           Sign In
  //         </button>
  //       )}
  //     </div>
  //   );
  return (
    <div className="flex items-center justify-center">
      {session?.data?.user ? (
        <button
          onClick={async () => {
            await signOutAction();
          }}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Sign Out
        </button>
      ) : (
        <button
          onClick={async () => await signInAction()}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Sign In
        </button>
      )}
    </div>
  );
}
