import axios from "axios";

const basseUrl = "http://localhost:4004/api/todos/";

const getAllTodos = (setTodos) =>
	axios
		.get(basseUrl)
		.then(({ data }) => {
			setTodos(data);
		})
		.catch((err) => {
			console.log("this the cuserion error", err);
		});

const addTodo = async (title, setTitle, setTodos) => {
	try {
		const data = await axios.post(basseUrl, { todoTitle: title });
		console.log(data);
		setTitle("");
		getAllTodos(setTodos);
	} catch (error) {
		console.log("this is an error for post method", error);
	}
};

const deleteTodo = async (id, setTodos) => {
	try {
		await axios.delete(basseUrl + id).then((response) => {
			console.log(response);
			getAllTodos(setTodos);
		});
	} catch (error) {
		console.log("this is an error for delete method", error);
	}
};

const updateTodos = async (title, setTitle, setTodos, id, setIsUpdating) => {
	try {
		await axios.put(basseUrl + id, { todoTitle: title }).then((response) => {
			setTitle("");
			getAllTodos(setTodos);
			setIsUpdating(false);
			console.log(response);
		});
	} catch (error) {
		console.log(error);
	}
};

const handleIsCompleted = async (id, setTodos, check) => {
	try {
		await axios.put(basseUrl + id, { isCompleted: check }).then((response) => {
			console.log(response);
			getAllTodos(setTodos);
		});
	} catch (error) {
		console.log("this is an error for delete method", error);
	}
};

export { getAllTodos, addTodo, deleteTodo, updateTodos, handleIsCompleted };
