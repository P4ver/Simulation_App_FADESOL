import React, { useState } from 'react';
import lamp from './lamp.jpg';
import lcd from './lcd.png';
import refrigerateur from './refrigerateur.jpg';

const Echelle = () => {
  const [rows, setRows] = useState([]);
  const randomChoices = [
    { quantite: '40', hour: '4', image: lamp },
    { quantite: '20', hour: '2', image: lcd },
    { quantite: '30', hour: '3', image: refrigerateur },
    // Add more random choices as needed
  ];

  const handleQuantiteChange = (value, index) => {
    const newRows = [...rows];
    newRows[index].quantite = value;
    setRows(newRows);
  };

  const handleHourChange = (value, index) => {
    const newRows = [...rows];
    newRows[index].hour = value;
    setRows(newRows);
  };

  const handleAddRow = () => {
    setRows([...rows, { quantite: '', hour: '' }]);
  };

  const handleRandomChoice = (choice) => {
    setRows([...rows, { quantite: choice.quantite, hour: choice.hour }]);
  };

  const handleDeleteRow = (index) => {
    const newRows = rows.filter((row, i) => i !== index);
    setRows(newRows);
  };

  const calculateRowResult = (quantite, hour) => {
    return quantite && hour ? parseInt(quantite) * parseInt(hour) : 0;
  };

  const calculateTotal = () => {
    return rows.reduce((acc, row) => {
      const result = calculateRowResult(row.quantite, row.hour);
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
          <select
            value={row.quantite}
            onChange={(e) => handleQuantiteChange(e.target.value, index)}
            className="border p-2 rounded"
          >
            <option value="">Select Quantite</option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
            <option value="40">40</option>
            {/* Add more options as needed */}
          </select>

          <select
            value={row.hour}
            onChange={(e) => handleHourChange(e.target.value, index)}
            className="border p-2 rounded"
          >
            <option value="">Select Hour</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            {/* Add more options as needed */}
          </select>

          <div className="result border p-2 rounded bg-gray-100">
            {calculateRowResult(row.quantite, row.hour)}
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
//     { quantite: '40', hour: '4', image: lamp },
//     { quantite: '20', hour: '2', image: lcd },
//     { quantite: '30', hour: '3', image: refrigerateur },
//     // Add more random choices as needed
//   ];

//   const handleQuantiteChange = (value, index) => {
//     const newRows = [...rows];
//     newRows[index].quantite = value;
//     setRows(newRows);
//   };

//   const handleHourChange = (value, index) => {
//     const newRows = [...rows];
//     newRows[index].hour = value;
//     setRows(newRows);
//   };

//   const handleAddRow = () => {
//     setRows([...rows, { quantite: '', hour: '' }]);
//   };

//   const handleRandomChoice = (choice) => {
//     setRows([...rows, { quantite: choice.quantite, hour: choice.hour }]);
//   };

//   const calculateRowResult = (quantite, hour) => {
//     return quantite && hour ? parseInt(quantite) * parseInt(hour) : 0;
//   };

//   const calculateTotal = () => {
//     return rows.reduce((acc, row) => {
//       const result = calculateRowResult(row.quantite, row.hour);
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
//               <div className="mt-4">
//         <button onClick={handleAddRow} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//             Personnalisé
//         </button>
//       </div>
//       </div>

//       {rows.length > 0 && rows.map((row, index) => (
//         <div key={index} className="flex items-center space-x-4 mt-4">
//           <select
//             value={row.quantite}
//             onChange={(e) => handleQuantiteChange(e.target.value, index)}
//             className="border p-2 rounded"
//           >
//             <option value="">Select Quantite</option>
//             <option value="10">10</option>
//             <option value="20">20</option>
//             <option value="30">30</option>
//             <option value="40">40</option>
//             {/* Add more options as needed */}
//           </select>

//           <select
//             value={row.hour}
//             onChange={(e) => handleHourChange(e.target.value, index)}
//             className="border p-2 rounded"
//           >
//             <option value="">Select Hour</option>
//             <option value="1">1</option>
//             <option value="2">2</option>
//             <option value="3">3</option>
//             <option value="4">4</option>
//             {/* Add more options as needed */}
//           </select>

//           <div className="result border p-2 rounded bg-gray-100">
//             {calculateRowResult(row.quantite, row.hour)}
//           </div>
//         </div>
//       ))}

//       {/* <div className="mt-4">
//         <button onClick={handleAddRow} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//           Add Row
//         </button>
//       </div> */}

//       {rows.length > 0 && (
//         <div className="mt-4">
//           <strong>Total: {calculateTotal()}</strong>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Echelle;



















// import React, { useState } from 'react';
// // import lamp from "./lamp.jpg"
// import lamp from './lamp.jpg';
// import refrigerateur from './refrigerateur.jpg';
// import lcd from './lcd.png'
// const Echelle = () => {
//   const [rows, setRows] = useState([{ quantite: '', hour: '' }]);
//   const randomChoices = [
//     { quantite: '40', hour: '4', image: lamp },
//     { quantite: '20', hour: '2', image: refrigerateur },
//     { quantite: '50', hour: '3', image: lcd },
//     // Add more random choices as needed
//   ];

//   const handleQuantiteChange = (value, index) => {
//     const newRows = [...rows];
//     newRows[index].quantite = value;
//     setRows(newRows);
//   };

//   const handleHourChange = (value, index) => {
//     const newRows = [...rows];
//     newRows[index].hour = value;
//     setRows(newRows);
//   };

//   const handleAddRow = () => {
//     setRows([...rows, { quantite: '', hour: '' }]);
//   };

//   const handleRandomChoice = (choice) => {
//     setRows([...rows, { quantite: choice.quantite, hour: choice.hour }]);
//   };

//   const calculateRowResult = (quantite, hour) => {
//     return quantite && hour ? parseInt(quantite) * parseInt(hour) : 0;
//   };

//   const calculateTotal = () => {
//     return rows.reduce((acc, row) => {
//       const result = calculateRowResult(row.quantite, row.hour);
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
//       </div>

//       {rows.map((row, index) => (
//         <div key={index} className="flex items-center space-x-4 mt-4">
//           <select
//             value={row.quantite}
//             onChange={(e) => handleQuantiteChange(e.target.value, index)}
//             className="border p-2 rounded"
//           >
//             <option value="">Select Quantite</option>
//             <option value="10">10</option>
//             <option value="20">20</option>
//             <option value="30">30</option>
//             <option value="40">40</option>
//             <option value="50">50</option>
//             {/* Add more options as needed */}
//           </select>

//           <select
//             value={row.hour}
//             onChange={(e) => handleHourChange(e.target.value, index)}
//             className="border p-2 rounded"
//           >
//             <option value="">Select Hour</option>
//             <option value="1">1</option>
//             <option value="2">2</option>
//             <option value="3">3</option>
//             <option value="4">4</option>
//             {/* Add more options as needed */}
//           </select>

//           <div className="result border p-2 rounded bg-gray-100">
//             {calculateRowResult(row.quantite, row.hour)}
//           </div>
//         </div>
//       ))}

//       <div className="mt-4">
//         <button onClick={handleAddRow} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//           Add Row
//         </button>
//       </div>

//       <div className="mt-4">
//         <strong>Total: {calculateTotal()}</strong>
//       </div>
//     </div>
//   );
// }

// export default Echelle;




// ==================================================================================


// import React, { useState } from 'react';

// const Echelle = () => {
//   const [rows, setRows] = useState([{ quantite: '', hour: '' }]);
//   const randomChoices = [
//     { quantite: '40', hour: '8' },
//     { quantite: '20', hour: '2' },
//     { quantite: '30', hour: '3' },
//     // Add more random choices as needed
//   ];

//   const handleQuantiteChange = (value, index) => {
//     const newRows = [...rows];
//     newRows[index].quantite = value;
//     setRows(newRows);
//   };

//   const handleHourChange = (value, index) => {
//     const newRows = [...rows];
//     newRows[index].hour = value;
//     setRows(newRows);
//   };

//   const handleAddRow = () => {
//     setRows([...rows, { quantite: '', hour: '' }]);
//   };

//   const handleRandomChoice = (choice) => {
//     setRows([...rows, { quantite: choice.quantite, hour: choice.hour }]);
//   };

//   const calculateRowResult = (quantite, hour) => {
//     return quantite && hour ? parseInt(quantite) * parseInt(hour) : 0;
//   };

//   const calculateTotal = () => {
//     return rows.reduce((acc, row) => {
//       const result = calculateRowResult(row.quantite, row.hour);
//       return acc + result;
//     }, 0);
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <div className="flex space-x-4 mb-4">
//         {randomChoices.map((choice, index) => (
//           <button
//             key={index}
//             onClick={() => handleRandomChoice(choice)}
//             className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
//           >
//             {`Quantite: ${choice.quantite}, Hour: ${choice.hour}`}
//           </button>
//         ))}
//       </div>

//       {rows.map((row, index) => (
//         <div key={index} className="flex items-center space-x-4 mt-4">
//           <select
//             value={row.quantite}
//             onChange={(e) => handleQuantiteChange(e.target.value, index)}
//             className="border p-2 rounded"
//           >
//             <option value="">Select Quantite</option>
//             <option value="10">10</option>
//             <option value="20">20</option>
//             <option value="30">30</option>
//             <option value="40">40</option>
//             {/* Add more options as needed */}
//           </select>

//           <select
//             value={row.hour}
//             onChange={(e) => handleHourChange(e.target.value, index)}
//             className="border p-2 rounded"
//           >
//             <option value="">Select Hour</option>
//             <option value="1">1</option>
//             <option value="2">2</option>
//             <option value="3">3</option>
//             <option value="4">4</option>
//             <option value="8">8</option>
//             {/* Add more options as needed */}
//           </select>

//           <div className="result border p-2 rounded bg-gray-100">
//             {calculateRowResult(row.quantite, row.hour)}
//           </div>
//         </div>
//       ))}

//       <div className="mt-4">
//         <button onClick={handleAddRow} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//           Add Row
//         </button>
//       </div>

//       <div className="mt-4">
//         <strong>Total: {calculateTotal()}</strong>
//       </div>
//     </div>
//   );
// }

// export default Echelle;


// ==================================================================================

// import React, { useState } from 'react';

// const Echelle = () => {
//   const [rows, setRows] = useState([{ quantite: '', hour: '' }]);
//   const randomChoices = [
//     { quantite: '40', hour: '4' },
//     { quantite: '20', hour: '2' },
//     { quantite: '30', hour: '3' },
//     // Add more random choices as needed
//   ];

//   const handleQuantiteChange = (value, index) => {
//     const newRows = [...rows];
//     newRows[index].quantite = value;
//     setRows(newRows);
//   };

//   const handleHourChange = (value, index) => {
//     const newRows = [...rows];
//     newRows[index].hour = value;
//     setRows(newRows);
//   };

//   const handleAddRow = () => {
//     setRows([...rows, { quantite: '', hour: '' }]);
//   };

//   const handleRandomChoice = (choice) => {
//     setRows([...rows, { quantite: choice.quantite, hour: choice.hour }]);
//   };

//   const calculateRowResult = (quantite, hour) => {
//     return quantite && hour ? parseInt(quantite) * parseInt(hour) : 0;
//   };

//   const calculateTotal = () => {
//     return rows.reduce((acc, row) => {
//       const result = calculateRowResult(row.quantite, row.hour);
//       return acc + result;
//     }, 0);
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <div className="flex space-x-4 mb-4">
//         {randomChoices.map((choice, index) => (
//           <button
//             key={index}
//             onClick={() => handleRandomChoice(choice)}
//             className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
//           >
//             {`Quantite: ${choice.quantite}, Hour: ${choice.hour}`}
//           </button>
//         ))}
//       </div>

//       {rows.map((row, index) => (
//         <div key={index} className="flex items-center space-x-4 mt-4">
//           <select
//             value={row.quantite}
//             onChange={(e) => handleQuantiteChange(e.target.value, index)}
//             className="border p-2 rounded"
//           >
//             <option value="">Select Quantite</option>
//             <option value="10">10</option>
//             <option value="20">20</option>
//             <option value="30">30</option>
//             {/* Add more options as needed */}
//           </select>

//           <select
//             value={row.hour}
//             onChange={(e) => handleHourChange(e.target.value, index)}
//             className="border p-2 rounded"
//           >
//             <option value="">Select Hour</option>
//             <option value="1">1</option>
//             <option value="2">2</option>
//             <option value="3">3</option>
//             {/* Add more options as needed */}
//           </select>

//           <div className="result border p-2 rounded bg-gray-100">
//             {calculateRowResult(row.quantite, row.hour)}
//           </div>
//         </div>
//       ))}

//       <div className="mt-4">
//         <button onClick={handleAddRow} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//           Add Row
//         </button>
//       </div>

//       <div className="mt-4">
//         <strong>Total: {calculateTotal()}</strong>
//       </div>
//     </div>
//   );
// }

// export default Echelle;



//========================================================




