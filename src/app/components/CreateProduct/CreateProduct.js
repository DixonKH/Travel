import { useState } from "react";
import CreateForm from "./CreateForm";

function CreateProduct(props) {

  const [showForm, updateShowForm] = useState(false);

  function onCreateProduct(product) {
    props.createProduct(product);
  }

  function onCreateNewProduct() {
    updateShowForm(!showForm);  
  }

  function onProductSubmitCancel() {
    updateShowForm(false);  
  }

  return (
    <div>
      {!showForm && <button onClick={onCreateNewProduct}>Create Product</button>}
      {showForm && <CreateForm createProduct={onCreateProduct} onCancel={onProductSubmitCancel} />}
    </div>
  );
}

export default CreateProduct;
