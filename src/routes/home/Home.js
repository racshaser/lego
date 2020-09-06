import React, { Component } from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import Layout from "../../components/Layout/Layout";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import WeakOverview from "../../components/WeakOverview/WeakOverview";
import RecentExpenses from "../../components/RecentExpenses/RecentExpenses";
import styles from './Home.css';

class Home extends Component {
  render() {
    return (
     <Layout>
       <SectionTitle left="Overview" />
       <div className={styles.overview}>
         <WeakOverview />
         <RecentExpenses />
       </div>
     </Layout>
    )
  }
}

export default withStyles(styles)(Home);
