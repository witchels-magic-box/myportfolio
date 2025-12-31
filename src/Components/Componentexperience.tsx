import "../index.css";

interface ExperienceProps {
  jobtitle: string;
  date: string;
  experiencedetails: string[];
}

function Componentexperience({
  jobtitle,
  date,
  experiencedetails,
}: ExperienceProps) {
  return (
    <div className="mb-[5rem] expitem">
      <h2 className="jobtitle">{jobtitle}</h2>
      <p className="datestyle">{date}</p>

      <ul>
        {experiencedetails.map((item, index) => (
          <li className="w-50 mb-2" key={index}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Componentexperience;
