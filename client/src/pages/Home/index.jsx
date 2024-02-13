// Define the reusable component
const Section = ({ title, value }) => (
  <div className="bg-gray-200 w-[325px] h-[150px] px-4 pt-3 pb-2 font-light rounded-md outline">
    {title}:
    <div className="flex flex-row justify-center items-center font-semibold text-3xl my-4">
      {value}
    </div>
  </div>
);

const Home = () => {
  // Define the array of objects
  const sections = [
    { title: 'Number of Plants', value: 69 },
    { title: 'Planter Level', value: 'High' },
    { title: 'Trooper Since', value: '11 Jan \'04' },
    { title: 'Tasks Completed Today', value: 5 },
    { title: 'Checkups Done Today', value: 3 },
    { title: 'Weather Forecast', value: 'Cloudy' },
  ];

  return (
    <div className="my-4">
      <div className="mx-4 my-6 text-3xl font-bold">
        Home
      </div>
      <div className="grid grid-cols-3 gap-4 justify-items-center items-center">
        {sections.map((section, index) => (
          <Section key={index} title={section.title} value={section.value} />
        ))}
      </div>
    </div>
  );
}

export default Home;