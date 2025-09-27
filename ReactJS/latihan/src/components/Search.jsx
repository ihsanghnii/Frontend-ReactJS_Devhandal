import { useState } from "react";

function Search(props) {
  const [search, setSearch] = useState("");

  const onSearchChange = () => {
    props.onSearchChange(search);
  };

  const searchKeydOwn = (e) => {
    if (e.key === "Enter") {
      onSearchChange();
    }
  };

  return (
    <>
      <div>
        Cari Artikel :{" "}
        <input
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={searchKeydOwn}
        ></input>
        <button onClick={onSearchChange}>Cari</button>
      </div>
      <small>
        Ditemukan {props.totalPosts} data dengan pencarian kata {searchKeydOwn}
      </small>
    </>
  );
}

export default Search;
