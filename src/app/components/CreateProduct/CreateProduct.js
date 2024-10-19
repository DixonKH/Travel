import CreateForm from "./CreateForm";

function CreateProduct(props) {
  function onCreateProduct(product) {
    // console.log(product);
    props.createProduct(product);
  }
  return (
    <div>
      <CreateForm createProduct={onCreateProduct} />
    </div>
  );
}

export default CreateProduct;
