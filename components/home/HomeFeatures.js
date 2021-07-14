const features = [
  {
    title: "Easy to use",
    description: "Simple and Easy to use with just 2 steps",
    image: "tap.png",
    showDivider: true,
  },
  {
    title: "Completely Free",
    description: "Free to use. Only pay when calling for an ambulance",
    image: "free.png",
    showDivider: true,
  },
  {
    title: "Effective",
    description: "Direct contact with hospitals, fast and effective",
    image: "clock.png",
    showDivider: false,
  },
];

export default function HomeFeatures() {
  return (
    <div className="d-md-flex mt-5 justify-content-evenly">
      {features.map(({ title, description, image, showDivider }, index) => (
        <Feature
          title={title}
          description={description}
          showDivider={showDivider}
          image={image}
          key={index}
        />
      ))}
    </div>
  );
}

const Feature = ({ title, description, image, showDivider }) => {
  return (
    <div className={`text-center p-5 ${showDivider && "border-end"}`}>
      <img
        src={`/${image}`}
        alt=""
        width="50%"
        height="auto"
        className="mb-4"
      />
      <h3>{title}</h3>
      <h6 className="text-muted">{description}</h6>
    </div>
  );
};
