import History from "../main/History";
import KeyFeatures from "./KeyFeatures";
import Heroes from './Heroes';
type Props = {
  width: number;
}

export default function Main({width}: Props) {
  return (
    <main className="main-container">
      <History />
      <KeyFeatures width={width}/>
      <Heroes />
    </main>
  );
}
