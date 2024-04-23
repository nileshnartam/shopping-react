import axios from "axios";
import { useEffect, useState } from "react";

export function CrudSample(){
    const apiServer = `http://localhost:8085/appoinment/`;
    const [todoList, setTodoList] = useState([]);
    function loadToDoList(){
        axios.get(apiServer)
        .then((response) =>{
            setTodoList(response.data);
        });
    }

    useEffect(() =>{
        loadToDoList();
    }, []);

    return (
        <div className="container-fluid">
            <div className="w-25">

            </div>
            <div className="w-50">
            {
                todoList.map(toDo => 
                <div className="alert alert-primary w-25" key={toDo.id}>

                    <div className="h2">{toDo.appTitle}</div>
                    <p>{toDo.appDesc}</p>
                </div>)
            }

            </div>
        </div>
    );
}