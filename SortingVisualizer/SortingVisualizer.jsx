// bhyi i love this code more than momos

import React from "react";
import './SortingVisualizer';
import './SortingVisualizer.css';
import * as SortingAlgorithms from './SortingAlgorithms';


export default class SortingVisualizer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            array: [],
        };
    }

    componentDidMount() {
        this.resetArray();
    }

    resetArray() {
        const array = [];
        for (let i = 0; i < 147; i++) {
            array.push(randomIntFromInterval(5, 650));
        }
        this.setState({ array });
    }

    mergeSort() {
        const javaScriptSortedArray = this.state.array
            .slice()
            .sort((a, b) => a - b);
        const sortedArray = SortingAlgorithms.mergeSort(this.state.array);
        
        console.log(arraysAreEqual(javaScriptSortedArray, sortedArray));

    }

    quickSort() { }

    heapSort() { }

    bubbleSort() { }

    testSortingAlgotrithms(){
      for (let i=0;i<100;i++){
        const array =[];
        const length = randomIntFromInterval(1,1000);
        for(let i=0; i<length;i++){
            array.push(randomIntFromInterval(-1000, 1000));
        }
        const javaScriptSortedArray = array.slice().sort((a,b)=>a-b);
        const sortedArray = SortingAlgorithms.mergeSort(this.state.array);
        console.log(arraysAreEqual(javaScriptSortedArray, sortedArray));

      }
    }

    

    render() {
        const { array } = this.state;

        return (
            <div className="array-container">
                {array.map((value, idx) => (
                    <div className="array-bar"
                        key={idx}
                        style={{ height: `${value}px` }}></div>
                ))}
                {/* => callback function */}
                <button onClick={() => this.resetArray()}>Generate New Array</button>
                <button onClick={() => this.mergeSort()}>Merge Sort</button>
                <button onClick={() => this.quickSort()}>Quick Sort</button>
                <button onClick={() => this.heapSort()}>Heap Sort</button>
                <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
                <button onClick={() => this.testSortingAlgotrithms()}>Test Sorting Algotrithms</button>
            </div>



        )

    };

}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function arraysAreEqual(arrayOne, arrayTwo) {
    console.log('foo');
    if (arrayOne.length !== arrayTwo.length) return false;
    console.log('foo');
    for (let i = 0; i < arrayOne.length; i++) {
        if (arrayOne[i] !== arrayTwo[i]) return false;
    }
    return true;
}




