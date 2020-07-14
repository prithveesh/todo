import React, {useCallback, useEffect, useMemo, useState} from 'react';
import DummyHugeComponent from "./DummyComponent";

function Root() {
return <div>
  <TaskListWithHooks/>
  <TaskListWithHooks/>
  <TaskListWithHooks/>
  <TaskListWithHooks/>
  <TaskListWithHooks/>
  <TaskListWithHooks/>
  <TaskListWithHooks/>
</div>
}


function TaskListWithHooks({isLogged}) {
  /*const valueAndUpdater = useState(0)
  const count = valueAndUpdater[0]
  const setCount = valueAndUpdater[1]*/

  console.log('line 22')

  const [count, setCount] = useState(1);
  const [multipleCount, setMultipleCount] = useState(2);

  console.log('line 22')

  const mount = function () {

  }
  const increment = useCallback(function () {
    setCount(function (prevCount) {
      return prevCount + 1;
    });
  }, [])

  const decrement = useCallback(function () {
    setCount(prevCount => prevCount - 1);
  }, [])

  const multiply = () => {
    setMultipleCount(multipleCount * multipleCount)
  };
  const sqrt = () => {
    setMultipleCount(Math.sqrt(multipleCount))
  }

  const val = useMemo(function () {
    return count + multipleCount;
  }, [multipleCount, count])

  useEffect(function () {
    let timer = setTimeout(() => {}, 1000)
    return function () {
      clearTimeout(timer)
    }
  }, [])

  return <div>
    <span onClick={increment} style={{padding: 12, margin: 12}}>+</span>
    count: {count}
    <span onClick={decrement} style={{padding: 12, margin: 12}}>-</span>
    <div style={{marginTop: 24}}>
      <span onClick={multiply} style={{padding: 12, margin: 12}}>x</span>
      count: {multipleCount}
      <span onClick={sqrt} style={{padding: 12, margin: 12}}>/</span>
    </div>
    <DummyHugeComponent dummyProp={increment} display={val}/>
  </div>

}

export default TaskListWithHooks;
