import React from "react";

import List from "../../organisms/List";
import Layout from './../Layout';

const Pending = ({tasks, removeElement}) => (
  <Layout>
    <List tasks={tasks.filter(item=>!item.done)} removeElement={removeElement} />
  </Layout>
);

export default Pending;
