import React, { Component } from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import Layout from "../../components/Layout/Layout";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import WeakOverview from "../../components/WeakOverview/WeakOverview";
import styles from './Home.css';

class Home extends Component {
  render() {
    return (
     <Layout>
       <SectionTitle left="Overview" />
       <WeakOverview />
     </Layout>
    )
  }
}

export default withStyles(styles)(Home);
