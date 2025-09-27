import { useContext } from "react";
import { GlobalContext } from "../context";

// pengecekan di dlm komponen
const ArticleStatus = ({ isNew }) => {
  return isNew && <span>--- baru!!</span>;
};

// yang ini di luar komponen
// const NewArticle = () => {
//   return <span>--- baru</span>
// }

function Article(props) {
  const user = useContext(GlobalContext);

  return (
    <>
      <h3>{props.title}</h3>
      <small>
        Date : {props.date}, tags : {props.tags.join(", ")}
        {/* ini buat tampilin contohnya kaya label baru atau lama */}
        {/* {props.isNew ? "-- Baru --" : "lama"} */}
        {/* ini versi singkat */}
        {/* {props.isNew && "-- Baru --"} */}
        {/* ini versi lain */}
        <ArticleStatus isNew={props.isNew} />
        {/* {props.isNew && <NewArticle />} */}
      </small>
      <div>
        <small>Ditulis oleh {user.username}</small>
      </div>
    </>
  );
}

export default Article;
