const teamMembers = [
  {
    name: "Kavin Desi Valli",
    image: "kavin.jpeg",
    about:
      "I am a person who is positive about every aspect of life. In life, I believe in the importance of values like passion, dedication, confidence and time management. In technical aspects, I am a Javascript developer who loves to try out different frameworks in JS and build unique projects in my free time. Being inclined towards technology since grade 7, I am looking forward to be a software engineer at Google",
  },
  {
    name: "Mehul Srivastava",
    image: "mehul.png",
    about:
      "I am Mehul Srivastava, a student of Class 11th in DPS RKPuram. I believe in the saying that a man without a sound career planning is like a ship without the radar. It drifts and ultimately sinks down in the deep ocean. In terms of my academic career I will be pursuing economic honours after my 12th or Senior School Graduation",
  },
  {
    name: "Saksham Raheja",
    image: "saksham.jpg",
    about:
      "To describe myself, I would like to say that I am always passionate about the work I do, am ambitious and driven to complete the work assigned to me. I also believe that I have the leadership qualities required to run a group or a team. I have a lot of hobbies that I like to do during my leisure time but the one which gives me immense pleasure is programming which is also going to be my career.",
  },
];

function Team() {
  return (
    <div className="container">
      <h1>About</h1>
      <p className="text-muted">
        We're a team of high school entrepreneurs, set out to make a difference
        to the important issues of ambulances
      </p>
      {teamMembers.map(({ name, image, about }, idx) => (
        <TeamCard name={name} image={image} about={about} key={idx} />
      ))}
    </div>
  );
}

const TeamCard = ({ name, image, about }) => {
  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-3">
          <img
            src={`/${image}`}
            className="rounded-circle p-5"
            alt={`${name}'s Image'`}
            height="300px"
            width="300px"
          />
        </div>
        <div className="col-md-9">
          <div className="card-body d-flex flex-column justify-content-center h-100">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{about}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
