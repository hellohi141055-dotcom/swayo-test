import { useParams, Link } from "react-router-dom";

const categories = ["Person", "Car", "Dog", "Cat"];

export default function Detail() {
  const { id } = useParams();
  const name = categories[id];

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold">{name}</h2>
      <p className="mt-2 mb-6">
        This page shows description about <b>{name}</b>.
      </p>

      <Link to="/detect" className="bg-green-600 text-white px-4 py-2 rounded">
        Start Detection
      </Link>
    </div>
  );
}
