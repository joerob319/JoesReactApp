import React from 'react';
import { Collection } from 'firestorter';
import { observer } from 'mobx-react';
import  { WeightGraph } from './WeightGraph'
import { DateConversion } from '../Helpers'
import { IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import 'mobx-react-lite/batchingForReactDom'
import '../App.css'
import classNames from 'classnames';
import { db } from '../firebase';



//Retrieve data from Firebase
const weight = new Collection('weight', {
  query: (ref) => ref.orderBy('date')
});



const onPressDelete = async doc => { 
    doc.delete()
};

const WeightItem = observer(({doc}) => {
  const {id, weight} = doc.data;
  const Date = DateConversion (doc.data.date.seconds).toLocaleDateString("en-GB")
  return <tr key = {id}>
            <td>{Date}</td>
            <td>{weight}</td>
            <td>
              <IconButton  onClick = {()=>onPressDelete (doc)} aria-label="delete">
                <DeleteIcon color='error' />
              </IconButton>
            </td>
          </tr>
});


const WeightGrid = observer(class Weight extends React.Component {
  render() {
    return (
    <div className="row">
        <div className="column">
          <table className="list-group">
            <tr>
              <th>Date</th>
              <th>Weight</th>
              <th></th>
            </tr>
          {weight.docs.map((doc) => (
                <WeightItem
                  key={doc.id}
                  doc={doc} />
              ))}
          </table>
        </div>
        <div className={classNames("column", "graph")}>
            <WeightGraph docs = {weight.docs} />
        </div>
    </div>
    )
  }
});

export default WeightGrid