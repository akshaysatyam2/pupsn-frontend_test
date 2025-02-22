import { signIn } from "next-auth/react";

export default function Login() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h2 className="text-2xl font-bold mb-4">Login to PupsN</h2>
      <button onClick={() => signIn("google")} className="px-4 py-2 bg-blue-500 text-white rounded">
        Sign in with Google
      </button>
    </div>
  );
}
