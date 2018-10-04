import React from "react";

import List from "../../organisms/List";
import Layout from './../Layout';

const Home = ({tasks, removeElement}) => (
  <Layout>
    <List tasks={tasks} removeElement={removeElement} />
  </Layout>
);

export default Home;
