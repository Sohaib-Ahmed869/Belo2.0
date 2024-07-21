import {
  KanbanComponent,
  ColumnsDirective,
  ColumnDirective,
} from "@syncfusion/ej2-react-kanban";
import * as React from "react";
import { Modal } from "react-bootstrap";
import "./App.css";

function KanbanBoard() {
  let data = [
    {
      Id: 1,
      Status: "Open",
      Summary: "Analyze the new requirements gathered from the customer.",
      Type: "Story",
      Priority: "Low",
      Tags: "Analyze,Customer",
      Estimate: 3.5,
      Assignee: "Nancy Davloio",
      RankId: 1,
    },
    {
      Id: 2,
      Status: "InProgress",
      Summary: "Fix the issues reported in the IE browser.",
      Type: "Bug",
      Priority: "Release Breaker",
      Tags: "IE",
      Estimate: 2.5,
      Assignee: "Janet Leverling",
      RankId: 2,
    },
    {
      Id: 3,
      Status: "Testing",
      Summary: "Fix the issues reported by the customer.",
      Type: "Bug",
      Priority: "Low",
      Tags: "Customer",
      Estimate: "3.5",
      Assignee: "Steven walker",
      RankId: 1,
    },
    {
      Id: 4,
      Status: "Close",
      Summary:
        "Arrange a web meeting with the customer to get the login page requirements.",
      Type: "Others",
      Priority: "Low",
      Tags: "Meeting",
      Estimate: 2,
      Assignee: "Michael Suyama",
      RankId: 1,
    },
    {
      Id: 5,
      Status: "Validate",
      Summary: "Validate new requirements",
      Type: "Improvement",
      Priority: "Low",
      Tags: "Validation",
      Estimate: 1.5,
      Assignee: "Robert King",
      RankId: 1,
    },
  ];

  const addToKanban = (task) => {
    data.push(task);

    // Refresh the Kanban component
    document.getElementById("kanban").ej2_instances[0].refresh();
  };

  const [show, setShow] = React.useState(false);
  const [task, setTask] = React.useState({
    Id: 0,
    Status: "Open",
    Summary: "",
    Type: "",
    Priority: "",
    Tags: "",
    Estimate: 0,
    Assignee: "",
    RankId: 0,
  });

  return (
    <div className="bg-gray-100 p-5">
      <div className="flex justify-end w-full">
        <button
          className="bg-white text-gray-600 p-2 rounded-md border border-gray-300 text-sm hover:bg-gray-100 mb-10"
          onClick={() => setShow(true)}
        >
          Add Task
        </button>
      </div>

      <KanbanComponent
        id="kanban"
        keyField="Status"
        dataSource={data}
        cardSettings={{ contentField: "Summary", headerField: "Id" }}
        className="bg-gray-100 p-5"
      >
        <ColumnsDirective>
          <ColumnDirective headerText="New" keyField="Open" />
          <ColumnDirective headerText="Screening" keyField="InProgress" />
          <ColumnDirective headerText="Available" keyField="Testing" />
          <ColumnDirective headerText="Done" keyField="Close" />
        </ColumnsDirective>
      </KanbanComponent>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        centered
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-gray-300 rounded-2xl w-1/3 shadow-xl z-50 bg-white p-10"
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="mb-3 flex flex-col">
              <label htmlFor="Summary" className="form-label">
                Summary
              </label>
              <input
                type="text"
                className="form-control border-2 p-2 mt-2 rounded-md"
                id="Summary"
                value={task.Summary}
                onChange={(e) => setTask({ ...task, Summary: e.target.value })}
              />
            </div>
            <div className="mb-3 flex flex-col">
              <label htmlFor="Type" className="form-label">
                Type
              </label>
              <input
                type="text"
                className="form-control border-2 p-2 mt-2 rounded-md"
                id="Type"
                value={task.Type}
                onChange={(e) => setTask({ ...task, Type: e.target.value })}
              />
            </div>
            <div className="mb-3 flex flex-col">
              <label htmlFor="Priority" className="form-label">
                Priority
              </label>
              <input
                type="text"
                className="form-control border-2 p-2 mt-2 rounded-md"
                id="Priority"
                value={task.Priority}
                onChange={(e) => setTask({ ...task, Priority: e.target.value })}
              />
            </div>
            <div className="mb-3 flex flex-col">
              <label htmlFor="Tags" className="form-label">
                Tags
              </label>
              <input
                type="text"
                className="form-control border-2 p-2 mt-2 rounded-md"
                id="Tags"
                value={task.Tags}
                onChange={(e) => setTask({ ...task, Tags: e.target.value })}
              />
            </div>
            <div className="mb-3 flex flex-col">
              <label htmlFor="Estimate" className="form-label">
                Estimate
              </label>
              <input
                type="text"
                className="form-control border-2 p-2 mt-2 rounded-md"
                id="Estimate"
                value={task.Estimate}
                onChange={(e) => setTask({ ...task, Estimate: e.target.value })}
              />
            </div>
            <div className="mb-3 flex flex-col">
              <label htmlFor="Assignee" className="form-label">
                Assignee
              </label>
              <input
                type="text"
                className="form-control border-2 p-2 mt-2 rounded-md"
                id="Assignee"
                value={task.Assignee}
                onChange={(e) => setTask({ ...task, Assignee: e.target.value })}
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <button
            className="bg-white text-gray-600 p-2 rounded-md border border-gray-300 text-sm hover:bg-gray-100"
            onClick={() => {
              addToKanban(task);
              setShow(false);
            }}
          >
            Add Task
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
export default KanbanBoard;
