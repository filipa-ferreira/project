
import { useDispatch } from "react-redux";
import { searchByTitle, showAllBooks, showNotReadBooks, showReadBooks } from "../booksSlice";
import { useEffect, useState } from "react";


export default function BookFilters() {
    
  let dispatch = useDispatch();

  const [value, setValue] = useState('');

  useEffect(() => {
    dispatch(searchByTitle(value));
  }, [value])
  

  //console.log(filteredBooks);

  return (
    <section className="filters">
        <button className="btn" onClick={()=>dispatch(showAllBooks())}>all</button>
        <button className="btn" onClick={()=>dispatch(showReadBooks())}>read</button>
        <button className="btn" onClick={()=>dispatch(showNotReadBooks())}>not read</button>
        <hr />
        <label htmlFor="title">Search by title</label>
        <input type="text" id="title" value={value} onChange={ e => setValue(e.target.value)}/>
    </section>
  )
}
