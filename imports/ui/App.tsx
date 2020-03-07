import React from 'react';
import Hello from '/imports/ui/pages/workspace/dashboard';

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
