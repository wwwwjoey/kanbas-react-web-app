import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState = {
  assignments: [] as {
    _id: string;
    course: any;
    title: any;
    details: any;
    availableFrom: any;
    availableUntil: any;
    due: any;
    points: any;
  }[],
};

const assignmentsSlice = createSlice({
  name: 'assignments',
  initialState,
  reducers: {
    setAssignments: (
      state,
      action: PayloadAction<
        {
          _id: string;
          course: any;
          title: any;
          details: any;
          availableFrom: any;
          availableUntil: any;
          due: any;
          points: any;
        }[]
      >
    ) => {
      state.assignments = action.payload;
    },
    addAssignment: (
      state,
      action: PayloadAction<{
        course: any;
        title: any;
        details: any;
        availableFrom: any;
        availableUntil: any;
        due: any;
        points: any;
      }>
    ) => {
      const newAssignment = {
        _id: new Date().getTime().toString(),
        course: action.payload.course,
        title: action.payload.title,
        details: action.payload.details,
        availableFrom: action.payload.availableFrom,
        availableUntil: action.payload.availableUntil,
        due: action.payload.due,
        points: action.payload.points,
      };
      state.assignments.push(newAssignment);
    },
    deleteAssignment: (state, action: PayloadAction<string>) => {
      state.assignments = state.assignments.filter(
        (assignment) => assignment._id !== action.payload
      );
    },
    handleSave: (
      state,
      action: PayloadAction<{
        _id: string;
        course: any;
        title: any;
        details: any;
        availableFrom: any;
        availableUntil: any;
        due: any;
        points: any;
      }>
    ) => {
      const existingAssignmentIndex = state.assignments.findIndex(
        (a) => a._id === action.payload._id
      );
      if (existingAssignmentIndex !== -1) {
        state.assignments[existingAssignmentIndex] = action.payload;
      } else {
        state.assignments.push(action.payload);
      }
    },
  },
});

export const { setAssignments, addAssignment, deleteAssignment, handleSave } =
  assignmentsSlice.actions;

export default assignmentsSlice.reducer;
