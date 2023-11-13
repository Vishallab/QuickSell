import axios from 'axios';//Js library-axios

export const fetchAllData = () => async (dispatch) =>{
    try {
        dispatch({type : 'TICKET_REQUEST'})
    
        const {data} = await axios.get("https://api.quicksell.co/v1/internal/frontend-assignment/");

        dispatch({type : 'TICKET_SUCCESS', payload : data});

    } catch (error) {
        dispatch({type : 'TICKET_FAILURE'})
    }
}
export const selectData = (group, allTickets, orderValue) => async (dispatch) => {
    try {
      dispatch({ type: 'SELECT_TICKET_REQUEST' });
  
      let user = false;
      let mySet = new Set();
      let arr = [],
        selectedData = [];
  //if user selects view by status
  if (group === 'status') {
        // i Includes "Done" and "Cancelled" statuses additionally 
        const statuses = ['Backlog', 'Todo','In progress' ,'done',  'Cancelled'];

        //for checking my view on the screen 
        // const statuses = ['In progress', 'In progress','In progress' ,'In progress',  'In progress'];
  
        allTickets.forEach((elem) => {
          mySet.add(elem.status);
        });
  
        statuses.forEach((elem, index) => {
          let arr = allTickets.filter((fElem) => {
            return elem === fElem.status;
          });
          selectedData.push({
            [index]: {
              title: elem,
              value: arr,
            },
          });
        });
      } 
  //if user selects view by user

      else if (group === 'user') {
        user = true;
        allTickets?.allUser?.forEach((elem, index) => {
          arr = allTickets?.allTickets?.filter((Felem) => {
            return elem.id === Felem.userId;
          });
  
          selectedData.push({
            [index]: {
              title: elem.name,
              value: arr,
            },
          });
        });
      } 

  //and else (if user selects view by priority)
      
      else {
        let prior_list = ['No priority', 'Urgent', 'High', 'Medium', 'Low'];
  
        prior_list.forEach((elem, index) => {
          arr = allTickets.filter((fElem) => {
            return index === fElem.priority;
          });
  
          selectedData.push({
            [index]: {
              title: elem,
              value: arr,
            },
          });
        });
      }
  

      // now by the ordering 
      //if select by the title
      if (orderValue === 'title') {
        selectedData.forEach((elem, index) => {
          elem[index]?.value?.sort((a, b) => a.title.localeCompare(b.title));
        });
      }
  //or if select by the priority
      if (orderValue === 'priority') {
        selectedData.forEach((elem, index) => {
          elem[index]?.value?.sort((a, b) => b.priority - a.priority);
        });
      }
  
      dispatch({ type: 'SELECT_TICKET_SUCCESS', payload: { selectedData, user } });
    } catch (error) {
      dispatch({ type: 'SELECT_TICKET_FAILURE', payload: error.message });
    }
  };
  