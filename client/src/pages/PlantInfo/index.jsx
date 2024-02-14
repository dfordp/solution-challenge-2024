import flowerPic from "../../assets/ExamplePic.jpg"
import CheckupComponent from "../Checkups/components/CheckupComponent"

// Define the reusable component
const PlantInfoItem = ({ id, label, value }) => (
  <div className="flex flex-col mt-1">
    <label htmlFor={id} className="font-medium">{label}:</label>
    <span id={id} className="font-bold px-4 py-2">{value}</span>
  </div>
);

const PlantInfo = () => {
    const plantData = [
        { id: 'plantName', label: 'Name of Plant', value: 'Rose' },
        { id: 'plantType', label: 'Type of Plant', value: 'Flowering plant' },
        { id: 'plantingDate', label: 'Date of Planting', value: '2022-01-01' },
        { id: 'userComments', label: 'User Comments', value: 'This plant requires regular watering.' },
    ];

    return (
        <div>
            <div className="mx-4 my-6 text-3xl font-bold">
                Plant Info
            </div>
            <div className="flex flex-row px-6 py-2">
                <div>
                    <img className="w-[550px] rounded-md" src={flowerPic} alt="Flower Pic" />
                </div>
                <div className="flex flex-col mx-8">
                    {plantData.map((data) => <PlantInfoItem key={data.id} {...data} />)}
                </div>
            </div>
            <div className="mx-4 my-6 text-2xl font-bold">
                Health Logs
            </div>
            <div className="mx-4">
                <CheckupComponent/>
            </div>
            <div className="mx-4 my-6 text-2xl font-bold">
                Tasks
            </div>
            <div className="mx-4">
                <CheckupComponent/>
            </div>
        </div>
    )
}

export default PlantInfo