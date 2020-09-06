import React, { Component } from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import Layout from "../../components/Layout/Layout";
import styles from './Home.css';

class Home extends Component {
  render() {
    return (
     <Layout>
       <div className={styles.overview}>
         <h1>Hello, World!</h1>
       </div>
     </Layout>
    )
  }
}

export default withStyles(styles)(Home);
