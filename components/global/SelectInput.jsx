import React from 'react';

const SelectInput = ({ data, value, onChange, label }) => {
  return (
    <div className="w-full">
      {label && <label className="block mb-2 capitalize lg:text-lg poppins-medium tracking-wide">{label} :</label>}
      <select
        value={value}
        onChange={onChange}
        className="border p-2 rounded w-full"
      >
        <option value="" disabled>Select an option</option>
        {data.map((item) => (
          <option key={item.id} value={item.text || item.name}>
            {item.text || item.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
