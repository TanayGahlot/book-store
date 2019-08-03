import * as ActionTypes from './ActionTypes';
import {baseUrl} from '../shared/baseUrl';

export const BooksLoading = () => ({
    type: ActionTypes.BOOKS_LOADING
});


export const fetchBooks = () => (dispatch) => {
    dispatch(BooksLoading());
    return fetch(baseUrl ,
      {
        method: 'GET',
        headers:{
          'Content-Type': 'application/json'
    } })
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
        var errmess = new Error(error.message);
        throw errmess;
  })

    .then(response => response.json())
    .then(Books => dispatch(addBooks(Books)))
    .catch(error => dispatch(BooksFailed(error.message)));
};



export const BooksFailed = (errmess) => ({
    type: ActionTypes.BOOKS_FAILED,
    payload: errmess
});

 export const addBooks = (Books) => ({
     type: ActionTypes.ADD_BOOKS,
     payload: Books
 });

 ///Fetch based on priority
 export const getfilteredBook=(data) => (dispatch) => {
     var urlform= '?';

     for (let [key,value] of Object.entries(data)) {

        for (var i=0; i<value.length; i++)
        {
        urlform= urlform.concat(key+'='+value[i]+'&');
        }
    }
     
    return fetch(baseUrl + 'Books' + urlform,{
        method: "GET",
        
        headers: {
          "Content-Type": "application/json"
        }
        
    })
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      
      error => {
            throw error;
      })
    
      .then(response => response.json())
      
        .then(response => dispatch(addBooks(response)))
        .catch(error =>  { console.log('Update Book', error.message); alert('Your priority Book could not be Updated \nError: '+error.message); });
    
};

