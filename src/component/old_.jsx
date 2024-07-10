// import React, { useState } from 'react';
// import lamp from './lamp.jpg';
// import lcd from './lcd.png';
// import box from './box.png';
// import refrigerateur from './refrigerateur.jpg';
// import lowConsumptionImage from './kit-solaire-90w.jpg'; // Image for result < 90
// import mediumConsumptionImage from './kit-solaire-115w.jpg'; // Image for result between 90 and 150
// import highConsumptionImage from './kit-solaire-175w.jpg'; //mage for result between 150 and 200
// import { Bar } from 'react-chartjs-2';
// import { TiDelete } from "react-icons/ti";
// import diswatt from './diswatt.png'
// import plan_kit_solaire from './plan_kit_solaire.png'
// import { FaArrowCircleDown } from "react-icons/fa";

// import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// const Echelle = () => {
//   const [rows, setRows] = useState([]);
//   const [selectedOption, setSelectedOption] = useState("");

//   const randomChoices = [
//     {
//       puissance: '40',
//       hour: '1',
//       image: lamp,
//       puissanceOptions: [
//         { label: 'lamp 10w', value: '10' },
//         { label: 'lamp 20w', value: '20' },
//         { label: 'lamp 30w', value: '30' },
//         { label: 'lamp 40w', value: '40' }
//       ],
//       hourOptions: Array.from({ length: 24 }, (_, i) => `${i + 1}h`) // Generates "1h" to "24h"
//     },
//     {
//       puissance: '20',
//       hour: '1',
//       image: lcd,
//       puissanceOptions: [
//         { label: 'lcd 10w', value: '10' },
//         { label: 'lcd 20w', value: '20' },
//         { label: 'lcd 30w', value: '30' }
//       ],
//       hourOptions: Array.from({ length: 24 }, (_, i) => `${i + 1}h`) // Generates "1h" to "24h"
//     },
//     {
//       puissance: '30',
//       hour: '1',
//       image: refrigerateur,
//       puissanceOptions: [
//         { label: 'refrigerateur 20w', value: '20' },
//         { label: 'refrigerateur 30w', value: '30' },
//         { label: 'refrigerateur 40w', value: '40' }
//       ],
//       hourOptions: Array.from({ length: 24 }, (_, i) => `${i + 1}h`) // Generates "1h" to "24h"
//     },
//     // Add more random choices as needed
//   ];

//   const handlePuissanceChange = (value, index) => {
//     const newRows = [...rows];
//     newRows[index].puissance = value;
//     setRows(newRows);
//   };

//   const handleHourChange = (value, index) => {
//     const newRows = [...rows];
//     newRows[index].hour = value;
//     setRows(newRows);
//   };

//   const handleQuantiteChange = (value, index) => {
//     // Ensure quantite is positive and numeric
//     const newValue = value.replace(/\D/g, ''); // Remove non-digit characters
//     const newRows = [...rows];
//     newRows[index].quantite = newValue;
//     setRows(newRows);
//   };

//   const handleAddRow = () => {
//     setRows(rows => [...rows, { quantite: '1', puissance: '', hour: '1h', image: box, isCustom: true, puissanceOptions: [
//       { label: '10w', value: '10' },
//       { label: '20w', value: '20' },
//       { label: '30w', value: '30' },
//       { label: '40w', value: '40' }
//     ], hourOptions: Array.from({ length: 24 }, (_, i) => `${i + 1}h`) }]);
//   };

//   const handleRandomChoice = (choice) => {
//     setRows(rows => [...rows, { quantite: '1', puissance: choice.puissance, hour: choice.hour, image: choice.image, isCustom: false, puissanceOptions: choice.puissanceOptions, hourOptions: choice.hourOptions }]);
//   };

//   const handleDeleteRow = (index) => {
//     const newRows = rows.filter((row, i) => i !== index);
//     setRows(newRows);
//   };

//   const calculateRowResult = (quantite, puissance, hour) => {
//     return quantite && puissance && hour ? parseInt(quantite) * parseInt(puissance) * parseInt(hour) : 0;
//   };

//   const calculateTotal = () => {
//     return rows.reduce((acc, row) => {
//       const result = calculateRowResult(row.quantite, row.puissance, row.hour);
//       return acc + result;
//     }, 0);
//   };
  
//   const total = calculateTotal();
//   const data = {
//     labels: [`${total} (en Wh/j)`],
//     datasets: [
//       {
//         label: `VOTRE CONSOMMATION ${total} (en Wh/j)`,
//         data: [total],
//         backgroundColor: ['rgba(75, 192, 192, 0.6)'],
//         borderColor: ['rgba(75, 192, 192, 1)'],
//         borderWidth: 2,
//       },
//     ],
//   };

//   const options = {
//     indexAxis: 'y', // Horizontal bar chart
//     scales: {
//       x: {
//         beginAtZero: true,
//         max: 5000,
//       },
//     },
//     maintainAspectRatio: false,
//     responsive: true,
//   };

//   const getImageForResult = () => {
//     if (total <= 90) {
//       return lowConsumptionImage;
//     } else if (total > 90 && total <= 115) {
//       return mediumConsumptionImage;
//     } else if (total >  115 && total <= 175) {
//       return highConsumptionImage;
//     } else {
//       return null;
//     }
//   };
//   const options_dropDown = [
//     "Kit anti-coupure (hybride)",
//     "Kit autoconsommation (On-grid)",
//     "Kit autonome (Off-grid)",
//     "Kit caméra de surveillance",
//     "Kit pompage solaire",
//     "Kit solaire Véhicule & Camping-Car"
// ];

// const handleSelect = (option) => {
//     setSelectedOption(option);
// };

// return (
//   <div className="container mx-auto p-4 border rounded-lg max-w-5xl mt-10">
//     <div className="border rounded-lg my-5 p-4 flex justify-between items-center">
//       <a href="https://www.diswatt.ma/" target="_blank" rel="noopener noreferrer">
//         <img src={diswatt} alt="" />
//       </a>
//       <div className="relative group">
//         <div className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-400 px-4 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
//           {selectedOption || 'Choose a kit...'}
//         </div>
//         <div className="absolute hidden group-hover:block bg-white border border-gray-300 w-full mt-1 rounded shadow-lg z-10">
//           {options_dropDown.map((option, index) => (
//             <div
//               key={index}
//               onClick={() => handleSelect(option)}
//               className="px-4 py-2 cursor-pointer hover:bg-gray-200"
//             >
//               {option}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//     <div className="flex items-center">
//       <p className="px-2 py-5 text-xl">
//         Calculez votre consommation en sélectionnat des appareils 
//       </p>
//       <div className="text-blue-700 text-xl">
//         <FaArrowCircleDown />
//       </div>
//     </div>
//     <div className="flex space-x-4 mb-4">
//       {randomChoices.map((choice, index) => (
//         <img
//           key={index}
//           src={choice.image}
//           alt={`Choice ${index + 1}`}
//           onClick={() => handleRandomChoice(choice)}
//           className="cursor-pointer w-16 h-16"
//         />
//       ))}
//       <div className="mt-4">
//         <button onClick={handleAddRow} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//           Personnalisé
//         </button>
//       </div>
//     </div>
//     {rows.length > 0 && rows.map((row, index) => (
//       <div key={index} className={`flex items-center justify-between space-x-4 ${index % 2 === 0 ? 'bg-gray-100' : 'bg-slate-50'}`}>
//         <div className="flex justify-center items-center">
//           {row.image && (
//             <img
//               src={row.image}
//               alt={`Row ${index + 1}`}
//               className="w-16 h-16"
//             />
//           )}
//           <input
//             type="text"
//             value={row.quantite}
//             onChange={(e) => handleQuantiteChange(e.target.value, index)}
//             placeholder="Qte"
//             className="border p-2 rounded mr-1 w-12"
//           />
//           {row.isCustom ? (
//             <input
//               type="text"
//               value={row.puissance}
//               onChange={(e) => handlePuissanceChange(e.target.value, index)}
//               placeholder="Puissance"
//               className="border p-2 rounded mr-1 w-32"
//             />
//           ) : (
//             <select
//               value={row.puissance}
//               onChange={(e) => handlePuissanceChange(e.target.value, index)}
//               className="border p-2 rounded mr-1 w-56"
//             >
//               <option value="">Select Puissance</option>
//               {row.puissanceOptions.map((option, idx) => (
//                 <option key={idx} value={option.value}>{option.label}</option>
//               ))}
//             </select>
//           )}
//           <select
//             value={row.hour}
//             onChange={(e) => handleHourChange(e.target.value, index)}
//             className="border p-2 rounded"
//           >
//             {row.hourOptions.map((option, idx) => (
//               <option key={idx} value={option}>{option}</option>
//             ))}
//           </select>
//         </div>
//         <div className="flex">
//           <div className="result border p-2 rounded bg-gray-100">
//             {calculateRowResult(row.quantite, row.puissance, row.hour)} Wh/j
//           </div>
//           <button onClick={() => handleDeleteRow(index)} className="text-red-600 font-bold">
//             <TiDelete className="text-4xl" />
//           </button>
//         </div>
//       </div>
//     ))}
//     {rows.length > 0 && (
//       <div className="mt-4">
//         <div style={{ height: '100px' }}>
//           <Bar data={data} options={options} />
//         </div>
//       </div>
//     )}
//     {total > 0 && (
//       <div className="mt-4 w-[300px] mx-auto">
//         <img src={getImageForResult()} alt="Consumption Level" className="mx-auto" />
//       </div>
//     )}
//   </div>
// );
// }

// export default Echelle;



// ===================all work with addrow==================

// import React, { useState } from 'react';
// import lamp from './lamp.jpg';
// import lcd from './lcd.png';
// import box from './box.png';
// import refrigerateur from './refrigerateur.jpg';
// import { Bar } from 'react-chartjs-2';

// import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// const Echelle = () => {
//   const [rows, setRows] = useState([]);

//   const randomChoices = [
//     {
//       puissance: '40',
//       hour: '1',
//       image: lamp,
//       puissanceOptions: [
//         { label: 'lamp 10w', value: '10' },
//         { label: 'lamp 20w', value: '20' },
//         { label: 'lamp 30w', value: '30' },
//         { label: 'lamp 40w', value: '40' }
//       ],
//       hourOptions: Array.from({ length: 24 }, (_, i) => `${i + 1}h`) // Generates "1h" to "24h"
//     },
//     {
//       puissance: '20',
//       hour: '1',
//       image: lcd,
//       puissanceOptions: [
//         { label: 'lcd 10w', value: '10' },
//         { label: 'lcd 20w', value: '20' },
//         { label: 'lcd 30w', value: '30' }
//       ],
//       hourOptions: Array.from({ length: 24 }, (_, i) => `${i + 1}h`) // Generates "1h" to "24h"
//     },
//     {
//       puissance: '30',
//       hour: '1',
//       image: refrigerateur,
//       puissanceOptions: [
//         { label: 'refrigerateur 20w', value: '20' },
//         { label: 'refrigerateur 30w', value: '30' },
//         { label: 'refrigerateur 40w', value: '40' }
//       ],
//       hourOptions: Array.from({ length: 24 }, (_, i) => `${i + 1}h`) // Generates "1h" to "24h"
//     },
  
//     // Add more random choices as needed
//   ];

//   const handlePuissanceChange = (value, index) => {
//     const newRows = [...rows];
//     newRows[index].puissance = value;
//     setRows(newRows);
//   };

//   const handleHourChange = (value, index) => {
//     const newRows = [...rows];
//     newRows[index].hour = value;
//     setRows(newRows);
//   };

//   const handleQuantiteChange = (value, index) => {
//     // Ensure quantite is positive and numeric
//     const newValue = value.replace(/\D/g, ''); // Remove non-digit characters
//     const newRows = [...rows];
//     newRows[index].quantite = newValue;
//     setRows(newRows);
//   };

//   const handleAddRow = () => {
//     setRows(rows => [...rows, { quantite: '1', puissance: '', hour: '1h', image: box, isCustom: true, puissanceOptions: [
//       { label: '10w', value: '10' },
//       { label: '20w', value: '20' },
//       { label: '30w', value: '30' },
//       { label: '40w', value: '40' }
//     ], hourOptions: Array.from({ length: 24 }, (_, i) => `${i + 1}h`) }]);
//   };

//   const handleRandomChoice = (choice) => {
//     setRows(rows => [...rows, { quantite: '1', puissance: choice.puissance, hour: choice.hour, image: choice.image, isCustom: false, puissanceOptions: choice.puissanceOptions, hourOptions: choice.hourOptions }]);
//   };

//   const handleDeleteRow = (index) => {
//     const newRows = rows.filter((row, i) => i !== index);
//     setRows(newRows);
//   };

//   const calculateRowResult = (quantite, puissance, hour) => {
//     return quantite && puissance && hour ? parseInt(quantite) * parseInt(puissance) * parseInt(hour) : 0;
//   };

//   const calculateTotal = () => {
//     return rows.reduce((acc, row) => {
//       const result = calculateRowResult(row.quantite, row.puissance, row.hour);
//       return acc + result;
//     }, 0);
//   };
  
//   const total = calculateTotal();
//   const data = {
//     labels: [`${total} (en Wh/j)`],
//     datasets: [
//       {
//         label: `VOTRE CONSOMMATION ${total} (en Wh/j)`,
//         data: [total],
//         backgroundColor: ['rgba(75, 192, 192, 0.6)'],
//         borderColor: ['rgba(75, 192, 192, 1)'],
//         borderWidth: 2,
//       },
//     ],
//   };

//   const options = {
//     indexAxis: 'y', // Horizontal bar chart
//     scales: {
//       x: {
//         beginAtZero: true,
//         max: 5000,
//       },
//     },
//     maintainAspectRatio: false,
//     responsive: true,
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <div className="flex space-x-4 mb-4">
//         {randomChoices.map((choice, index) => (
//           <img
//             key={index}
//             src={choice.image}
//             alt={`Choice ${index + 1}`}
//             onClick={() => handleRandomChoice(choice)}
//             className="cursor-pointer w-16 h-16"
//           />
//         ))}
//         <div className="mt-4">
//           <button onClick={handleAddRow} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//             Personnalisé
//           </button>
//         </div>
//       </div>

//       {rows.length > 0 && rows.map((row, index) => (
//         <div key={index} className="flex items-center space-x-4 mt-4">
//           {row.image && (
//             <img
//               src={row.image}
//               alt={`Row ${index + 1}`}
//               className="w-16 h-16"
//             />
//           )}
//           <input
//             type="text" // Use type text to allow numeric input and handle validation
//             value={row.quantite}
//             onChange={(e) => handleQuantiteChange(e.target.value, index)}
//             placeholder="Quantite"
//             className="border p-2 rounded"
//           />
//           {row.isCustom ? (
//             <input
//               type="text" // Make puissance editable
//               value={row.puissance}
//               onChange={(e) => handlePuissanceChange(e.target.value, index)}
//               placeholder="Puissance"
//               className="border p-2 rounded"
//             />
//           ) : (
//             <select
//               value={row.puissance} // Set value to row.puissance
//               onChange={(e) => handlePuissanceChange(e.target.value, index)}
//               className="border p-2 rounded"
//             >
//               <option value="">Select Puissance</option>
//               {row.puissanceOptions.map((option, idx) => (
//                 <option key={idx} value={option.value}>{option.label}</option>
//               ))}
//             </select>
//           )}
//           <select
//             value={row.hour}
//             onChange={(e) => handleHourChange(e.target.value, index)}
//             className="border p-2 rounded"
//           >
//             {row.hourOptions.map((option, idx) => (
//               <option key={idx} value={option}>{option}</option>
//             ))}
//           </select>

//           <div className="result border p-2 rounded bg-gray-100">
//             {calculateRowResult(row.quantite, row.puissance, row.hour)}
//           </div>

//           <button onClick={() => handleDeleteRow(index)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
//             Delete
//           </button>
//         </div>
//       ))}
//       {rows.length > 0 && (
//         <div className="mt-4">
//           <div style={{ height: '100px' }}>
//             <Bar data={data} options={options} />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Echelle;

