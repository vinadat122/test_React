import { useEffect, useState } from "react";

function ObjectList() {
  const [objects, setObjects] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}objects.json`)
      .then(res => res.json())
      .then(data => setObjects(data));
  }, []);

  return (
    <div className="container text-center my-5">
      <h4 className="fw-bold mb-4">SHOULD WHO LEARN PROGRAMING IN FPT APTECH?</h4>
      <div className="row">
        {objects.map((obj, i) => (
          <div key={i} className="col-md-4 mb-4">
            <div className="card shadow-sm border-0 h-100">
              <img src={obj.image} className="card-img-top" alt={obj.title} />
              <div className="card-body">
                <h5 className="text-primary fw-bold">{obj.title}</h5>
                <p>{obj.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default ObjectList;