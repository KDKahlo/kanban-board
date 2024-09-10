import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';


export default function KanbanBoard() {
    //I need a useState for completed items column and incompleted items column
        const [complete, setCompleted] = useState([]);
        const [incomplete, setIncomplete] = useState([]);

  return (
    //<DragDropContext to enable drag and drop functionality
    <DragDropContext>
    
        <h2 style={{ textAlign: "center" }}>DEBUGGING PROGRESS BOARD</h2>

        <div
            style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "row",
            }}
        >



        </div>
    </DragDropContext>
  )
}
