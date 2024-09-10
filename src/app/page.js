import Image from "next/image";
import { GlobalProvider } from "./GlobalContext";

export default function Home() {
  return (
    <GlobalProvider>
      <div>
        <Login />
        <CreateAccount />
        <Lobby />
        <RaceDisplay />
      </div>
    </GlobalProvider>
  );
}
