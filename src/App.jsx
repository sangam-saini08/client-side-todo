import React, { useState, useEffect } from "react";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { GrCheckbox } from "react-icons/gr";
import { GrCheckboxSelected } from "react-icons/gr";
import {
	getAllTodos,
	addTodo,
	deleteTodo,
	handleIsCompleted,
	updateTodos,
} from "../utils/HandleApi.js";

function App() {
	const [todos, setTodos] = useState([]);
	const [title, setTitle] = useState("");
	const [isUpdating, setIsUpdating] = useState(false);
	const [id, setId] = useState("");

	useEffect(() => {
		getAllTodos(setTodos);
	}, []);
	return (
		<div className="container flex justify-center flex-col gap-3 items-center bg-stone-50 h-screen">
			<h1 className="text-black text-4xl  font-semibold">Todo App</h1>
			<div className="flex flex-row gap-5 justify-end items-end mt-10 ">
				<input
					placeholder="Add Todo"
					className="h-10 tab:w-96 sm:w-60  border-black border-b-2 p-4"
					value={title}
					onChange={(event) => setTitle(event.target.value)}
				/>
				{isUpdating ? (
					<div
						className="h-10 w-auto bg-green-500 flex items-center justify-center cursor-pointer drop-shadow-xl"
						onClick={() =>
							updateTodos(title, setTitle, setTodos, id, setIsUpdating)
						}
					>
						<span className="text-white font-lg px-5">
							{isUpdating ? "Update" : "Add"}
						</span>
					</div>
				) : (
					<div
						className="h-10 w-auto bg-green-500 flex items-center justify-center cursor-pointer drop-shadow-xl"
						onClick={() =>
							updateTodos(title, setTitle, setTodos, id, setIsUpdating)
						}
					>
						<span className="text-white font-lg px-5">
							{isUpdating ? "Update" : "Add"}
						</span>
					</div>
				)}
			</div>
			<div className="tab:w-9/12 sm:w-full items-center flex flex-col">
				{todos.map((item) => {
					return (
						<div
							className="container sm:w-4/5 tab:w-9/12 lg:w-1/2 h-16 flex flex-row justify-between bg-white items-center px-5 mt-5 rounded-md drop-shadow-xl "
							key={item?._id}
						>
							<div className="flex flex-row justify-center gap-2 items-center">
								{item?.isCompleted ? (
									<GrCheckboxSelected
										size={20}
										color="black"
										className="cursor-pointer"
										onClick={() => {
											handleIsCompleted(
												item?._id,
												setTodos,
												!item?.isCompleted
											);
										}}
									/>
								) : (
									<GrCheckbox
										color="black"
										size={20}
										className="cursor-pointer"
										onClick={() => {
											handleIsCompleted(
												item?._id,
												setTodos,
												!item?.isCompleted
											);
										}}
									/>
								)}
								<h2 className="text-black tab:text-lg sm:text-md font-normal">
									{item?.todoTitle}
								</h2>
							</div>
							<div className="bg-white tab:w-20 sm:w-12 h-100 flex-row flex tab:gap-5 sm:gap-1">
								<BiEdit
									size={25}
									color="black"
									className="cursor-pointer"
									onClick={() => {
										setId(item?._id);
										setIsUpdating(true);
									}}
								/>
								<AiFillDelete
									size={25}
									color="black"
									className="cursor-pointer"
									onClick={() => deleteTodo(item?._id, setTodos)}
								/>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default App;
