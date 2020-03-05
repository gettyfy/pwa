import React from 'react';
import Hello from './pages/Dashboard/Hello';

// import Layout from './Layout'
type AppProps = {
  msg: string
}

export default class App extends React.Component<{}, AppProps> {
  constructor(props: any) {
    super(props)
  }

  componentDidMount() {
    // window && window.analytics ? window.analytics.page() : ''
  }

  render() {
    return (
      <div>
        <Hello />
      </div>

    )
  }
}
