import { useUserAuth } from "./_utils/auth-context";

const LandingPage = () => {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  if (!user) {
    return <button onClick={gitHubSignIn}>Login with GitHub</button>;
  }

  return (
    <div>
      <p>Welcome, {user.displayName} ({user.email})</p>
      <button onClick={firebaseSignOut}>Logout</button>
      {/* Add your link to the shopping list page here */}
    </div>
  );
};

export default LandingPage;