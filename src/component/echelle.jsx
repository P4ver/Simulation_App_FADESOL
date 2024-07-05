


import React, { useState } from 'react';
import lamp from './lamp.jpg';
import lcd from './lcd.png';
import refrigerateur from './refrigerateur.jpg';

const Echelle = () => {
  const [rows, setRows] = useState([]);

  const randomChoices = [
    {
      puissance: '40',
      hour: '1',
      image: lamp,
      puissanceOptions: [
        { label: 'lamp 10w', value: '10' },
        { label: 'lamp 20w', value: '20' },
        { label: 'lamp 30w', value: '30' },
        { label: 'lamp 40w', value: '40' }
      ],
      hourOptions: Array.from({ length: 24 }, (_, i) => `${i + 1}h`) // Generates "1h" to "24h"
    },
    {
      puissance: '20',
      hour: '1',
      image: lcd,
      puissanceOptions: [
        { label: 'lcd 10w', value: '10' },
        { label: 'lcd 20w', value: '20' },
        { label: 'lcd 30w', value: '30' }
      ],
      hourOptions: Array.from({ length: 24 }, (_, i) => `${i + 1}h`) // Generates "1h" to "24h"
    },
    {
      puissance: '30',
      hour: '1',
      image: refrigerateur,
      puissanceOptions: [
        { label: 'refrigerateur 20w', value: '20' },
        { label: 'refrigerateur 30w', value: '30' },
        { label: 'refrigerateur 40w', value: '40' }
      ],
      hourOptions: Array.from({ length: 24 }, (_, i) => `${i + 1}h`) // Generates "1h" to "24h"
    },
    {
      puissance: '60',
      hour: '3',
      puissanceOptions: [
        { label: 'refrigerateur 20w', value: '20' },
        { label: 'refrigerateur 30w', value: '30' },
        { label: 'refrigerateur 40w', value: '40' }
      ],
      hourOptions: Array.from({ length: 24 }, (_, i) => `${i + 1}h`) // Generates "1h" to "24h"
    },
    // Add more random choices as needed
  ];

  const handlePuissanceChange = (value, index) => {
    const numericValue = value; // The numeric value is directly stored here
    const newRows = [...rows];
    newRows[index].puissance = numericValue;
    setRows(newRows);
  };

  const handleHourChange = (value, index) => {
    const newRows = [...rows];
    newRows[index].hour = value;
    setRows(newRows);
  };

  const handleQuantiteChange = (value, index) => {
    // Ensure quantite is positive and numeric
    const newValue = value.replace(/\D/g, ''); // Remove non-digit characters
    const newRows = [...rows];
    newRows[index].quantite = newValue;
    setRows(newRows);
  };

  const handleAddRow = () => {
    setRows([...rows, { quantite: '1', puissance: '', hour: '', image: null, puissanceOptions: [], hourOptions: [] }]);
  };

  const handleRandomChoice = (choice) => {
    setRows([...rows, { quantite: '1', puissance: choice.puissance, hour: choice.hour, image: choice.image, puissanceOptions: choice.puissanceOptions, hourOptions: choice.hourOptions }]);
  };

  const handleDeleteRow = (index) => {
    const newRows = rows.filter((row, i) => i !== index);
    setRows(newRows);
  };

  const calculateRowResult = (quantite, puissance, hour) => {
    return quantite && puissance && hour ? parseInt(quantite) * parseInt(puissance) * parseInt(hour) : 0;
  };

  const calculateTotal = () => {
    return rows.reduce((acc, row) => {
      const result = calculateRowResult(row.quantite, row.puissance, row.hour);
      return acc + result;
    }, 0);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex space-x-4 mb-4">
        {randomChoices.map((choice, index) => (
          <img
            key={index}
            src={choice.image}
            alt={`Choice ${index + 1}`}
            onClick={() => handleRandomChoice(choice)}
            className="cursor-pointer w-16 h-16"
          />
        ))}
        <div className="mt-4">
          <button onClick={handleAddRow} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Personnalisé
          </button>
        </div>
      </div>

      {rows.length > 0 && rows.map((row, index) => (
        <div key={index} className="flex items-center space-x-4 mt-4">
          {row.image && (
            <img
              src={row.image}
              alt={`Row ${index + 1}`}
              className="w-16 h-16"
            />
          )}
          <input
            type="text" // Use type text to allow numeric input and handle validation
            value={row.quantite}
            onChange={(e) => handleQuantiteChange(e.target.value, index)}
            placeholder="Quantite"
            className="border p-2 rounded"
          />

          <select
            value={row.puissance} // Set value to row.puissance
            onChange={(e) => handlePuissanceChange(e.target.value, index)}
            className="border p-2 rounded"
          >
            <option value="">Select Puissance</option>
            {row.puissanceOptions.map((option, idx) => (
              <option key={idx} value={option.value}>{option.label}</option>
            ))}
          </select>

          <select
            value={row.hour}
            onChange={(e) => handleHourChange(e.target.value, index)}
            className="border p-2 rounded"
          >
            {/* <option value="">Select Hour</option> */}
            {row.hourOptions.map((option, idx) => (
              <option key={idx} value={option}>{option}</option>
            ))}
          </select>

          <div className="result border p-2 rounded bg-gray-100">
            {calculateRowResult(row.quantite, row.puissance, row.hour)}
          </div>

          <button onClick={() => handleDeleteRow(index)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            Delete
          </button>
        </div>
      ))}

      {rows.length > 0 && (
        <div className="mt-4">
          <strong>Total: {calculateTotal()}</strong>
        </div>
      )}
    </div>
  );
}

export default Echelle;









// import React, { useState } from 'react';
// import lamp from './lamp.jpg';
// import lcd from './lcd.png';
// import refrigerateur from './refrigerateur.jpg';

// const Echelle = () => {
//   const [rows, setRows] = useState([]);

//   const randomChoices = [
//     {
//       puissance: '40',
//       hour: '4',
//       image: lamp,
//       puissanceOptions: [
//         { label: 'lamp 10w', value: '10' },
//         { label: 'lamp 20w', value: '20' },
//         { label: 'lamp 30w', value: '30' },
//         { label: 'lamp 40w', value: '40' }
//       ],
//       hourOptions: ['1', '2', '3', '4']
//     },
//     {
//       puissance: '20',
//       hour: '2',
//       image: lcd,
//       puissanceOptions: [
//         { label: 'lcd 10w', value: '10' },
//         { label: 'lcd 20w', value: '20' },
//         { label: 'lcd 30w', value: '30' }
//       ],
//       hourOptions: ['1', '2']
//     },
//     {
//       puissance: '30',
//       hour: '3',
//       image: refrigerateur,
//       puissanceOptions: [
//         { label: 'refrigerateur 20w', value: '20' },
//         { label: 'refrigerateur 30w', value: '30' },
//         { label: 'refrigerateur 40w', value: '40' }
//       ],
//       hourOptions: ['2', '3', '4']
//     },
//     // Add more random choices as needed
//   ];

//   const handlePuissanceChange = (value, index) => {
//     const numericValue = value; // The numeric value is directly stored here
//     const newRows = [...rows];
//     newRows[index].puissance = numericValue;
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
//     setRows([...rows, { quantite: '1', puissance: '', hour: '', image: null, puissanceOptions: [], hourOptions: [] }]);
//   };

//   const handleRandomChoice = (choice) => {
//     setRows([...rows, { quantite: '1', puissance: choice.puissance, hour: choice.hour, image: choice.image, puissanceOptions: choice.puissanceOptions, hourOptions: choice.hourOptions }]);
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

//           <select
//             value={row.puissance} // Set value to row.puissance
//             onChange={(e) => handlePuissanceChange(e.target.value, index)}
//             className="border p-2 rounded"
//           >
//             <option value="">Select Puissance</option>
//             {row.puissanceOptions.map((option, idx) => (
//               <option key={idx} value={option.value}>{option.label}</option>
//             ))}
//           </select>

//           <select
//             value={row.hour}
//             onChange={(e) => handleHourChange(e.target.value, index)}
//             className="border p-2 rounded"
//           >
//             <option value="">Select Hour</option>
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
//           <strong>Total: {calculateTotal()}</strong>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Echelle;







