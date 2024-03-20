import { Button, Modal } from "@/components";
import React, { useState } from "react";
import Calendar from "react-calendar";

import "react-calendar/dist/Calendar.css";
import { Value } from "../create/create-task-form";
import { CalendarIcon } from "@heroicons/react/24/outline";

interface Props {
  dateSelected: Value | null;
  onChange: React.Dispatch<any>;
  defaultValue?: Value | null;
  disabled?: boolean;
}

const DatePicker: React.FC<Props> = ({
  dateSelected,
  onChange,
  defaultValue,
  disabled,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalToggle = () => setIsModalOpen((prev) => !prev);

  return (
    <div className='mb-4'>
      <Button
        onClick={handleModalToggle}
        className='sw-auto w-full disabled:bg-indigo-300 justify-center bg-indigo-500 hover:bg-indigo-400 focus-visible:outline-indigo-500 active:bg-indigo-600'
        disabled={disabled}
      >
        <span className='hidden md:block'>Select Date</span>
        <CalendarIcon className='ml-2 h-5 w-5 text-gray-50' />
      </Button>
      {isModalOpen && (
        <div className='fixed inset-0 z-50 bg-gray-500 bg-opacity-50 transition-opacity'>
          <Modal modalOpen={isModalOpen} setModalOpen={handleModalToggle}>
            <Calendar
              defaultValue={defaultValue}
              onChange={onChange}
              onClickDay={handleModalToggle}
              value={dateSelected}
            />
          </Modal>
        </div>
      )}
    </div>
  );
};

export default DatePicker;
