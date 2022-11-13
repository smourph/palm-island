import Layout from '../components/Layout';
import { Client } from "boardgame.io/react";
import { PalmIsland } from "../module/game/PalmIsland";
import { Board } from "../components/Board";

const PalmIslandClient = Client({
  game: PalmIsland,
  numPlayers: 1,
  board: Board
});

const Index = () => (
  <Layout title="Palm Island">
    <PalmIslandClient/>
  </Layout>
);

export default Index;
