// import React, { useState } from "react";
// import { useFormState } from "react-dom";
// import { formatDateToLocal } from "@/lib/helpers";
// import DatePicker from "../task-form/date-picker";
// import AddTaskForm from "../task-form/add-task-form";

// export type ValuePiece = Date | null;
// export type Value = ValuePiece | [ValuePiece, ValuePiece];

// interface TaskFormProps {
//   isEditing?: boolean;
//   initialDate?: string;
//   initialTitle?: string;
//   createTodo: (formData: FormData) => Promise<void>;
//   updateTodo: (formData: FormData) => Promise<void>; // Assuming update function exists
// }

// export default function TaskForm:TaskFormProps ({
//     isEditing = false,
//     initialDate,
//     initialTitle,
//     createTodo,
//     updateTodo,
//     data = {}, // Added a default value for data
//   }) => {
//     const [dateSelected, onChange] = useState<Value>(
//       initialDate ? formatDateToLocal(initialDate) : null
//     );
//     const [todoTitle, setTodoTitle] = useState<string>(initialTitle || "");

//     const [state, dispatch] = useFormState(
//       isEditing ? updateTodo : createTodo,
//       null
//     );
//     const [stateAddTask, dispatchAddTask] = useFormState(addTask, null);

//     const handleSubmit = async (e: any) => {
//       e.preventDefault();
//       try {
//         const formData = {
//           dateSelected: formatDateToLocal(`${dateSelected?.toString()}`),
//           todoTitle,
//           stateAddTask,
//         };

//         if (isEditing) {
//           formData.id = data.id; // Add ID for updates
//         }

//         await dispatch(formData as FormData);
//       } catch (error) {
//         // Handle errors here
//       }
//     };

//     // ... rest of the component code
//   };
