import React, { useEffect } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import KanbanView from './components/KanbanBoard/KanbanView.';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllData } from './Actions/TicketAction';

const App = () => {
  const dispatch = useDispatch();
  const { allTickets } = useSelector((state) => state.DataReducer);

  useEffect(() => {
    dispatch(fetchAllData());
  }, [dispatch]);

  return (
    <div style={{ paddingTop: '10px' }}>
      {allTickets && (
        <>
          <NavBar />
          <br style={{ marginTop: '5px' }} />
          <KanbanView />
        </>
      )}
    </div>
  );
};

export default App;

