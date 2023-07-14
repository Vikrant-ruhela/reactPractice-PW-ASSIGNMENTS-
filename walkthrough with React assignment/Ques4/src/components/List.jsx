function List({ items }) {
    return (
        <ul>
            {items.map((element, index) => ((<li key={index}>{element}</li>)))}
        </ul>
    )
}

export default List