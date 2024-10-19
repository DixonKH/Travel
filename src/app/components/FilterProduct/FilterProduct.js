
function FilterProduct(props) {
    function onFilterChange(event) {
     console.log("filterValue: ", event.target.value);
     props.filterValueSelected(event.target.value);
    }
  return (
    <div className="filter-area">
        <select name="isAvailable" onChange={onFilterChange}>
            <option value="all">All</option>
            <option value="available">Available</option>
            <option value="unavailable">Unavailable</option>
        </select>
    </div>
  )
}

export default FilterProduct;