import React, {memo} from 'react';

const DummyHugeComponent = memo(function (props) {
  let {dummyProp, display} = props;
  console.count('@rajesh DummyHugeComponent render')
  return <div>
    Display: {display}
  </div>
})

export default DummyHugeComponent
