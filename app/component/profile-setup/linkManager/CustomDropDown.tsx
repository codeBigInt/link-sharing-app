import React, { useState, useEffect } from 'react';
import { Ri24HoursFill, RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri';

interface CustomDropdownProps {
  options: string[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  icons: React.ReactNode[];
}

const CustomDropdown= ({ options, value, onChange, placeholder = "Select an option", icons }: CustomDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState<React.ReactNode>(null);

  useEffect(() => {
    const selectedIndex = options.indexOf(value);
    setSelectedIcon(icons[selectedIndex]);
  }, [value, options, icons]);

  const handleOptionClick = (option: string) => {
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div className="relative w-full">
      <button
        type="button"
        className="w-full px-4 py-2 text-left bg-white border border-gray-300 rounded-md shadow-sm flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-indigo-500"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="flex items-center gap-4">
          {selectedIcon}
          {value || placeholder}
        </span>
        <span className="float-right">{isOpen ? <RiArrowDropUpLine className='text-[40px]' /> : <RiArrowDropDownLine className='text-[40px]' />}</span>
      </button>

      {isOpen && (
        <div className="absolute z-10 w-full mt-2 bg-white border border-gray-300 rounded-md shadow-lg">
          <ul className="py-1">
            {options.map((option, index) => (
              <li
                key={index}
                className="px-4 py-2 text-gray-700 cursor-pointer flex items-center gap-2 hover:bg-gray-200"
                onClick={() => handleOptionClick(option)}
              >
                {icons[index]}
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
