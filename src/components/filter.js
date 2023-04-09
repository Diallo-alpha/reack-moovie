const Filter = ({handleTitleFilter, handleRatingFilter}) =>{
    return (
        <div className="filter">
            <input type="text" placeholder="titre" onChange={handleTitleFilter} />
            <input type="number" placeholder="Note" min="0" max ="5" onChange={handleRatingFilter} />
        </div>
    );
};
export default Filter