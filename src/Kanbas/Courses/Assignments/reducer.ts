import { createSlice } from '@reduxjs/toolkit';
import { assignments as initialAssignments } from '../../Database'; 

const initialState = {
  assignments: initialAssignments,
};

const assignmentsSlice = createSlice({
  name: 'assignments',
  initialState,
  reducers: {
    addAssignment: (state, { payload: assignment }) => {
      const newAssignment = {
        _id: new Date().getTime().toString(),
        course: assignment.course,
        title: assignment.title,
        details: assignment.details,
        availableDate: assignment.availableDate,
        dueDate: assignment.dueDate,
        points: assignment.points,
      };
      state.assignments = [...state.assignments, newAssignment];
      console.log("State after adding assignment:", state.assignments);
    },
    deleteAssignment: (state, { payload: assignmentId }) => {
      state.assignments = state.assignments.filter(
        (assignment: any) => assignment._id !== assignmentId
      );
      console.log("State after deleting assignment:", state.assignments);
    },
    updateAssignment: (state, { payload: assignment }) => {
      state.assignments = state.assignments.map((a: any) =>
        a._id === assignment._id ? assignment : a
      );
      console.log("State after updating assignment:", state.assignments);
    },
    editAssignment: (state, { payload: assignmentId }) => {
      state.assignments = state.assignments.map((a: any) =>
        a._id === assignmentId ? { ...a, editing: true } : a
      );
      console.log("State after editing assignment:", state.assignments);
    },
    handleSave: (state, { payload: assignment }) => {
      const existingAssignment = state.assignments.find((a: any) => a._id === assignment._id);
      if (existingAssignment) {
        state.assignments = state.assignments.map((a: any) =>
          a._id === assignment._id ? assignment : a
        );
      } else {
        state.assignments = [...state.assignments, assignment];
      }
      console.log("State after handleSave:", state.assignments);
    },
    handleCancel: () => {
      console.log("handleCancel called");
    },
  },
});

export const { addAssignment, deleteAssignment, updateAssignment, editAssignment, handleSave, handleCancel } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;
