import { createContext, useReducer } from 'react'

/**
 * This is the 
 */
interface MatrixTableState {
  /**
   * This is the price matrix that contains the latest value
   */
  matrix: import('../../types').Matrix
  /**
   * We will use original matrix to help us "reset" the table when we want to cancel editing it.
   * Remember that **whenever** you get the matrix from the server, you must set originalMatrix
   * to that value; originalMatrix should try to mirror the matrix in our database.
   */
  originalMatrix: import('../../types').Matrix
}

/**
 * These are the actions you can dispatch. Add actions you want to help you
 * type the dispatch function
 */
type MatrixAction = {
  type: 'SET_MATRIX',
  /**
   * When payload is empty, we will need to set the values from originalMatrix
   */ 
  payload?: import('../../types').Matrix
  metadata?: {
    /**
     * If this is set to true, then instead of resetting to the originalMatrix,
     * we reset to the emptyMatrix
     */
    resetToEmpty?: boolean
  }
} | {
  type: 'SET_ORIGINAL_MATRIX',
  /**
   * When empty, set the value from emptyMatrix
   */
  payload?: import('../../types').Matrix
} | {
  type: 'SOME_ACTION',
  payload: any
} | {
  type: 'GET_ALL_DATA',
  payload?: import('../../types').Matrix
} | {
  type: 'SAVE_JSON',
  payload: any
} | {
  type: 'EDIT_ACTION',
  payload: any
} | {
  type: 'CLEAR_PRICING',
}// Here you will need to add your other action(s) in order to edit the pricing (remove SOME_ACTION)

/**
 * This is for the Provider component
 */
type ProviderProps = {
  initialMatrix?: import('../../types').Matrix
}

const emptyMatrix = {
  "36months": {
      "lite": 0,
      "standard": 0,
      "unlimited": 0,
  },
  "24months": {
      "lite": 0,
      "standard": 0,
      "unlimited": 0
  },
  "12months": {
      "lite": 0,
      "standard": 0,
      "unlimited": 0
  },
  "mtm": {
      "lite": 0,
      "standard": 0,
      "unlimited": 0
  }
}

const defaultState: MatrixTableState = {
  matrix: emptyMatrix,
  originalMatrix: emptyMatrix,
}

const saveJson = (val) => {
  fetch('http://localhost:3000/api/save-pricing', {
      method: 'POST',
      headers: {
          accept: 'application/json',
          'content-type': 'application/json'
      },
        body: JSON.stringify(val)
      })
      .then(res => 
        res.json()
      )
      .catch(err => console.log(err))
}

const reducer = (state: MatrixTableState, action: MatrixAction): MatrixTableState => {

  switch(action.type) {
    case 'GET_ALL_DATA':
      state.matrix = action.payload;
      return {
        ...state,
      }
      
    case 'SET_MATRIX':
      return {
        ...state,
      }
    case 'SAVE_JSON':
      saveJson(state.matrix);
      return {
        ...state
      }
    case 'EDIT_ACTION':
      state.matrix[action.payload.keyName][action.payload.fieldName] = action.payload.value;
    
      if(action.payload.fieldName == "lite"){
        state.matrix[action.payload.keyName].standard = action.payload.value * 2;
        state.matrix[action.payload.keyName].unlimited = action.payload.value * 3;
      }
      return {
        ...state
      }
    case 'CLEAR_PRICING':
      state.matrix = emptyMatrix;
      return {
        ...state
      }
    default:
      return state
  }
}

export const MatrixTableContext = createContext<[MatrixTableState, import('react').Dispatch<MatrixAction>]>([defaultState, () => {}])

/**
 * This is the provider that hosts the state
 * @param param0 
 */
export const MatrixTableContextProvider: import('react').FC<ProviderProps> = ({ initialMatrix, children }) => {
  const state = useReducer(reducer, { matrix: initialMatrix || emptyMatrix, originalMatrix: initialMatrix || emptyMatrix })

  return (
    <MatrixTableContext.Provider value={state}>
      {children}
    </MatrixTableContext.Provider>
  )
}