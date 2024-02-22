import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

const formatUserName = (userName) => `@${userName}`;
export function App() {
  return (
    <section className="App">
      <TwitterFollowCard formatUserName={formatUserName} isFollowing userName="gulasbot" name="Gulas"></TwitterFollowCard>
      <TwitterFollowCard formatUserName={formatUserName} isFollowing={false} userName="elonMusk" name="Elon"></TwitterFollowCard>
      <TwitterFollowCard formatUserName={formatUserName} isFollowing userName="midudev" name="Miguel Duran"></TwitterFollowCard>
    </section>
  );
}
