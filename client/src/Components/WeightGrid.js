import React from 'react';
import { Collection } from 'firestorter';
import { observer } from 'mobx-react';
import  { WeightGraph } from './WeightGraph'
import { DateConversion } from '../Helpers'
import 'mobx-react-lite/batchingForReactDom'
import '../App.css'
import classNames from 'classnames';



//Retrieve data from Firebase
const weight = new Collection('weight', {
  query: (ref) => ref.orderBy('date')
});


const WeightItem = observer(({doc}) => {
  const weight = doc.data.weight;
  const Date = DateConversion (doc.data.date.seconds).toLocaleDateString("en-GB")
  return <div>
    <p>{weight} - {Date}</p>
  </div>;
});


const WeightGrid = observer(class Weight extends React.Component {
  render() {
    return (
    <div className="row">
        <div className="column">
          {weight.docs.map((doc) => (
                <WeightItem
                  key={doc.id}
                  doc={doc} />
              ))}
        </div>
        <div className={classNames("column", "graph")}>
            <WeightGraph docs = {weight.docs} />
        </div>
    </div>
    )
  }
});

export default WeightGrid