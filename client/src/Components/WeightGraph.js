import React, { useState, useEffect} from 'react';
import {Line} from "react-chartjs-2" 
import { DateConversion } from '../Helpers'
import 'mobx-react-lite/batchingForReactDom'



const createXaxis = (docArr) => {
    let arr = []
    docArr.map ((doc) => {
        const Date = DateConversion (doc.data.date.seconds).toLocaleDateString("en-GB")
        arr.push(Date)
      })
      return arr
  }
  
  const createYaxis = (docArr) => {
    let arr = []
      docArr.map ((doc) => {
        arr.push(doc.data.weight)
      })
      console.log (arr)
      return arr
  }

export class WeightGraph extends React.Component {
  
    render () {
      const docs = this.props.docs;
      const arrX = createXaxis (docs)
      const arrY = createYaxis (docs)
  
      const lineData = {
              labels: arrX,
              datasets: [
                {
                  legend: false,
                  fill: true,
                  backgroundColor: '#833084',
                  borderColor: '#833084',
                  pointBorderColor: '#833084',
                  pointRadius: 1,
                  data: arrY
                }
              ]
            }
      
  
      return <Line data={lineData} legend={{display:false}} height='300px' width='600px'/>
    }
  } 


