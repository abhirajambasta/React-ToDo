import React from "react";

import Form from "../../organisms/Form";
import Layout from './../Layout';

const AddNew = ({addTasks}) => (
  <Layout>
    <Form addTasks={addTasks} />
  </Layout>
);

export default AddNew;
