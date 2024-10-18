import CreateForm from "./CreateForm";

function CreateProduct(props) {
    function onCreateProduct(product) {
      // console.log(product);
      props.createProduct(product);
    }
    return (
        <div className="row my-5">
           <div className="col-lg-8 mx-auto">
            <CreateForm createProduct={onCreateProduct} />
           </div>
        </div>
    )

}

export default CreateProduct;