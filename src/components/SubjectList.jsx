import { useEffect, useState } from "react";

function SubjectList() {
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}subjects.json`)
      .then(res => res.json())
      .then(data => setSubjects(data));
  }, []);

  return (
    <div className="container text-center my-5">
      <h4 className="fw-bold mb-4">WHAT IS THE COURSE PROGRAM?</h4>
      <div className="d-flex justify-content-center flex-wrap gap-5 mb-4">
        {subjects.map((subj, i) => (
          <div key={i}>
            <img src={subj.image} alt={subj.name} width="80" height="80" />
            <p className="mt-2 fw-medium">{subj.name}</p>
          </div>
        ))}
      </div>
      <p className="text-secondary px-5">
        With a program design that includes 04 semesters with many important technologies such as ReactJS,
        PHP, Python, .NET Core, Spring boot brings learners to the world of programming quickly, most effectively.
      </p>
    </div>
  );
}
export default SubjectList;