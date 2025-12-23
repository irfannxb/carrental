import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]/route";

const Profile = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    return null;
  }

  return (
    <div className="p-4 border-b border-gray-800 mb-4">
      <p className="text-sm text-gray-400">Logged in as</p>
      <p className="text-lg font-semibold">{session.username}</p>
    </div>
  );
};

export default Profile;
