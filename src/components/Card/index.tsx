import "./styles.css";

export type TCardsProps = {
  name: string;
  time: string;
};

export function Card(props: TCardsProps) {
  return (
    <div className="card">
      <strong>{props.name}</strong>
      <small>{props.time}</small>
    </div>
  );
}
