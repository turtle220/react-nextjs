import classnames from 'classnames'
import React, { useContext, useEffect,useState } from 'react'
import { MatrixTableContext, MatrixTableContextProvider } from './context'

  type Props = {
    initialMatrix?: import('../../types').Matrix
  } & import('react').HTMLAttributes<HTMLDivElement>

  /**
   * Add 4 buttons: 
   * - Cancel to reset the matrix to how it was before changing the values (only when in edit mode)
   * - Edit to make the fields editable (only when not in edit mode)
   * - Clear to completely clear the table
   * - Save to save the table
   * @param param0 
   */
  const MatrixTable: import('react').FC<Omit<Props, 'initialMatrix'>> = ({ className, children, ...props }) => {
  // State ------------------------------------------------------------------- //
  const [{ matrix }, dispatch] = useContext(MatrixTableContext)
  const [ matrixData, setMatrixData]  = useState(matrix);
  const [ enableEdit, setEnableEdit ] = useState(true);
  
  // Handlers ---------------------------------------------------------------- //
  useEffect(()=>{
    fetch('http://localhost:3000/api/pricing', {
      method: 'GET',
      headers: {
          accept: 'application/json',
          'content-type': 'application/json'
      },
    })
    .then(res => 
      res.json()
    )
    .then(data=> {
      setMatrixData(data);
      dispatch({type: 'GET_ALL_DATA', payload: data });

    })
    .catch(err => console.log('---error', err));
  },[])

  // You can save (to api) the matrix here. Remember to update originalMatrix when done.
  const save = async () => {
    dispatch({type: 'SAVE_JSON'});
  }
  
  const edit = ()=>{
    console.log("editbutton");
    setEnableEdit(false);
  }

  const cancel = ()=>{
    console.log("cancelbutton");
    setEnableEdit(true);
  }

  const clear = () => {
    console.log('clear')
    dispatch({type: 'CLEAR_PRICING'});
  }

  return (
    <div className={classnames(['container', className])} {...props}>
      <table id="customers">
        <tr>
          <th>months</th>
          <th>lite</th>
          <th>standard</th>
          <th>unlimited</th>
        </tr>
      
        {Object.keys(matrix).map((keyName, i) => 
          <tr>
            <td>{keyName}</td>
            {enableEdit ? (
              <>
                <td>{matrix[keyName].lite}</td>
                <td>{matrix[keyName].standard}</td>
                <td>{matrix[keyName].unlimited}</td>
              </>
            ) : (
              <>
                <td><input type='number' defaultValue={matrix[keyName].lite} onChange={event => dispatch({type: 'EDIT_ACTION', payload: {keyName, fieldName: 'lite', value: event.target.value}})} /></td>
                <td><input type='number' defaultValue={matrix[keyName].standard} /></td>
                <td><input type='number' defaultValue={matrix[keyName].unlimited} /></td>
              </>
            )}
          </tr>
        )}
      </table>
      <div className='buttonGroup'>
        <button onClick={save} >Save</button>
        <button onClick={clear} >Clear</button>
        {enableEdit ? <button onClick={edit} >Edit</button> : <button onClick={cancel} className="btn btn-success">Show</button>}
      </div>

      <style>{`
        .container {
          margin:0;
          width:100%
        }
        #customers {
          font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
          border-collapse: collapse;
          width: 100%;
        }
        
        #customers td, #customers th {
          width: 250px;
          border: 1px solid #ddd;
          padding: 8px;
        }
        
        #customers tr:nth-child(even){background-color: #f2f2f2;}
        
        #customers tr:hover {background-color: #ddd;}
        
        #customers th {
          padding-top: 12px;
          padding-bottom: 12px;
          text-align: left;
          background-color: #4CAF50;
          color: white;
        }
        .buttonGroup {
          padding-top: 20px;
        }
        .buttonGroup button {
          width: 60px;
          height: 25px;
          margin-left: 10px;
        }
      `}</style>
    </div>
  )
}

const MatrixTableWithContext: import('react').FC<Props> = ({ initialMatrix, ...props }) => {
  // You can fetch the pricing here or in pages/index.ts
  // Remember that you should try to reflect the state of pricing in originalMatrix.
  // matrix will hold the latest value (edited or same as originalMatrix)

  return (
    <MatrixTableContextProvider initialMatrix={initialMatrix}>
      <MatrixTable {...props} />
    </MatrixTableContextProvider>
  )
}

export default MatrixTableWithContext
