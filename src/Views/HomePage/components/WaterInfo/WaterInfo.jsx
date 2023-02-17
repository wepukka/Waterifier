import("./WaterInfo.css");

export default function WaterInfo() {
  const symptoms = [
    "feeling thirsty",
    "dark yellow",
    "strong-smelling pee",
    "peeing less often than usual",
    "feeling dizzy or lightheaded",
    "feeling tired",
    "a dry mouth",
    "lips and tongue",
    "sunken eyes",
  ];

  const causes = [
    "have diabetes",
    "have been sick or have diarrhea",
    "have been in the sun too long (heatstroke)",
    "have drunk too much alcohol",
    "sweat a lot after exercising",
    "have a high temperature",
    "take medicines that make you pee more (diuretics)",
  ];

  return (
    <div className="water-info">
      <h1>
        Drinking atleast the recommended amount of water daily is recommended to
        avoid dehydration
      </h1>

      <div className="water-info-symptoms">
        <p>Symptoms of dehydration in adults and children include:</p>
        <ul>
          {symptoms.map((symptom, index) => {
            return <li key={index}>{symptom}</li>;
          })}
        </ul>
      </div>
      <div className="water-info-causes">
        <p>Dehydration can happen more easily if you:</p>
        <ul>
          {causes.map((cause, index) => {
            return <li key={index}>{cause}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}
