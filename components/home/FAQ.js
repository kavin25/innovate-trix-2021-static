const faqs = [
  {
    question: "What if the patient or user is not at home?",
    answer:
      "Though not shown in the actual software, there is a section in the actual app where an anonymous person can file a request to the nearest hospital from his/her app for the person in need (since the user is not at his/her house which is near the preferred hospital they had entered at the time of profile updation). The only limitation here is that the hospital won’t be able to judge whether it is a hoax call or a legitimate one but the solution to that is to make that a punishable offence and ban the anonymous person requesting the ambulance from using the app (since we would have his/her details)",
  },
  {
    question: "What if no hospital accepts the user request?",
    answer:
      "While there is a 99% success rate that on sending an emergency request to a nearby Hospital, one of them would accept it. But taking a scenario where none of the preferred hospitals accept the request, the request would then start to bounce to hospitals within 7 Km and go on till the hospital in the 15 Km range. Taking the worst case scenario, no one accepts it even after the 15 Km range, we are back to the level zero on which the whole system was built so the chance of that happening is 0.1%.",
  },
];

function FAQ() {
  return (
    <div className="faq container mt-5 mb-5">
      <h2 className="text-center">FAQ</h2>
      <div className="accordion" id="accordionExample">
        {faqs.map(({ question, answer }, index) => (
          <div key={index} className="accordion-item">
            <h2 className="accordion-header" id={`heading${index.toString()}`}>
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse${index.toString()}`}
                aria-expanded="false"
                aria-controls={`collapse${index.toString()}`}
              >
                {question}
              </button>
            </h2>
            <div
              id={`collapse${index.toString()}`}
              className="accordion-collapse collapse"
              aria-labelledby={`heading${index.toString()}`}
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">{answer}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;
