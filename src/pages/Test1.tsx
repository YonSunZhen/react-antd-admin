import React from 'react';
import { withRouter } from 'react-router-dom'
import { getTestData } from '../services';


class Test1 extends React.Component {

  async componentDidMount() {
    console.log('debug1');
    console.log(await getTestData());
  }

  getTestData = async () => {
    const res: any = await getTestData();
    return res;
  }


  render() {
    return (
      <div>
        Test1
      </div>
    );
  }
}


export default Test1;
