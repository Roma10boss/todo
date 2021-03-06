import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "./actions/user";
import "bootstrap/dist/css/bootstrap.min.css";
import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";
import TotalCompleteItems from "./components/TotalCompleteItems";

const App = ({ history, logoutUser }) => {

  const logout = () => {
	logoutUser();
    history.push("/login");
  };

  return (
    <div className="container bg-white p-4 mt-5">
      <Link to="#" onClick={logout}>
        Logout
      </Link>
      {/* <h1>My Todo List</h1>
			<AddTodoForm />
			<TodoList />
			<TotalCompleteItems /> */}
    </div>
  );
};

export default connect(null, {logoutUser})(App);
